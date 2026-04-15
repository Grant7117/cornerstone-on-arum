import Image from "next/image"

export function BetterBondSection() {
  return (
    <section id="financing" className="w-full bg-white">
      <div className="max-w-[1920px] mx-auto overflow-hidden">
        <Image
          src="/images/Frictionless Financing Betterbond.png"
          alt="BetterBond Financing and Approvals"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  )
}
