// app/api/chat/route.ts
import { NextRequest } from "next/server";
import OpenAI from "openai";

import { knowledge } from "@/data/knowledge";

export const runtime = "nodejs"; // easier debugging

export async function GET() {
  // Smoke test in the browser: http://127.0.0.1:3000/api/chat
  const k = process.env.OPENAI_API_KEY ?? "";
  return Response.json({
    ok: true,
    hasKey: !!k,
    keyLen: k.length,
    model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
    temperature: Number(process.env.OPENAI_TEMPERATURE ?? "0.2"),
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
        { error: "OPENAI_API_KEY is missing (check .env.local and restart dev server)" },
        { status: 500 }
      );
    }

    const client = new OpenAI({ apiKey });

    // Inject system prompt with knowledge base
    const systemMessage = {
      role: "system",
      content: `You are a helpful and knowledgeable sales assistant for Cornerstone on Arum, a residential development. 
      Use the following information to answer user questions accurately. 
      If the answer is not in the knowledge base, EXACTLY reply with: "I apologize, I don't have that information on hand right now. However, Grant will be able to assist you with that immediately. You can reach him directly on WhatsApp at 072 450 3626."
      
      ${knowledge}`
    };

    const completion = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: [
        systemMessage,
        ...messages.map((m: any) => ({
          role: m.role,
          content: m.content,
        })),
      ],
      temperature: Number(process.env.OPENAI_TEMPERATURE ?? "0.2"),
    });

    const reply = completion.choices?.[0]?.message?.content ?? "(no content)";
    return Response.json({ reply });
  } catch (e: any) {
    const status =
      e?.status ?? e?.response?.status ?? 500;
    const message =
      e?.response?.data?.error?.message ??
      e?.error?.message ??
      e?.message ??
      "Unknown error calling OpenAI";

    console.error("route.ts error:", { status, message });
    return Response.json({ error: message }, { status });
  }
}
