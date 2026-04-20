"use client"

import { Button } from "@/components/ui/button"

interface ManifestoSectionProps {
  onEnquire: () => void
}

export function ManifestoSection({ onEnquire }: ManifestoSectionProps) {
  return (
    <section id="about" className="py-24 bg-sand-drift">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-10">
        <h2 className="font-serif text-5xl md:text-8xl text-deep-obsidian leading-[0.85] tracking-tighter">
          Designed For Living, <br />
          <span className="italic text-muted-bronze font-light">Crafted For Life</span>
        </h2>

        <p className="font-sans text-xl md:text-3xl text-deep-obsidian/80 font-light leading-relaxed max-w-4xl mx-auto">
          Cornerstone on Arum sets a benchmark for residential living in Table View. The development offers premium apartments within a secure and well-managed community, designed to deliver long-term value through superior standards of design, sustainability, and comfort. Featuring 22 thoughtfully designed one- and two-bedroom units, the project presents an exceptional investment opportunity.
        </p>

        <div className="flex justify-center pt-8">
          <Button
            onClick={onEnquire}
            className="bg-deep-obsidian text-warm-stone hover:bg-muted-bronze font-sans uppercase tracking-[0.3em] py-8 px-12 text-[10px] font-bold transition-all duration-500 rounded-none h-auto"
          >
            ENQUIRE NOW
          </Button>
        </div>
      </div>
    </section>
  )
}
