'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = { offsetPx?: number; rightPx?: number; showOnScrollUp?: boolean; minScrollToShow?: number; id?: string };

export default function ChatLauncher({
  offsetPx = 112,
  rightPx = 16,
}: Props) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const target = document.body;

  return createPortal(
    <>
      {open && (
        <div
          className="fixed inset-0 z-[998] bg-black/30"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        role="dialog"
        aria-label="Cornerstone on Arum chat"
        aria-modal={open ? 'true' : 'false'}
        className={[
          'fixed z-[999] w-[88vw] max-w-[420px] h-[70vh] max-h-[720px]',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none',
          'transition-opacity duration-300',
        ].join(' ')}
        style={{ right: rightPx, bottom: offsetPx + 64 }}
      >
        <div className="flex h-full w-full flex-col rounded-2xl shadow-2xl border bg-white overflow-hidden">
          <header className="flex items-center justify-between px-4 py-3 border-b">
            <div className="text-sm font-semibold">Chat support</div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat panel"
              className="rounded-full p-2 hover:bg-slate-100"
            >
              ✕
            </button>
          </header>
          <ChatPanel />
        </div>
      </div>

      <button
        aria-label={open ? 'Close chat' : 'Open chat'}
        onClick={() => setOpen(v => !v)}
        className="fixed z-[1000] h-14 w-14 rounded-full shadow-2xl border bg-white flex items-center justify-center text-xl"
        style={{ right: rightPx, bottom: offsetPx }}
      >
        💬
      </button>
    </>,
    target
  );
}

function ChatPanel() {
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
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
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
        className="border-t p-3 flex gap-2"
        onSubmit={e => {
          e.preventDefault();
          if (!busy) void send();
        }}
      >
        <input
          aria-label="Type your message"
          className="flex-1 rounded-xl border px-3 py-2"
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
