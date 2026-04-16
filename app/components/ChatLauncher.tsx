'use client';

import React, { useEffect, useState } from 'react';

export default function ChatLauncher() {
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
      try { localStorage.setItem('chat_nudge_dismissed', '1'); } catch { }
    }
  }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Panel styles based on state
  const panelStyles = isMobile
    ? {
      bottom: '100px',
      right: '24px',
      left: '24px',
      width: 'auto',
      maxHeight: 'calc(100dvh - 200px)',
      height: '500px',
    }
    : {
      right: '24px',
      bottom: '180px', // Above the chat button (104 + 64 + 12)
      width: '380px',
      maxHeight: 'calc(100vh - 200px)',
      height: '600px',
    };

  return (
    <>
      {open && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-[998] bg-black/30 md:bg-transparent"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Chat Panel */}
      <div
        role="dialog"
        aria-label="Cornerstone on Arum chat"
        aria-modal={open ? 'true' : 'false'}
        className={[
          'fixed z-[999] bg-white shadow-2xl border border-slate-200 overflow-hidden flex flex-col',
          open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none',
          'transition-all duration-300 ease-out',
          'rounded-2xl',
          !isMobile && 'w-[380px]',
        ].join(' ')}
        style={panelStyles}
      >
        <header className="flex items-center justify-between px-4 py-3 border-b shrink-0 bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <div className="text-sm font-semibold text-slate-800">Property Assistant</div>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close chat panel"
            className="text-slate-500 hover:text-slate-700 hover:bg-slate-200 rounded-full p-1 transition-colors"
            title="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </header>
        <ChatPanel onRequestClose={() => setOpen(false)} />
      </div>

      {/* Nudge */}
      {!open && showNudge && (
        <div
          className="fixed z-[1090] max-w-[240px] rounded-2xl shadow-xl px-3 py-2 text-sm bg-[#0b1f3a] text-white border-2 border-white animate-bounce-subtle bottom-[160px] right-6 sm:bottom-[180px]"
        >
          <button
            onClick={() => { setOpen(true); dismissNudge(true); }}
            className="text-left w-full pr-6"
            aria-label="Open chat"
          >
            I am here to help. Ask me a question.
          </button>
          <button
            onClick={() => dismissNudge(true)}
            aria-label="Dismiss"
            className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-white text-[#0b1f3a] text-xs font-bold shadow flex items-center justify-center hover:scale-110 transition-transform"
          >
            ×
          </button>
          <span className="absolute -bottom-2 right-7 border-t-8 border-t-[#0b1f3a] border-x-8 border-x-transparent" />
        </div>
      )}

      {/* Trigger Button */}
      <button
        id="chat-launcher"
        aria-label={open ? 'Close chat' : 'Open chat'}
        onClick={() => { setOpen(v => !v); dismissNudge(true); }}
        // Fixed positioning:
        // Mobile: bottom at 96px (24px + 56px + 16px gap)
        // Desktop: bottom at 104px (24px + 64px + 16px gap)
        className={`fixed z-[1100] h-14 w-14 sm:h-16 sm:w-16 rounded-full shadow-xl border-[3px] border-white bg-[#0b1f3a] text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-500/30 ${open ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'} bottom-[96px] right-6 sm:bottom-[104px]`}
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7">
            <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
          </svg>
        )}
      </button>
    </>
  );
}

function ChatPanel({ onRequestClose }: { onRequestClose: () => void }) {
  const [input, setInput] = useState('');
  const [items, setItems] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([]);
  const [busy, setBusy] = useState(false);
  const bottomRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [items]);

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
      const reply = data?.content ?? data?.reply ?? 'No response.';
      setItems(prev => [...prev, { role: 'assistant', text: reply }]);
    } catch {
      setItems(prev => [...prev, { role: 'assistant', text: 'Network error. Please try again.' }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-col flex-1 min-h-0 bg-white">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
        {items.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center text-slate-400 p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-3 opacity-50">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.159 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
            <p className="text-sm">Ask about prices, availability, or amenities.</p>
          </div>
        )}
        {items.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${m.role === 'user'
                ? 'bg-[#0b1f3a] text-white rounded-br-none'
                : 'bg-slate-100 text-slate-800 rounded-bl-none border border-slate-200'
                }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        {busy && (
          <div className="flex justify-start">
            <div className="bg-slate-100 rounded-2xl rounded-bl-none px-4 py-3 border border-slate-200">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <form
        className="p-2 bg-white border-t border-slate-100 flex items-center gap-2 shrink-0"
        onSubmit={e => { e.preventDefault(); if (!busy) void send(); }}
      >

        <input
          aria-label="Type your message"
          className="flex-1 min-w-0 rounded-xl bg-slate-50 border-0 px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#0b1f3a]/20 focus:bg-white transition-all placeholder:text-slate-400"
          placeholder="Ask a question..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          className="shrink-0 rounded-xl p-2.5 bg-[#0b1f3a] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#1a3a5a] transition-colors shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
