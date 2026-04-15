import Image from "next/image"

export function PropertyFeaturesSection() {
  return (
    <div id="features" className="w-full bg-background flex flex-col items-center">
      {/* Master Row Placeholder (1920x1080 Aspect Ratio Footprint) */}
      <div className="w-full max-w-[1920px] aspect-[16/9] flex flex-col items-center justify-center relative bg-[#EBE9E2]">
        
        {/* Restored Heading (floating above) */}
        <div className="absolute top-[8%] text-center w-full z-10 px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800">Built for Modern Living</h2>
        </div>

        {/* Centered Image Container (1536x864 Footprint exactly at center) */}
        <div className="relative w-full max-w-[1536px] aspect-[16/9] overflow-hidden mt-8">
          <Image
            src="/images/Built for modern living.png"
            alt="Built for modern living features"
            fill
            className="object-contain"
            sizes="(max-width: 1536px) 100vw, 1536px"
          />
        </div>

      </div>
    </div>
  )
}
