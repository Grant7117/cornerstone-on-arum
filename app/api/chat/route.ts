export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ reply: "Invalid request." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages,
      }),
    });

    if (!r.ok) {
      const text = await r.text();
      return new Response(JSON.stringify({ reply: "Upstream error.", error: text }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = await r.json();
    const reply = data?.choices?.[0]?.message?.content ?? "No response.";
    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ reply: "Server error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
