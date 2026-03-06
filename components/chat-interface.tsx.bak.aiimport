"use client"

import type React from "react"

import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, MessageCircle, X, Minimize2, Maximize2, Home, Calendar, Info, MapPin } from "lucide-react"
import { useState, useEffect, useRef } from "react"

interface ChatInterfaceProps {
  isOpen: boolean
  onToggle: () => void
}

export function ChatInterface({ isOpen, onToggle }: ChatInterfaceProps) {
  const [isMinimized, setIsMinimized] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  })

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]")
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      }
    }
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim() && status !== "in_progress") {
      sendMessage({ text: inputValue })
      setInputValue("")
    }
  }

  const handleQuickAction = (message: string) => {
    if (status !== "in_progress") {
      sendMessage({ text: message })
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  if (!isOpen) {
    return (
      <Button
        onClick={onToggle}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary shadow-lg hover:shadow-xl transition-all duration-200 z-50"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    )
  }

  return (
    <Card
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isMinimized ? "h-16 w-80" : "h-[700px] w-96"
      } shadow-2xl border-0 bg-card animate-slide-up`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground rounded-t-lg">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          <div>
            <h3 className="font-semibold text-sm">Property Assistant</h3>
            <p className="text-xs opacity-90">Cornerstone on Arum</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
            onClick={onToggle}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Quick Actions */}
          {messages.length === 0 && (
            <div className="p-4 border-b bg-muted/30">
              <p className="text-xs text-muted-foreground mb-3">Quick actions:</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs bg-transparent"
                  onClick={() => handleQuickAction("Show me available 2-bedroom apartments")}
                  disabled={status === "in_progress"}
                >
                  <Home className="h-3 w-3 mr-1" />
                  2BR Units
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs bg-transparent"
                  onClick={() => handleQuickAction("What amenities are available?")}
                  disabled={status === "in_progress"}
                >
                  <Info className="h-3 w-3 mr-1" />
                  Amenities
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs bg-transparent"
                  onClick={() => handleQuickAction("Tell me about the neighborhood")}
                  disabled={status === "in_progress"}
                >
                  <MapPin className="h-3 w-3 mr-1" />
                  Location
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs bg-transparent"
                  onClick={() => handleQuickAction("I'd like to schedule a viewing")}
                  disabled={status === "in_progress"}
                >
                  <Calendar className="h-3 w-3 mr-1" />
                  Schedule Tour
                </Button>
              </div>
            </div>
          )}

          {/* Messages */}
          <ScrollArea ref={scrollAreaRef} className="flex-1 p-4 h-[520px]">
            <div className="space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground py-8 animate-fade-in">
                  <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="text-sm font-medium">Welcome to Cornerstone on Arum!</p>
                  <p className="text-xs mt-1">
                    I'm here to help you find your perfect home. Ask me about available units, amenities, or schedule a
                    viewing!
                  </p>
                </div>
              )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                      message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                    }`}
                  >
                    {message.parts.map((part, index) => {
                      if (part.type === "text") {
                        return (
                          <div key={index} className="whitespace-pre-wrap">
                            {part.text}
                          </div>
                        )
                      }
                      return null
                    })}
                  </div>
                </div>
              ))}

              {status === "in_progress" && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground rounded-lg px-3 py-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce-simple"></div>
                        <div
                          className="w-2 h-2 bg-current rounded-full animate-bounce-simple"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-current rounded-full animate-bounce-simple"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                      <span className="text-xs">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t bg-background/50">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about properties, amenities, or schedule a viewing..."
                disabled={status === "in_progress"}
                className="flex-1 text-sm"
              />
              <Button
                type="submit"
                size="icon"
                disabled={status === "in_progress" || !inputValue.trim()}
                className="shrink-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <div className="text-xs text-muted-foreground mt-2 text-center">Powered by AI • Cornerstone on Arum</div>
          </div>
        </>
      )}
    </Card>
  )
}
