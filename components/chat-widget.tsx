"use client"

import { useState } from "react"
import { ChatInterface } from "./chat-interface"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return <ChatInterface isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
}
