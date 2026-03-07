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

    const systemPrompt = `You are a knowledgeable and accurate property assistant for Cornerstone on Arum, a residential development at 154 Arum Road, Table View, Cape Town.

RULES:
- Answer ONLY from the knowledge base provided below. Do not assume, invent, or add information not in the knowledge base.
- Be concise and factual. Give direct answers. No filler phrases, no sales pressure, no unsolicited commentary.
- If the answer is not in the knowledge base, say: "I don't have that information. Please contact Grant Whitburn on 072 450 3626."
- Do not volunteer extra information beyond what was asked.

KNOWLEDGE BASE:
${knowledgeText}`;

    const completion = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map((m: { role: string; content: string }) => ({
          role: m.role as "user" | "assistant" | "system",
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
