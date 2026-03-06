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

  const pricingDetails = "Our current pricing is: 1-bedroom units at R1,700,000; 2-bedroom units at R2,300,000; and 2-bedroom lofts at R2,725,000. All prices include transfer duty. Please contact Grant at 072 450 3626 to secure your preferred unit.";
  if (/(price|pricing|cost|how much|1 ?bed|one bedroom|2 ?bed|two bedroom)/.test(s)) return pricingDetails;

  if (/(deposit|reservation)/.test(s))
    return "The reservation deposit is R5,000, payable within 7 days of signing the Offer to Purchase. This applies to both cash and bond-financed purchases. For banking details, please message Grant at 072 450 3626.";

  if (/(72[ -]?hr|clause|suspensive|backup offer)/.test(s))
    return "Several units have accepted offers that are currently suspensive. Under our 72-hour clause, the developer can accept a new, unconditional offer. This gives the original buyer 72 hours to meet the new terms or the unit becomes available to you immediately. Please message Grant at 072 450 3626 for the current list of clause-active units.";

  if (/(transfer|completion|handover|occupation)/.test(s))
    return "Target completion is 01 May 2026. Transfers will be initiated approximately 60 days prior. For a detailed timeline, please message Grant at 072 450 3626.";

  if (/(view|showhouse|show house|visit)/.test(s))
    return "As the site is actively under construction, physical viewings are restricted for safety. We offer high-fidelity 3D renders and detailed specifications to assist your decision. Please message Grant at 072 450 3626 for more information.";

  if (/(availability|available|stock|units? available|sold)/.test(s))
    return "The development is nearing sell-out. Currently, Units 101, 102, 103, 104, 106, 108, 302, 303, and 304 are available under the 72-hour clause logic. All other units are officially SOLD. Contact Grant at 072 450 3626 immediately to verify latest status.";

  if (/(bond|home loan|finance|betterbond)/.test(s))
    return "Cornerstone has partnered with BetterBond to provide up to 100% financing for qualified buyers. You can start your pre-approval via the link on our main page or message Grant at 072 450 3626.";

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
      "You are the senior sales assistant for Cornerstone on Arum. Your tone is confident, exclusive, and highly helpful.",
      "The development is almost entirely sold out, but a select few premium units are available under the 72-hour clause logic.",
      "Explain the 72-hour clause as an opportunity for unconditional buyers to secure a unit currently under a suspensive offer.",
      "Use South African Rand (R / ZAR) for all pricing. Be precise and professional.",
      "If you cannot answer a specific detail, immediately direct the user to Grant at 072 450 3626 for an executive walkthrough."
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
