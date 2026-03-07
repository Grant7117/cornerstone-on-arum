// app/api/chat/route.ts
import { NextRequest } from "next/server";
import OpenAI from "openai";

import { knowledge } from "@/data/knowledge";

export const runtime = "nodejs";

export async function GET() {
  // Smoke test in the browser: /api/chat
  const k = process.env.OPENAI_API_KEY ?? "";
  return Response.json({
    ok: true,
    hasKey: !!k,
    keyLen: k.length,
    model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages = body?.messages;

    if (!Array.isArray(messages)) {
      return Response.json(
        { error: "Body must contain messages: [{ role, content }, ...]" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: "OPENAI_API_KEY is missing — add it in Vercel Environment Variables" },
        { status: 500 }
      );
    }

    const client = new OpenAI({ apiKey });

    // Serialize the knowledge base into readable text for the system prompt
    const knowledgeText = knowledge
      .map((item) => `Q: ${item.question}\nA: ${item.answer}`)
      .join("\n\n");

    const systemPrompt = `You are a direct, professional, and strategic sales assistant for Cornerstone on Arum — a premium residential development at 154 Arum Road, Table View, Cape Town.

SALES POSTURE: High Demand / Disruptive Opportunity. The development is technically sold out, but several units carry a 72-hour suspensive clause. This is a genuine live opportunity for motivated buyers.

RESPONSE RULES:
- On availability questions: Be direct. "Technically, the building is sold out. However, there are units like [Unit No] marked with a '72-hour clause'. This means there is an accepted offer that is still suspensive. If you are in a position to put down a clean, non-suspensive offer, you have a very real chance of bumping the current buyer and securing the unit."
- On pricing questions: "Prices have been adjusted to reflect demand. Even with the increase, these 72-hour clause units are moving fast."
- If a question is completely outside the knowledge base (e.g. unrelated topics): Politely say "I don't have that information. Grant can assist you directly on WhatsApp at 072 450 3626."
- Keep answers concise, confident and action-oriented. Never be vague or apologetic about availability.

KNOWLEDGE BASE:
${knowledgeText}`;

    const completion = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map((m: { role: string; content: string }) => ({
          role: m.role,
          content: m.content,
        })),
      ],
      temperature: Number(process.env.OPENAI_TEMPERATURE ?? "0.3"),
    });

    // Return 'content' — matching what floating-chat-widget.tsx reads as data.content
    const content = completion.choices?.[0]?.message?.content ?? "(no response)";
    return Response.json({ content });

  } catch (e: unknown) {
    const err = e as { status?: number; message?: string };
    const status = err?.status ?? 500;
    const message = err?.message ?? "Unknown error calling OpenAI";
    console.error("chat route error:", { status, message });
    return Response.json({ error: message }, { status });
  }
}
