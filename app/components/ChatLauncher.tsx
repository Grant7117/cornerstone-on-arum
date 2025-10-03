'use client';

import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

type LauncherProps = {
  offsetPx?: number;
  rightPx?: number;
  id?: string;
};

export default function ChatLauncher({
  offsetPx = 200,   // higher so it clears WhatsApp
  rightPx = 16,
  id = "chat-launcher",
}: LauncherProps) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  const target = useMemo(() => (typeof window !== "undefined" ? document.body : null), []);
  if (!mounted || !target) return null;

  return createPortal(
    <>
      {open && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-[998] bg-black/30"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Panel */}
      <div
        role="dialog"
        aria-label="Cornerstone on Arum chat"
        aria-modal={open ? "true" : "false"}
        className={[
          "fixed z-[999] w-[88vw] max-w-[420px] h-[70vh] max-h-[720px]",
          open ? "opacity-100" : "opacity-0 pointer-events-none",
          "transition-opacity duration-300",
        ].join(" ")}
        style={{ right: rightPx, bottom: offsetPx + 64 }}
      >
        <div className="flex h-full w-full flex-col rounded-2xl shadow-2xl border border-slate-200 bg-white overflow-hidden">
          <header className="flex items-center justify-between px-4 py-3 border-b">
            <div className="text-sm font-semibold">Chat support</div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat panel"
              className="rounded-full p-2 hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-slate-400"
            >
              ✕
            </button>
          </header>
          <ChatPanel />
        </div>
      </div>

      {/* Launcher Button */}
      <button
        id={id}
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen(v => !v)}
        className={[
          "fixed z-[1100] h-16 w-16 rounded-full shadow-xl border-2 border-white",
          "bg-[#0b1f3a] text-white",
          "flex items-center justify-center",
          "transition-transform duration-300 hover:scale-110 active:scale-95",
          "focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60",
        ].join(" ")}
        style={{ right: rightPx, bottom: offsetPx }}
      >
        {/* Simple chat icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" fill="currentColor">
          <path d="M2 12c0-4.97 4.48-9 10-9s10 4.03 10 9-4.48 9-10 9c-1.39 0-2.72-.26-3.92-.74L4 21l1.09-3.27A8.55 8.55 0 0 1 2 12z"/>
        </svg>
      </button>
    </>,
    target
  );
}

function ChatPanel() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState<Array<{ role: "user" | "assistant"; text: string }>>([]);
  const [busy, setBusy] = useState(false);

  async function send() {
    const t = input.trim();
    if (!t) return;
    setItems(prev => [...prev, { role: "user", text: t }]);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        cache: "no-store",
        body: JSON.stringify({ messages: [{ role: "user", content: t }] }),
      });
      const data = await res.json();
      const reply = data?.reply ?? "No response.";
      setItems(prev => [...prev, { role: "assistant", text: reply }]);
    } catch {
      setItems(prev => [...prev, { role: "assistant", text: "Network error." }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {items.map((m, i) => (
          <div
            key={i}
            className={
              m.role === "user"
                ? "ml-auto max-w-[80%] rounded-2xl px-3 py-2 bg-slate-900 text-white"
                : "mr-auto max-w-[80%] rounded-2xl px-3 py-2 bg-slate-100"
            }
          >
            <p className="text-sm leading-relaxed">{m.text}</p>
          </div>
        ))}
      </div>
      <form
        className="border-t p-3 flex gap-2"
        onSubmit={e => {
          e.preventDefault();
          if (!busy) void send();
        }}
      >
        <input
          aria-label="Type your message"
          className="flex-1 rounded-xl border px-3 py-2 focus:outline-none focus-visible:ring focus-visible:ring-slate-400"
          placeholder="Ask about availability, pricing, or floor plans"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          type="submit"
          disabled={busy}
          className="rounded-xl px-4 py-2 border bg-slate-900 text-white disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
}
