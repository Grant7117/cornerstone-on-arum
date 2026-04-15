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
    <section id={id} className="w-full bg-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        {/* Outer 1920x1080 Placeholder (16:9) */}
        <div className="relative w-full aspect-video flex items-center justify-center">
          {/* Inner 900x500 Content Stage */}
          <div className="relative w-full max-w-[900px] aspect-[9/5] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              priority={priority}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
