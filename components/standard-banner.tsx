import Image from "next/image"

interface StandardBannerProps {
  src: string
  alt: string
  id?: string
  priority?: boolean
  maxWidth?: string
}

export function StandardBanner({ src, alt, id, priority = false, maxWidth = "max-w-6xl" }: StandardBannerProps) {
  return (
    <section id={id} className="w-full bg-white py-4 sm:py-8">
      <div className={`container mx-auto px-4 ${maxWidth}`}>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            priority={priority}
          />
        </div>
      </div>
    </section>
  )
}
