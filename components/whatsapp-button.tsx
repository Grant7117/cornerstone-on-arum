"use client"
export function WhatsAppButton() {
  const formUrl = "https://www.privyr.com/form/zw8VR1xt#cornerstone-on-arum-contact-form"
  return (
    <button
      onClick={() => window.open(formUrl, "_blank")}
      className="fixed bottom-[30px] right-[24px] z-[9998] flex items-center justify-center w-[150px] h-[44px] bg-deep-obsidian text-sand-drift font-sans text-[10px] font-bold uppercase tracking-widest rounded-none shadow-2xl hover:bg-muted-bronze transition-all hover:scale-105 active:scale-95"
    >
      Enquire Now
    </button>
  )
}