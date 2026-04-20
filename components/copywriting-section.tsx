"use client"

// ─────────────────────────────────────────────────────────────────────────────
// Cornerstone on Arum — Full Brand Copywriting Section
// Covers: Hero manifesto, Engineering, Security Pillars (3),
//         Aesthetic & Smart Living, Location, Financial Intelligence
// ─────────────────────────────────────────────────────────────────────────────

export function CopywritingSection() {
  return (
    <>
      {/* ── HERO MANIFESTO ── */}
      <section className="py-24 md:py-32 bg-warm-stone/5 border-y border-muted-bronze/10">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-bronze font-bold">
            Cornerstone on Arum
          </span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-warm-stone leading-[0.9] tracking-tighter">
            Designed For Living, <br />
            <span className="italic text-muted-bronze font-light">Crafted For Life</span>
          </h2>
          <p className="font-sans text-xl md:text-2xl text-warm-stone/60 font-light leading-relaxed max-w-3xl mx-auto">
            Cornerstone on Arum sets a benchmark for residential living in Table View. The development offers premium apartments within a secure and well-managed community, designed to deliver long-term value through superior standards of design, sustainability, and comfort.
          </p>
          <div className="flex justify-center">
            <div className="h-[1px] w-24 bg-muted-bronze/40" />
          </div>
          <p className="font-serif text-lg md:text-xl text-warm-stone/50 italic max-w-2xl mx-auto leading-relaxed">
            Featuring 22 thoughtfully designed one- and two-bedroom units, the project presents an exceptional investment opportunity.
          </p>
        </div>
      </section>

      {/* ── ENGINEERING EXCELLENCE ── */}
      <section className="py-24 md:py-32 bg-deep-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: heading block */}
            <div className="space-y-6">
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-bronze font-bold">
                Structural Integrity
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-stone leading-[0.9] tracking-tighter">
                A Foundation You{" "}
                <span className="italic text-muted-bronze font-light">Can Trust</span>
              </h2>
              <div className="h-[1px] w-16 bg-muted-bronze/40" />
            </div>

            {/* Right: body copy */}
            <div className="space-y-6">
              <p className="font-sans text-lg text-warm-stone/60 leading-relaxed font-light">
                Our development features a proprietary full concrete frame. A superior construction method that ensures unmatched structural integrity. For you, this means more than just safety; it means a quieter home with significantly reduced noise transfer and a structure that resists the typical cracks of standard builds.
              </p>
              <p className="font-sans text-lg text-warm-stone/60 leading-relaxed font-light">
                It is an investment in absolute stability and lasting comfort. This superior engineering technique virtually eliminates the structural cracking common in standard residential builds, ensuring a standard designed to endure for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS OF STABILITY — 3 CARDS ── */}
      <section id="security" className="py-24 md:py-32 bg-warm-stone/5 border-y border-muted-bronze/10">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section header */}
          <div className="text-center mb-16 space-y-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-bronze font-bold">
              Community & Security
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-warm-stone leading-[0.9] tracking-tighter">
              Peace of{" "}
              <span className="italic text-muted-bronze font-light">Mind</span>
            </h2>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 — No-Airbnb */}
            <div className="group bg-deep-obsidian border border-muted-bronze/20 p-8 md:p-10 space-y-5 hover:border-muted-bronze/50 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(176,141,87,0.3)]">
              <div className="w-10 h-[2px] bg-muted-bronze" />
              <h3 className="font-serif text-2xl text-warm-stone leading-tight">
                No Airbnb or Short-Term Rental Policy
              </h3>
              <p className="font-sans text-base text-warm-stone/55 leading-relaxed font-light">
                At Cornerstone on Arum, we are implementing a policy that mandates a minimum rental period of six months. Our strategy is to build a superior residential product. We are shielding investors from a volatile market while creating a secure, stable, and desirable community.
              </p>
              <p className="font-sans text-sm text-warm-stone/40 italic leading-relaxed">
                This commitment to long-term living is the foundation that will make Cornerstone on Arum a landmark success.
              </p>
            </div>

            {/* Card 2 — CCTV */}
            <div className="group bg-deep-obsidian border border-muted-bronze/20 p-8 md:p-10 space-y-5 hover:border-muted-bronze/50 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(176,141,87,0.3)]">
              <div className="w-10 h-[2px] bg-muted-bronze" />
              <h3 className="font-serif text-2xl text-warm-stone leading-tight">
                State-of-the-Art, AI-Integrated CCTV
              </h3>
              <p className="font-sans text-base text-warm-stone/55 leading-relaxed font-light">
                Absolute peace of mind is engineered directly into our infrastructure. Your home is protected by an invisible, proactive security shield featuring 24/7 CCTV off-site monitoring directly linked to an armed response team.
              </p>
              <p className="font-sans text-sm text-warm-stone/40 italic leading-relaxed">
                Coupled with strict access control and dedicated, secure off-street parking for every unit, we guarantee a seamless, undisturbed living experience.
              </p>
            </div>

            {/* Card 3 — Pets */}
            <div className="group bg-deep-obsidian border border-muted-bronze/20 p-8 md:p-10 space-y-5 hover:border-muted-bronze/50 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(176,141,87,0.3)]">
              <div className="w-10 h-[2px] bg-muted-bronze" />
              <h3 className="font-serif text-2xl text-warm-stone leading-tight">
                Small Pets Are Welcome
              </h3>
              <p className="font-sans text-base text-warm-stone/55 leading-relaxed font-light">
                We understand that true luxury means never having to compromise on your
                lifestyle or your companions. Cornerstone on Arum provides a sophisticated,
                pet-friendly environment with premium, highly durable timber-look vinyl
                flooring and private balconies.
              </p>
              <p className="font-sans text-sm text-warm-stone/40 italic leading-relaxed">
                Just <span className="text-muted-bronze font-semibold">2.4 km</span> from
                the pristine coastline of Blaauwbergstrand — the ultimate environment for
                you and your pets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AESTHETIC & SMART LIVING — 2 COLUMNS ── */}
      <section className="py-24 md:py-32 bg-deep-obsidian">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section header */}
          <div className="text-center mb-16 space-y-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-bronze font-bold">
              Design & Technology
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-warm-stone leading-[0.9] tracking-tighter">
              The Aesthetic &amp;{" "}
              <span className="italic text-muted-bronze font-light">Smart Living</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Left — Industrial Chic */}
            <div className="border-l-2 border-muted-bronze/30 pl-8 space-y-5">
              <h3 className="font-serif text-2xl md:text-3xl text-warm-stone leading-tight">
                Raw Sophistication &amp; Industrial Chic
              </h3>
              <p className="font-sans text-base text-warm-stone/55 leading-relaxed font-light">
                At Cornerstone on Arum, architectural excellence meets everyday comfort.
                The visual language of our residences is one of raw sophistication. Each
                apartment features an industrial chic palette that blends the energy of the
                city with the calm of a coastal retreat.
              </p>
              <ul className="space-y-3">
                {[
                  "Exposed concrete ceilings",
                  "Feature brick accent walls adding warmth and character",
                  "Contemporary black track lighting",
                  "High-quality engineered stone countertops",
                  "Large aluminium-framed windows maximising natural daylight and ventilation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-2 w-4 h-[1px] bg-muted-bronze flex-shrink-0" />
                    <span className="font-sans text-sm text-warm-stone/60 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — Future-Ready Resilience */}
            <div className="border-l-2 border-muted-bronze/30 pl-8 space-y-5">
              <h3 className="font-serif text-2xl md:text-3xl text-warm-stone leading-tight">
                Future-Ready Resilience
              </h3>
              <p className="font-sans text-base text-warm-stone/55 leading-relaxed font-light">
                Step into a residence optimised for modern, frictionless living. Stay
                seamlessly connected and never be interrupted by utility outages.
              </p>
              <ul className="space-y-3">
                {[
                  "Pre-installed, high-speed fibre internet",
                  "Premium Defy gas hobs for uninterrupted cooking",
                  "Convenient prepaid water and electricity meters",
                  "Central hot water boiler system — reduces electricity consumption by up to 40%",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-2 w-4 h-[1px] bg-muted-bronze flex-shrink-0" />
                    <span className="font-sans text-sm text-warm-stone/60 font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 bg-muted-bronze/10 border border-muted-bronze/20 p-5 rounded-none">
                <p className="font-serif text-2xl text-muted-bronze font-light">Up to 40%</p>
                <p className="font-sans text-xs text-warm-stone/50 uppercase tracking-[0.2em] mt-1">
                  Reduction in electricity costs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION INTELLIGENCE ── */}
      <section id="location" className="py-24 md:py-32 bg-warm-stone/5 border-y border-muted-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: copy */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-bronze font-bold">
                  Location Intelligence
                </span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-stone leading-[0.9] tracking-tighter">
                  154 Arum Road:{" "}
                  <span className="italic text-muted-bronze font-light">Quietly Connected</span>
                </h2>
              </div>
              <p className="font-sans text-lg text-warm-stone/60 leading-relaxed font-light">
                Positioned at the pulse of Table View, Cornerstone on Arum serves as the
                starting point for your daily lifestyle journey. You are situated just{" "}
                <span className="text-muted-bronze font-semibold">2.4 km</span> from the
                world-renowned Blaauwbergstrand coastline and the vibrant Kite Beach surfing
                scene.
              </p>
              <p className="font-sans text-lg text-warm-stone/60 leading-relaxed font-light">
                Enjoy the perfect balance of coastal charm and urban convenience, with
                walking distance access to Bayside Shopping Centre, the Medicross Medical
                Facility, top-tier schools, and the MyCiTi transport network.
              </p>
            </div>

            {/* Right: location highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "2.4 km", label: "Blaauwbergstrand Coastline" },
                { stat: "Walkable", label: "Bayside Shopping Centre" },
                { stat: "Nearby", label: "Medicross Medical Facility" },
                { stat: "Direct", label: "MyCiTi Transport Network" },
              ].map(({ stat, label }) => (
                <div
                  key={label}
                  className="bg-deep-obsidian border border-muted-bronze/20 p-6 space-y-2 hover:border-muted-bronze/40 transition-all duration-300"
                >
                  <p className="font-serif text-2xl text-muted-bronze font-light">{stat}</p>
                  <p className="font-sans text-xs text-warm-stone/50 uppercase tracking-[0.15em] leading-relaxed">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINANCIAL INTELLIGENCE ── */}
      <section className="py-24 md:py-32 bg-deep-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: stat highlights */}
            <div className="space-y-6">
              <div
                className="bg-muted-bronze/5 border border-muted-bronze/20 p-10 space-y-6"
              >
                <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-bronze font-bold">
                  BetterBond Partnership
                </p>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { stat: "100%", label: "Bond Financing Available" },
                    { stat: "0%", label: "Transfer Duties" },
                    { stat: "48 hrs", label: "Pre-Approval Turnaround" },
                    { stat: "R0", label: "Deposit for Qualifying Buyers" },
                  ].map(({ stat, label }) => (
                    <div key={label} className="space-y-1">
                      <p className="font-serif text-3xl text-muted-bronze font-light">{stat}</p>
                      <p className="font-sans text-xs text-warm-stone/50 uppercase tracking-[0.15em] leading-relaxed">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: copy */}
            <div className="space-y-6">
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-bronze font-bold">
                Financial Intelligence
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-warm-stone leading-[0.9] tracking-tighter">
                BetterBond: 100% Financing{" "}
                <span className="italic text-muted-bronze font-light">Available</span>
              </h2>
              <div className="h-[1px] w-16 bg-muted-bronze/40" />
              <p className="font-sans text-lg text-warm-stone/60 leading-relaxed font-light">
                Apartments at Cornerstone on Arum are VAT inclusive, and no transfer duties are payable, saving up to R80,000 in costs.
              </p>
              <p className="font-sans text-lg text-warm-stone/60 leading-relaxed font-light">
                Increase your capital efficiency and experience a frictionless acquisition process. There are absolutely zero transfer duties to pay. Through our exclusive partnership with BetterBond, your home loan application is submitted to multiple leading banks at no cost to you.
              </p>
              <p className="font-sans text-lg text-warm-stone/60 leading-relaxed font-light">
                Benefit from rapid <span className="text-muted-bronze font-semibold">48-hour pre-approvals</span> and up to <span className="text-muted-bronze font-semibold">100% bond financing</span> with no deposit required for qualifying buyers, ensuring your liquidity remains intact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUPERIOR RETURNS ── */}
      <section className="py-24 md:py-32 bg-warm-stone/5 border-t border-muted-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: heading block */}
            <div className="space-y-6">
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-bronze font-bold">
                Investment Analysis
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-stone leading-[0.9] tracking-tighter">
                Superior{" "}
                <span className="italic text-muted-bronze font-light">Returns</span>
              </h2>
              <div className="h-[1px] w-16 bg-muted-bronze/40" />
            </div>

            {/* Right: body copy */}
            <div className="space-y-6">
              <p className="font-sans text-lg text-warm-stone/60 leading-relaxed font-light">
                Sectional title developments are the clear winner for the Blaauwberg Road Corridor in Table View because they align perfectly with the surging market demand for smaller, more efficient living spaces, which saw a <span className="text-muted-bronze font-semibold">27% value growth</span> in flats and townhouses over the past year.
              </p>
              <p className="font-sans text-lg text-warm-stone/60 leading-relaxed font-light">
                Table View rental demand remains intensely high and is projected to provide returns of <span className="text-muted-bronze font-semibold">8% to 10%+</span>. You are risking far less capital to achieve a functionally superior percentage return, all while maintaining the same world-class Cape Town tenant profile.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
