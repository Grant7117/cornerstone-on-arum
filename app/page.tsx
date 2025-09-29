import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { UnitsCarousel } from "@/components/units-carousel"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <Navigation />
      <VideoSection />
      <UnitsCarousel />
    </main>
  )
}
