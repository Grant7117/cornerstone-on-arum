import Image from "next/image"

export function PricingBanner() {
  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.4/1] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
          <Image
            src="/images/R1,700,000%20R5000%20deposit.png"
            alt="Pricing Banner"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}
