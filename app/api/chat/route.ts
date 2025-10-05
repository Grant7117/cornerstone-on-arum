import { NextResponse } from "next/server";
import OpenAI from "openai";
import knowledge from "../../../data/knowledge";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const FALLBACK = "I could not reach the assistant right now. For immediate help please contact Grant at 072 450 3626.";
const LOW_CONF = "I want to give you an accurate answer. Please contact Grant at 072 450 3626 for the latest details.";

function dot(a: number[], b: number[]) { let s = 0; for (let i = 0; i < a.length; i++) s += a[i] * b[i]; return s; }
function norm(a: number[]) { return Math.sqrt(dot(a, a)); }
function cosine(a: number[], b: number[]) { return dot(a, b) / (norm(a) * norm(b) + 1e-12); }

async function embed(texts: string[]) {
  const r = await openai.embeddings.create({ model: "text-embedding-3-small", input: texts });
  return r.data.map(d => d.embedding as number[]);
}

let kbEmbeddings: number[][] | null = null;

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) return NextResponse.json({ error: "OPENAI_API_KEY missing" }, { status: 500 });

    const { message } = await req.json();
    const user = String(message || "").trim();
    if (!user) return NextResponse.json({ reply: "Please enter a question about pricing, availability, viewings or finance." });

    if (!kbEmbeddings) {
      const corpus = knowledge.map(k => `${k.question}\n${k.answer}`);
      kbEmbeddings = await embed(corpus);
    }

    const [qv] = await embed([user]);
    const scored = knowledge
      .map((k, i) => ({ k, score: cosine(qv, kbEmbeddings![i]) }))
      .sort((a, b) => b.score - a.score);

    const top = scored[0];
    if (!top || top.score < 0.62) {
      return NextResponse.json({ reply: LOW_CONF });
    }

    const context = scored.slice(0, 6).map(s => `• ${s.k.question}\n  ${s.k.answer}`).join("\n");
    const system = [
      "You are the Cornerstone on Arum sales assistant.",
      "Currency is South African Rand, ZAR.",
      "Use a formal, concise style. Do not abbreviate words.",
      "Rules:",
      "- No viewings while under construction.",
      "- Deposit is R5,000 within 7 days of signature for cash or bond buyers.",
      "- Bond approval window is 30 days.",
      "- Transfers start about 60 days before completion; target completion 01 May 2026.",
      "- Quote Total m² when size is relevant.",
      "- If the question is outside knowledge, advise to contact Grant at 072 450 3626."
    ].join("\n");

    const prompt = [
      "Context knowledge:",
      context,
      "",
      "User question:",
      user,
      "",
      "Answer in 4 to 7 short sentences. Always display amounts in ZAR. End with a single clear call to action, for example: “Tap Enquire Now or message Grant on 072 450 3626.”"
    ].join("\n");

    const out = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.3,
      messages: [{ role: "system", content: system }, { role: "user", content: prompt }]
    });

    const reply = out.choices?.[0]?.message?.content?.trim() || LOW_CONF;
    return NextResponse.json({ reply });
  } catch (e) {
    return NextResponse.json({ reply: FALLBACK }, { status: 200 });
  }
}
