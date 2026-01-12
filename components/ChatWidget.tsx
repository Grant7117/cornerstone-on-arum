"use client";
import { useEffect, useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const seen = window.sessionStorage.getItem("chat_tip_seen");
    if (!seen) {
      setShowTip(true);
      const t = setTimeout(() => setShowTip(false), 6000);
      window.sessionStorage.setItem("chat_tip_seen", "1");
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <>
      {showTip && (
        <div className="fixed bottom-40 right-6 z-50 rounded-xl bg-white px-4 py-2 text-sm shadow">
          I am here to help. Ask me a question.
        </div>
      )}

      <button
        aria-label="Open Chatbot"
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-white shadow-lg hover:shadow-xl"
      >
        <span className="text-2xl">💬</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40">
          <div className="w-[92vw] max-w-2xl rounded-xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b px-4 py-3">
              <div className="text-base font-semibold">Chat support</div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-1 text-sm hover:bg-gray-100"
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500">
                Ask about availability, pricing, or floor plans.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
