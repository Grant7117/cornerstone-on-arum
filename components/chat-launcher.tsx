"use client";
import { useState } from "react";

export default function ChatLauncher({ offsetPx = 200 }: { offsetPx?: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {!open && (
        <div className="chat-welcome">I am here to help. Ask me a question.</div>
      )}
      <button
        aria-label="Open chat"
        onClick={() => setOpen((v) => !v)}
        className="chat-launcher rounded-full bg-brand text-white shadow-card flex items-center justify-center"
      >
        {/* simple chat bubble icon */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M3 12c0-4.418 4.03-8 9-8s9 3.582 9 8-4.03 8-9 8a10.9 10.9 0 0 1-3.9-.7L3 21l1.2-3.2A8.6 8.6 0 0 1 3 12Z" fill="currentColor"/>
        </svg>
      </button>
    </div>
  );
}
