'use client';
import { useState } from 'react';

type Msg = { role: 'user' | 'assistant'; content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Msg[]>([]);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    const next = [...messages, { role: 'user', content: input }];
    setMessages(next);
    setInput('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json().catch(() => null as any);
      if (data?.text) setMessages(m => [...m, { role: 'assistant', content: data.text }]);
    } catch {
      setMessages(m => [...m, { role: 'assistant', content: 'Sorry, something went wrong.' }]);
    }
  }

  if (!open) {
    return (
      <button
        aria-label="Open chat"
        onClick={() => setOpen(true)}
        style={{
          position: 'fixed', right: 16, bottom: 16,
          padding: '10px 14px', borderRadius: 9999, border: '1px solid #e5e7eb',
          background: '#111827', color: 'white', cursor: 'pointer'
        }}
      >
        Chat
      </button>
    );
  }

  return (
    <div style={{
      position: 'fixed', right: 16, bottom: 16, width: 320, height: 420,
      background: 'white', border: '1px solid #e5e7eb', borderRadius: 12,
      boxShadow: '0 10px 30px rgba(0,0,0,.12)', display: 'flex', flexDirection: 'column'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '8px 12px', borderBottom: '1px solid #eee' }}>
        <b>Cornerstone Assistant</b>
        <button onClick={() => setOpen(false)} aria-label="Close">×</button>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: 12 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ margin: '8px 0', textAlign: m.role === 'user' ? 'right' : 'left' }}>
            <span style={{
              display: 'inline-block', padding: '8px 10px', borderRadius: 10,
              background: m.role === 'user' ? '#dbeafe' : '#f3f4f6'
            }}>
              {m.content}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={send} style={{ padding: 8, borderTop: '1px solid #eee', display: 'flex', gap: 8 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask about Cornerstone…"
          style={{ flex: 1, border: '1px solid #e5e7eb', borderRadius: 8, padding: '8px 10px' }}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
