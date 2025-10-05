import { NextResponse } from "next/server";
import OpenAI from "openai";
import knowledge from "../../../data/knowledge";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const FALLBACK = "I could not reach the assistant right now. For immediate help please contact Grant at 072 450 3626.";
const LOW_CONF = "I want to give you an accurate answer. Please contact Grant at 072 450 3626 for the latest details.";

// simple helpers
function dot(a: number[], b: number[]) { let s = 0; for (let i = 0; i < a.length; i++) s += a[i] * b[i]; return s; }
function norm(a: number[]) { return Math.sqrt(dot(a, a)); }
function cosine(a: number[], b: number[]) { return dot(a, b) / (norm(a) * norm(b) + 1e-12); }
async function embed(texts: string[]) {
  const r = await openai.embeddings.create({ model: "text-embedding-3-small", input: texts });
  return r.data.map(d => d.embedding as number[]);
}
let kbEmbeddings: number[][] | null = null;

// hard-coded fast answers for business critical queries
function instantAnswer(q: string): string | null {
  const s = q.toLowerCase().replace(/\s+/g, " ").trim();

  const price = "1 bedroom R1 500 000 to R1 600 000. 2 bedroom R2 100 000. 2 bedroom loft R2 600 000. Tap Enquire Now or message Grant on 072 450 3626.";
  if (/(price|pricing|cost|how much|1 ?bed|one bedroom|2 ?bed|two bedroom)/.test(s)) return price;

  if (/(deposit|reservation)/.test(s))
    return "The deposit is R5 000 within 7 days of Offer to Purchase signature. Applies to cash and bond buyers. Tap Enquire Now or message Grant on 072 450 3626.";

  if (/(transfer|completion|handover|occupation)/.test(s))
    return "Transfers start about 60 days before completion. Target completion is 01 May 2026. Tap Enquire Now or message Grant on 072 450 3626.";

  if (/(view|showhouse|show house|visit)/.test(s))
    return "Viewings are not available while under construction. We provide renders, floor plans and specifications. For details message Grant on 072 450 3626.";

  if (/(availability|available|stock|units? available|sold)/.test(s))
    return "Unit 301 is SOLD. Example available 2 bedroom is Unit 306 at R2 200 000. For the latest live stock, message Grant on 072 450 3626.";

  if (/(bond|home loan|finance|betterbond)/.test(s))
    return "BetterBond can assist with up to 100 percent finance. Use the digital application link above or message Grant on 072 450 3626.";

  return null;
}

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) return NextResponse.json({ error: "OPENAI_API_KEY missing" }, { status: 500 });

    const body = await req.json().catch(() => ({}));
    const user = String(body.message || "").trim();
    if (!user) return NextResponse.json({ reply: "Please enter a question about pricing, availability, viewings or finance." });

    // 1) instant business answers
    const fast = instantAnswer(user);
    if (fast) return NextResponse.json({ reply: fast });

    // 2) retrieval with a gentler threshold
    if (!kbEmbeddings) {
      const corpus = knowledge.map(k => `${k.question}\n${k.answer}`);
      kbEmbeddings = await embed(corpus);
    }
    const [qv] = await embed([user]);
    const ranked = knowledge
      .map((k, i) => ({ k, score: cosine(qv, kbEmbeddings![i]) }))
      .sort((a, b) => b.score - a.score);

    const top = ranked[0];
    if (!top || top.score < 0.45) {
      return NextResponse.json({ reply: LOW_CONF });
    }

    const context = ranked.slice(0, 6).map(s => `• ${s.k.question}\n  ${s.k.answer}`).join("\n");
    const system = [
      "You are the Cornerstone on Arum sales assistant.",
      "Currency is South African Rand, ZAR.",
      "Use a formal, concise style. Do not abbreviate.",
      "If uncertain advise the user to contact Grant at 072 450 3626."
    ].join("\n");

    const prompt = [
      "Context knowledge:",
      context,
      "",
      "User question:",
      user,
      "",
      "Answer in 4 to 7 concise sentences in ZAR. End with one call to action such as Enquire Now or message Grant on 072 450 3626."
    ].join("\n");

    const out = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.3,
      messages: [{ role: "system", content: system }, { role: "user", content: prompt }]
    });

    const reply = out.choices?.[0]?.message?.content?.trim() || LOW_CONF;
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ reply: FALLBACK }, { status: 200 });
  }
}
