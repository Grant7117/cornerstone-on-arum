"use client"

// ─────────────────────────────────────────────────────────────────────────────
// Cornerstone on Arum — Core Brand Copywriting
// Sections: Manifesto, Structural, Security, Financial, Returns
// ─────────────────────────────────────────────────────────────────────────────

export function CopywritingSection() {
  return (
    <div className="bg-sand-drift">
      {/* ── MANIFESTO ── */}
      <section id="about" className="py-24 md:py-32 border-b border-muted-bronze/10">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-bronze font-bold">
            The Manifesto
          </span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-deep-obsidian leading-[0.9] tracking-tighter">
            Designed For Living, <br />
            <span className="italic text-muted-bronze font-light">Crafted For Life</span>
          </h2>
          <p className="font-sans text-xl md:text-2xl text-deep-obsidian/70 font-light leading-relaxed max-w-3xl mx-auto">
            Cornerstone on Arum sets a benchmark for residential living in Table View. The development offers premium apartments within a secure and well-managed community, designed to deliver long-term value through superior standards of design, sustainability, and comfort. Featuring 22 thoughtfully designed one- and two-bedroom units, the project presents an exceptional investment opportunity.
          </p>
        </div>
      </section>

      {/* ── STRUCTURAL INTEGRITY ── */}
      <section className="py-24 md:py-32 border-b border-muted-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-bronze font-bold">
                Engineering
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep-obsidian leading-[0.9] tracking-tighter">
                A Foundation You <br />
                <span className="italic text-muted-bronze font-light">Can Trust</span>
              </h2>
            </div>
            <div className="space-y-6">
              <p className="font-sans text-lg text-deep-obsidian/70 leading-relaxed font-light">
                Our development features a proprietary full concrete frame. A superior construction method that ensures unmatched structural integrity. For you, this means more than just safety; it means a quieter home with significantly reduced noise transfer and a structure that resists the typical cracks of standard builds. It is an investment in absolute stability and lasting comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECURITY & PEACE OF MIND ── */}
      <section id="security" className="py-24 md:py-32 border-b border-muted-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-bronze font-bold">
              Security
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-deep-obsidian leading-[0.9] tracking-tighter">
              Peace of{" "}
              <span className="italic text-muted-bronze font-light">Mind</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* No Airbnb */}
            <div className="bg-deep-obsidian p-8 md:p-10 space-y-5">
              <h3 className="font-serif text-2xl text-warm-stone leading-tight">
                No Airbnb or Short-Term Rental Policy
              </h3>
              <p className="font-sans text-base text-warm-stone/55 leading-relaxed font-light">
                At Cornerstone on Arum, we are implementing a policy that mandates a minimum rental period of six months. Our strategy is to build a superior residential product. We are shielding investors from a volatile market while creating a secure, stable, and desirable community. This commitment to long-term living is the foundation that will make Cornerstone on Arum a landmark success.
              </p>
            </div>

            {/* AI CCTV */}
            <div className="bg-deep-obsidian p-8 md:p-10 space-y-5">
              <h3 className="font-serif text-2xl text-warm-stone leading-tight">
                State-of-the-Art, AI-Integrated CCTV
              </h3>
              <p className="font-sans text-base text-warm-stone/55 leading-relaxed font-light">
                Absolute peace of mind is engineered directly into our infrastructure. Your home is protected by an invisible, proactive security shield featuring 24/7 CCTV off-site monitoring directly linked to an armed response team. Coupled with strict access control and dedicated, secure off-street parking for every unit, we guarantee a seamless, undisturbed living experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINANCIAL INTELLIGENCE ── */}
      <section id="financing" className="py-24 md:py-32 border-b border-muted-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-bronze font-bold">
                Financing
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep-obsidian leading-[0.9] tracking-tighter">
                Financial <br />
                <span className="italic text-muted-bronze font-light">Intelligence</span>
              </h2>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl md:text-3xl text-deep-obsidian leading-tight">
                  Zero Transfer Duty
                </h3>
                <p className="font-sans text-lg text-deep-obsidian/70 leading-relaxed font-light">
                  Apartments at Cornerstone on Arum are VAT inclusive, and no transfer duties are payable, saving up to R80,000 in costs.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl md:text-3xl text-deep-obsidian leading-tight">
                  BetterBond: 100 Percent Financing Available
                </h3>
                <p className="font-sans text-lg text-deep-obsidian/70 leading-relaxed font-light">
                  Increase your capital efficiency and experience a frictionless acquisition process. There are absolutely zero transfer duties to pay. Through our exclusive partnership with BetterBond, your home loan application is submitted to multiple leading banks at no cost to you. Benefit from rapid 48-hour pre-approvals and up to 100 percent bond financing with no deposit required for qualifying buyers, ensuring your liquidity remains intact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUPERIOR RETURNS ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-bronze font-bold">
                Investment
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep-obsidian leading-[0.9] tracking-tighter">
                Superior <br />
                <span className="italic text-muted-bronze font-light">Returns</span>
              </h2>
            </div>
            <div className="space-y-6">
              <p className="font-sans text-lg text-deep-obsidian/70 leading-relaxed font-light">
                Sectional title developments are the clear winner for the Blaauwberg Road Corridor in Table View because they align perfectly with the surging market demand for smaller, more efficient living spaces, which saw a 27% value growth in flats and townhouses over the past year. Table View rental demand remains intensely high and is projected to provide returns of 8% to 10%+
              </p>
              <p className="font-sans text-lg text-deep-obsidian/70 leading-relaxed font-light">
                You are risking far less capital to achieve a functionally superior percentage return, all while maintaining the same world-class Cape Town tenant profile.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
