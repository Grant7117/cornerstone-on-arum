import OpenAI from "openai";
import type { NextRequest } from "next/server";

export const runtime = "edge";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const messages = Array.isArray(body?.messages)
      ? body.messages
      : (body?.message ? [{ role: "user", content: String(body.message) }] : []);

    if (!process.env.OPENAI_API_KEY) {
      return new Response(JSON.stringify({ error: "Missing OPENAI_API_KEY" }), { status: 500 });
    }
    if (messages.length === 0) {
      return new Response(JSON.stringify({ error: "No message(s) provided" }), { status: 400 });
    }

    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
    const system = process.env.CHAT_SYSTEM_PROMPT ?? "You are a helpful assistant.";

    const response = await client.chat.completions.create({
      model,
      temperature: 0.3,
      messages: [
        { role: "system", content: system },
        ...messages.map((m: any) => ({ role: m.role, content: String(m.content) })),
      ],
    });

    const text =
      response.choices?.[0]?.message?.content ??
      "Sorry—I'm having trouble answering that right now.";

    return new Response(JSON.stringify({ reply: text }), {
      headers: { "content-type": "application/json" },
      status: 200,
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message ?? "Server error" }), { status: 500 });
  }
}
