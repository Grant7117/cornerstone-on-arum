import Image from "next/image"

export function PropertyFeaturesSection() {
  return (
    <div id="features" className="py-16 bg-[#EBE9E2]">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/images/Built for modern living.png"
            alt="Built for modern living features"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, 1920px"
          />
        </div>
      </div>
    </div>
  )
}
