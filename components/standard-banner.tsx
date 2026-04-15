import Image from "next/image"

interface StandardBannerProps {
  src: string
  alt: string
  id?: string
  priority?: boolean
}

export function StandardBanner({ src, alt, id, priority = false }: StandardBannerProps) {
  return (
    <section id={id} className="w-full bg-white py-4 sm:py-8">
      <div className="container mx-auto max-w-6xl px-4">
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
