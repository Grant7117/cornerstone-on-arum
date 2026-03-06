"use client";

import { Navigation } from "../components/navigation"
import { HeroSection } from "../components/hero-section"
import { VideoSection } from "../components/video-section"
import { FeaturesSection } from "../components/features-section"
import { PropertyFeaturesSection } from "../components/property-features-section"
import WiredSections from "../components/WiredSections"
import { ContactLocationSection } from "../components/contact-location-section"
import { WhatsAppButton } from "../components/whatsapp-button"
import ChatWidget from "../components/ChatWidget"
import { Footer } from "../components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/cornerstone-hero.jpg)",
            opacity: 0.15,
          }}
        />
      </div>

      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <VideoSection />
        <FeaturesSection />
        <PropertyFeaturesSection />
        <WiredSections />
        <ContactLocationSection />
        <WhatsAppButton />
        <ChatWidget />
        <Footer />
      </div>
    </main>
  );
}
