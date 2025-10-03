'use client';

import React, { useEffect, useState } from 'react';

type LauncherProps = {
  offsetPx?: number;
  rightPx?: number;
  id?: string;
};

export default function ChatLauncher({
  offsetPx = 200,
  rightPx = 16,
  id = 'chat-launcher',
}: LauncherProps) {
  const [open, setOpen] = useState(false);
  const [showNudge, setShowNudge] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem('chat_nudge_dismissed');
      const t1 = window.setTimeout(() => { if (!dismissed) setShowNudge(true); }, 1200);
      const t2 = window.setTimeout(() => setShowNudge(false), 14000);
      return () => { window.clearTimeout(t1); window.clearTimeout(t2); };
    } catch { /* ignore */ }
  }, []);

  function dismissNudge(persist = true) {
    setShowNudge(false);
    if (persist) {
      try { localStorage.setItem('chat_nudge_dismissed', '1'); } catch {}
    }
  }

  return (
    <>
      {open && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-[998] bg-black/30"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        role="dialog"
        aria-label="Cornerstone on Arum chat"
        aria-modal={open ? 'true' : 'false'}
        className={[
          'fixed z-[999] w-[88vw] max-w-[420px] h-[52vh] max-h-[520px]',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none',
          'transition-opacity duration-200',
        ].join(' ')}
        style={{ right: rightPx, bottom: offsetPx + 64 }}
      >
        <div className="flex h-full w-full flex-col rounded-2xl shadow-2xl border border-slate-200 bg-white overflow-hidden">
          <header className="flex items-center justify-between px-4 py-2 border-b">
            <div className="text-[13px] font-semibold">Chat support</div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat panel"
              className="text-base font-bold rounded-full p-1.5 hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-slate-400"
              title="Close"
            >
              ×
            </button>
          </header>
          <ChatPanel onRequestClose={() => setOpen(false)} />
        </div>
      </div>

      {!open && showNudge && (
        <div
          className="fixed z-[1090] max-w-[240px] rounded-2xl shadow-xl px-3 py-2 text-sm bg-[#0b1f3a] text-white border-2 border-white"
          style={{ right: rightPx + 2, bottom: offsetPx + 70 }}
        >
          <button
            onClick={() => { setOpen(true); dismissNudge(true); }}
            className="text-left w-full"
            aria-label="Open chat"
          >
            I am here to help. Ask me a question.
          </button>
          <button
            onClick={() => dismissNudge(true)}
            aria-label="Dismiss"
            title="Dismiss"
            className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-white text-[#0b1f3a] text-xs font-bold shadow"
          >
            ×
          </button>
          <span className="absolute -bottom-2 right-7 border-t-8 border-t-[#0b1f3a] border-x-8 border-x-transparent"></span>
        </div>
      )}

      <button
        id={id}
        aria-label={open ? 'Close chat' : 'Open chat'}
        onClick={() => { setOpen(v => !v); dismissNudge(true); }}
        className="fixed z-[1100] h-16 w-16 rounded-full shadow-xl border-[2.5px] border-white bg-[#0b1f3a] text-white flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
        style={{ right: rightPx, bottom: offsetPx }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" fill="currentColor">
          <path d="M7 8.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 7 8.25Zm0 3.5a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z"/>
          <path fillRule="evenodd" d="M12 3.75c-4.556 0-8.25 3.35-8.25 7.5 0 1.736.647 3.334 1.743 4.621a.75.75 0 0 1 .17.488l-.14 2.208a.75.75 0 0 0 1.013.747l2.324-.86a.75.75 0 0 1 .493.01c.79.287 1.648.446 2.647.446 4.556 0 8.25-3.35 8.25-7.5s-3.694-7.5-8.25-7.5Z" clipRule="evenodd"/>
        </svg>
      </button>
    </>
  );
}

function ChatPanel({ onRequestClose }: { onRequestClose: () => void }) {
  const [input, setInput] = useState('');
  const [items, setItems] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([]);
  const [busy, setBusy] = useState(false);

  async function send() {
    const t = input.trim();
    if (!t) return;
    setItems(prev => [...prev, { role: 'user', text: t }]);
    setInput('');
    setBusy(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        cache: 'no-store',
        body: JSON.stringify({ messages: [{ role: 'user', content: t }] }),
      });
      const data = await res.json();
      const reply = data?.reply ?? 'No response.';
      setItems(prev => [...prev, { role: 'assistant', text: reply }]);
    } catch {
      setItems(prev => [...prev, { role: 'assistant', text: 'Network error.' }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {items.map((m, i) => (
          <div
            key={i}
            className={
              m.role === 'user'
                ? 'ml-auto max-w-[80%] rounded-2xl px-3 py-2 bg-slate-900 text-white'
                : 'mr-auto max-w-[80%] rounded-2xl px-3 py-2 bg-slate-100'
            }
          >
            <p className="text-sm leading-relaxed">{m.text}</p>
          </div>
        ))}
      </div>

      <form
        className="border-t p-3 flex items-center gap-2"
        onSubmit={e => { e.preventDefault(); if (!busy) void send(); }}
      >
        <button
          type="button"
          onClick={onRequestClose}
          className="rounded-xl px-3 py-2 border text-slate-700 hover:bg-slate-100"
          aria-label="Close chat"
          title="Close"
        >
          Close
        </button>
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
