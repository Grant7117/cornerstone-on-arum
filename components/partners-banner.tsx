import Image from "next/image"

export function PartnersBanner() {
  return (
    <section className="w-full bg-white py-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative w-full aspect-[2/1] md:aspect-[3/1] lg:aspect-[4/1] rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/images/partners.png"
            alt="Our Trusted Partners"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}
