import Image from "next/image"

export function BetterBondSection() {
  return (
    <section id="financing" className="w-full bg-white py-12 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
          <Image
            src="/images/Frictionless Financing Betterbond.png"
            alt="BetterBond Financing and Approvals"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}
