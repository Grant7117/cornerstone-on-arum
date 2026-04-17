import Image from "next/image"

export function PropertyFeaturesSection() {
  return (
    <div id="features" className="w-full bg-sand-drift flex flex-col items-center">

      {/* Mobile: heading + full-width image stacked */}
      <div className="md:hidden w-full flex flex-col items-center py-20 px-4 gap-12">
        <h2 className="font-serif text-3xl text-center text-deep-obsidian tracking-tighter">
          Built for Modern Living
        </h2>
        <div className="relative w-full aspect-video">
          <Image
            src="/images/Built for modern living.png"
            alt="Built for modern living features"
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Desktop: strict 1920x1080 master / 1536x864 inner geometry */}
      <div
        className="hidden md:flex w-full max-w-[1920px] flex-col items-center justify-between"
        style={{ aspectRatio: "1920 / 1080" }}
      >
        {/* Top 10% Margin Space - Holds the Heading */}
        <div className="flex-1 w-full flex flex-col justify-end items-center pb-4 md:pb-8 lg:pb-10 px-4">
          <h2 className="font-serif text-4xl md:text-6xl text-center text-deep-obsidian tracking-tighter leading-none">
            Built for Modern Living
          </h2>
        </div>

        {/* Centered Image Container (Exactly 80% of Master = 1536x864 Footprint) */}
        <div
          className="relative w-[80%] max-w-[1536px] flex-shrink-0"
          style={{ aspectRatio: "1536 / 864" }}
        >
          <Image
            src="/images/Built for modern living.png"
            alt="Built for modern living features"
            fill
            className="object-contain"
            sizes="(max-width: 1536px) 100vw, 1536px"
          />
        </div>

        {/* Bottom 10% Margin Space */}
        <div className="flex-1 w-full" />
      </div>
    </div>
  )
}
