"use client"

import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const formUrl = "https://www.privyr.com/f/mD4m3M4Q9q"

  return (
    <Button
      onClick={() => window.open(formUrl, "_blank")}
      className="fixed bottom-[30px] right-6 h-14 px-8 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95 z-[9999]"
      style={{ 
        backgroundColor: "#0066FF", 
        color: "#ffffff", 
        fontWeight: "600",
        fontSize: "16px",
        border: "none",
        display: "flex",
        width: "auto"
      }}
    >
      Enquire Now
    </Button>
  )
}
