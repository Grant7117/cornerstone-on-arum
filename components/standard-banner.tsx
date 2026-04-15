import Image from "next/image"

interface StandardBannerProps {
  src: string
  alt: string
  id?: string
  priority?: boolean
  maxWidth?: string
}

export function StandardBanner({ src, alt, id, priority = false }: StandardBannerProps) {
  return (
    <section id={id} className="w-full bg-[#EBE9E2] flex flex-col items-center">
      {/* Master Row Placeholder (1920x1080 Aspect Ratio Footprint) */}
      <div 
        className="w-full max-w-[1920px] flex flex-col items-center justify-center relative"
        style={{ aspectRatio: "1920 / 1080" }}
      >
        {/* Centered Image Container (Exactly 80% of Master = 1536x864 Footprint) */}
        <div 
          className="relative w-[80%] max-w-[1536px] flex-shrink-0"
          style={{ aspectRatio: "1536 / 864" }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain drop-shadow-sm"
            sizes="(max-width: 1536px) 100vw, 1536px"
            priority={priority}
          />
        </div>
      </div>
    </section>
  )
}
