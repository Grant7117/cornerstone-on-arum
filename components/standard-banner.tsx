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
    <section id={id} className="w-full bg-sand-drift flex flex-col items-center py-20 md:py-0">
      {/* Mobile: simple full-width image */}
      <div className="md:hidden w-full relative aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="100vw"
          priority={priority}
        />
      </div>

      {/* Desktop: strict 1920x1080 master / 1536x864 inner geometry */}
      <div
        className="hidden md:flex w-full max-w-[1920px] flex-col items-center justify-center relative"
        style={{ aspectRatio: "1920 / 1080" }}
      >
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
