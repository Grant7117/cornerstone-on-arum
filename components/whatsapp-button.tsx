"use client"

import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  // Your Privyr Form URL
  const formUrl = "https://l.privyr.com/f/v/mD4m3M4Q9q"

  return (
    <Button
      onClick={() => window.open(formUrl, "_blank")}
      className="fixed bottom-[24px] right-6 h-14 px-6 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-2xl transition-transform hover:scale-105 active:scale-95 z-50 border-2 border-white"
      style={{ width: 'auto' }}
      aria-label="Enquire Now"
    >
      Enquire Now
    </Button>
  )
}
