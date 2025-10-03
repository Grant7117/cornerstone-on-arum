'use client';

import React, { useEffect, useState } from 'react';

type LauncherProps = {
  offsetPx?: number;
  rightPx?: number;
  id?: string;
};

export default function ChatLauncher({
  offsetPx = 200,
  rightPx = 16,       // nudge nearer the right edge
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
    } catch { /* no-op */ }
  }, []);

  function dismissNudge(persist = true) {
    setShowNudge(false);
    if (persist) {
      try { localStorage.setItem('chat_nudge_dismissed', '1'); } catch {}
    }
  }

  return (
    <>
      {/* Backdrop when open */}
      {open && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-[998] bg-black/30"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Chat panel */}
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

      {/* Outside-the-panel greeting bubble */}
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

      {/* Floating launcher button */}
      <button
        id={id}
        aria-label={open ? 'Close chat' : 'Open chat'}
        onClick={() => { setOpen(v => !v); dismissNudge(true); }}
        className={[
          'fixed z-[1100] h-16 w-16 rounded-full shadow-xl border-[2.5px] border-white',
          'bg-[#0b1f3a] text-white',
          'flex items-center justify-center',
          'transition-transform duration-20
