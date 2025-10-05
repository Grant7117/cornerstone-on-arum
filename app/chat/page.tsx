"use client";
import { useEffect, useRef, useState } from "react";

const WELCOME = "Welcome! 👋 I am your friendly assistant. Feel free to ask me anything about Cornerstone on Arum.";

type Msg = { role: "user" | "assistant"; content: string };

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [log, setLog] = useState<Msg[]>([{ role: "assistant", content: WELCOME }]);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight, behavior: "smooth" });
  }, [log]);

  async function send() {
    const q = input.trim();
    if (!q) return;
    setLog(l => [...l, { role: "user", content: q }]);
    setInput("");
    try {
      const res = await fetch("/api/chat", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify({ message: q }) });
      const data = await res.json();
      setLog(l => [...l, { role: "assistant", content: String(data.reply ?? data.error ?? "I could not reach the assistant. Please contact Grant at 072 450 3626.") }]);
    } catch {
      setLog(l => [...l, { role: "assistant", content: "I could not reach the assistant. Please contact Grant at 072 450 3626." }]);
    }
  }

  function keyDown(e: React.KeyboardEvent<HTMLInputElement>) { if (e.key === "Enter") send(); }

  return (
    <div className="min-h-[80vh] w-full bg-white text-slate-900 p-4">
      {/* Header actions */}
      <div className="max-w-2xl mx-auto mb-4">
        <div className="grid grid-cols-3 gap-2">
          <a
            href="https://digiapp.betterbond.co.za/YolandaKensley/38613/129015"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 rounded-xl bg-blue-600 text-white font-medium shadow hover:opacity-90"
            title="BetterBond — 100% finance"
          >
            BetterBond — 100% finance
          </a>
          <a
            href="/documents"
            className="inline-flex items-center justify-center h-10 rounded-xl bg-slate-800 text-white font-medium shadow hover:opacity-90"
            title="Schedule of Finishes"
          >
            Schedule of Finishes
          </a>
          <a
            href="/apartments"
            className="inline-flex items-center justify-center h-10 rounded-xl bg-slate-800 text-white font-medium shadow hover:opacity-90"
            title="Units available"
          >
            Units available
          </a>
        </div>
      </div>

      {/* Chat area */}
      <div className="max-w-2xl mx-auto border rounded-2xl p-3 bg-slate-50">
        <div ref={boxRef} className="h-[50vh] overflow-auto space-y-3">
          {log.map((m, i) => (
            <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
              <div className={"inline-block px-3 py-2 rounded-2xl " + (m.role === "user" ? "bg-blue-600 text-white" : "bg-white border")}>
                {m.content}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <input
            className="flex-1 border rounded-xl px-3 py-2"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask about pricing, availability, viewings, finance…"
            onKeyDown={keyDown}
          />
          <button onClick={send} className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold">Send</button>
        </div>
        <p className="mt-2 text-xs text-slate-500">If you need immediate help, contact Grant at 072 450 3626.</p>
      </div>
    </div>
  );
}
