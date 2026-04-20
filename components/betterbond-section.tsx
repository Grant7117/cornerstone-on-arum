import { StandardBanner } from "./standard-banner"

export function BetterBondSection() {
  return (
    <section id="financing" className="bg-sand-drift">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-bronze font-bold">
                Home Loan Partner
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-deep-obsidian leading-[0.9] tracking-tighter">
                Yolanda <br />
                <span className="italic text-muted-bronze font-light">Kensley</span>
              </h2>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex flex-col space-y-1">
                <span className="font-sans text-[10px] uppercase tracking-widest text-deep-obsidian/40">Phone</span>
                <a href="tel:+27846457216" className="font-serif text-2xl text-deep-obsidian hover:text-muted-bronze transition-colors">
                  084 645 7216
                </a>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="font-sans text-[10px] uppercase tracking-widest text-deep-obsidian/40">Email</span>
                <a href="mailto:yolanda.kensley@betterbond.co.za" className="font-serif text-2xl text-deep-obsidian hover:text-muted-bronze transition-colors break-words">
                  yolanda.kensley@betterbond.co.za
                </a>
              </div>
            </div>

            <div className="pt-8">
              <img
                src="/images/betterbond-logo.png"
                alt="BetterBond Logo"
                className="h-8 object-contain"
              />
            </div>
          </div>

          {/* Right Side: Visual Content */}
          <div className="relative aspect-[1536/864] w-full">
            <img
              src="/images/Frictionless%20Financing%20Betterbond.png"
              alt="BetterBond - Frictionless Financing"
              className="w-full h-full object-contain drop-shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
