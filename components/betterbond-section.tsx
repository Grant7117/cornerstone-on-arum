import Image from "next/image"

export function BetterBondSection() {
  return (
    <section id="financing" className="w-full bg-white py-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.4/1] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/Frictionless%20Financing%20Betterbond.png"
            alt="BetterBond - Frictionless Financing"
            fill
            className="object-contain bg-slate-50"
            priority
          />
        </div>
      </div>
    </section>
  )
}
