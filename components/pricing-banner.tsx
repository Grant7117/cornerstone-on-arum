import Image from "next/image"

export function PricingBanner() {
  return (
    <section className="w-full bg-white py-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative w-full aspect-[21/9] md:aspect-[2.4/1] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/R1,700,000%20R5000%20deposit.png"
            alt="Pricing: From R1,700,000 with R5,000 deposit"
            fill
            className="object-contain bg-slate-50"
            priority
          />
        </div>
      </div>
    </section>
  )
}
