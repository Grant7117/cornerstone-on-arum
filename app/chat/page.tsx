"use client";

import { useState, useRef, useEffect } from "react";

type Msg = { role: "user" | "assistant"; content: string };

export default function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hi. I can help with pricing, availability, viewings and finance. Ask a question below.",
    },
  ]);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scroller.current?.scrollTo({ top: 9e6, behavior: "smooth" });
  }, [messages.length]);

  async function send() {
    const t = text.trim();
    if (!t || busy) return;
    setText("");
    setMessages((m) => [...m, { role: "user", content: t }]);
    setBusy(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: messages
            .concat({ role: "user", content: t })
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Chat failed");
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch (e: any) {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Sorry, I could not reach the assistant. Please try again or call 072 450 3626.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(1000px 600px at 50% -20%, #e5e7eb 0%, transparent 60%)",
        padding: 16,
      }}
    >
      <div
        style={{
          width: 720,
          maxWidth: "95vw",
          background: "#ffffff",
          borderRadius: 16,
          boxShadow:
            "0 22px 48px rgba(0,0,0,0.18), 0 10px 24px rgba(0,0,0,0.10)",
          border: "1px solid #eee",
          overflow: "hidden",
          fontFamily:
            '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial',
        }}
      >
        <header
          style={{
            padding: "14px 18px",
            borderBottom: "1px solid #eee",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background:
              "linear-gradient(135deg,#0f172a 0%, #1e293b 65%, #334155 100%)",
            color: "#fff",
          }}
        >
          <div style={{ fontWeight: 700 }}>Cornerstone Assistant</div>
          <nav style={{ display: "flex", gap: 8 }}>
            <a
              href="https://digiapp.betterbond.co.za/YolandaKensley/38613/129015"
              target="_blank"
              rel="noreferrer"
              style={cta("solid")}
            >
              100% Home Loans
            </a>
            <a href="#units" style={cta()}>
              View Apartments
            </a>
            <a href="#enquire" style={cta()}>
              Book a Viewing
            </a>
          </nav>
        </header>

        <div
          ref={scroller}
          style={{
            maxHeight: "60vh",
            overflow: "auto",
            padding: "12px 16px 16px",
            background: "#fafafa",
          }}
        >
          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: m.role === "user" ? "flex-end" : "flex-start",
                margin: "10px 0",
              }}
            >
              <div
                style={{
                  maxWidth: "85%",
                  padding: "10px 12px",
                  borderRadius: 12,
                  background: m.role === "user" ? "#2563eb" : "#fff",
                  color: m.role === "user" ? "#fff" : "#111",
                  border:
                    m.role === "user"
                      ? "none"
                      : "1px solid rgba(0,0,0,0.08)",
                  boxShadow:
                    m.role === "user"
                      ? "none"
                      : "0 1px 3px rgba(0,0,0,0.06)",
                  whiteSpace: "pre-wrap",
                }}
              >
                {m.content}
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
          style={{
            display: "flex",
            gap: 8,
            padding: 12,
            borderTop: "1px solid #eee",
            background: "#fff",
          }}
        >
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Ask about pricing, availability, floor plans…"
            aria-label="Type a message"
            style={{
              flex: 1,
              height: 44,
              borderRadius: 10,
              border: "1px solid #dcdcdc",
              padding: "0 12px",
              fontSize: 14,
            }}
          />
          <button
            disabled={busy}
            type="submit"
            style={{
              height: 44,
              padding: "0 16px",
              borderRadius: 10,
              border: "none",
              background:
                "linear-gradient(135deg,#2563eb 0%,#3b82f6 60%,#60a5fa 100%)",
              color: "#fff",
              fontWeight: 700,
              opacity: busy ? 0.7 : 1,
              cursor: busy ? "not-allowed" : "pointer",
            }}
          >
            {busy ? "Sending…" : "Send"}
          </button>
        </form>
      </div>
    </main>
  );
}

function cta(kind: "solid" | "ghost" = "ghost"): React.CSSProperties {
  if (kind === "solid") {
    return {
      display: "inline-flex",
      alignItems: "center",
      height: 34,
      padding: "0 12px",
      borderRadius: 999,
      background:
        "linear-gradient(135deg,#10b981 0%,#34d399 60%,#6ee7b7 100%)",
      color: "#083344",
      fontWeight: 700,
      textDecoration: "none",
    };
  }
  return {
    display: "inline-flex",
    alignItems: "center",
    height: 34,
    padding: "0 12px",
    borderRadius: 999,
    border: "1px solid #e5e7eb",
    background: "#fff",
    color: "#111827",
    fontWeight: 600,
    textDecoration: "none",
  };
}
