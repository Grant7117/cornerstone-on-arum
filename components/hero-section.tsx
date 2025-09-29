import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      <Image
        src="/images/cornerstone-hero.jpg"
        alt="Cornerstone on Arum - Modern apartment building"
        fill
        className="object-cover object-top"
        priority
      />
    </section>
  )
}
