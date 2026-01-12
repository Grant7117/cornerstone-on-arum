"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send } from "lucide-react"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            id: m.id,
            role: m.role,
            content: m.content,
          })),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()

      const assistantMessage: Message = {
        id: data.id || Date.now().toString(),
        role: "assistant",
        content: data.content,
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again or contact us at 072 450 3626.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-white shadow-2xl hover:from-slate-800 hover:to-slate-950 transition-all duration-200 hover:scale-110"
          aria-label="Open chat"
        >
          <MessageCircle className="h-7 w-7" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[600px] w-[400px] flex-col rounded-2xl bg-white shadow-2xl border border-slate-200">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-2xl bg-gradient-to-br from-slate-700 to-slate-900 px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">🤖</div>
              <div>
                <h3 className="text-sm font-semibold">Cornerstone Assistant</h3>
                <p className="text-xs opacity-90">Ask me anything</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 hover:bg-white/20 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-auto p-4 bg-slate-50">
            {messages.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 text-center px-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 text-white text-3xl">
                  🤖
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Welcome!</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    I'm here to help you learn about Cornerstone on Arum. Ask me about units, pricing, location, or
                    amenities.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.role === "assistant" && (
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 text-white text-sm">
                        🤖
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] rounded-xl px-3 py-2 text-sm ${
                        message.role === "user"
                          ? "bg-gradient-to-br from-slate-700 to-slate-900 text-white"
                          : "bg-white text-slate-900 border border-slate-200"
                      }`}
                    >
                      <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                    </div>
                    {message.role === "user" && (
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-200 text-sm">
                        👤
                      </div>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-2">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 text-white text-sm">
                      🤖
                    </div>
                    <div className="rounded-xl bg-white border border-slate-200 px-3 py-2">
                      <div className="flex gap-1">
                        <div className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
                        <div className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
                        <div className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-slate-200 bg-white p-3 rounded-b-2xl">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about units, pricing..."
                disabled={isLoading}
                className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="flex items-center justify-center rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 px-4 py-2 text-white hover:from-slate-800 hover:to-slate-950 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
