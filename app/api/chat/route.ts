import { NextResponse } from "next/server";
import OpenAI from "openai";

type KBItem = { id: string; question: string; answer: string; category?: string };

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

let kb: KBItem[] | null = null;
let kbEmbeddings: number[][] | null = null;

async function loadKB(): Promise<KBItem[]> {
  if (kb) return kb;
  const res = await import("@/data/knowledge.json");
  kb = (res.default || res) as KBItem[];
  return kb!;
}

function dot(a: number[], b: number[]) {
  let s = 0; for (let i = 0; i < a.length; i++) s += a[i] * b[i]; return s;
}
function norm(a: number[]) { return Math.sqrt(dot(a, a)); }
function cosine(a: number[], b: number[]) { return dot(a, b) / (norm(a) * norm(b) + 1e-12); }

async function embedAll(texts: string[]) {
  const resp = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: texts
  });
  return resp.data.map(d => d.embedding as number[]);
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: "OPENAI_API_KEY missing" }, { status: 500 });
    }
    const data = await loadKB();

    // Build or reuse corpus embeddings per cold start
    if (!kbEmbeddings) {
      const corpus = data.map(d => `${d.question}\n${d.answer}`);
      kbEmbeddings = await embedAll(corpus);
    }

    // Embed user query
    const [qv] = await embedAll([message]);

    // Rank KB by cosine similarity
    const ranked = data
      .map((item, i) => ({ item, score: cosine(qv, kbEmbeddings![i]) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);

    const context = ranked.map(r => `• ${r.item.question}\n  ${r.item.answer}`).join("\n");

    const system = [
      "You are the Cornerstone on Arum sales assistant.",
      "Currency is South African Rand (ZAR).",
      "Use clear, formal, professional tone. Do not use abbreviations.",
      "Be concise and factual. If unsure, say so briefly.",
      "Rules:",
      "- No viewings while under construction.",
      "- Deposit is R5,000 within 7 days of signature for cash or bond buyers.",
      "- Bond approval window is 30 days.",
      "- Transfers start about 60 days before completion; target completion 01 May 2026.",
      "- Quote Total m² when size is relevant.",
      "- If asked about availability, remember Unit 301 is SOLD; example of remaining 2-bed: Unit 306 at R2,200,000."
    ].join("\n");

    const prompt = [
      "Context knowledge:",
      context,
      "",
      "User question:",
      message,
      "",
      "Answer in 4–7 concise sentences, ZAR currency format, with a single clear call to action (Invite user to Enquire Now or WhatsApp)."
    ].join("\n");

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.3,
      messages: [
        { role: "system", content: system },
        { role: "user", content: prompt }
      ]
    });

    const reply = completion.choices?.[0]?.message?.content ?? "I am online and ready to help. Please ask your question.";
    return NextResponse.json({ reply });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? "Unhandled error" }, { status: 500 });
  }
}
