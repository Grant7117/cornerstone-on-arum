"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { FeaturesSection } from "@/components/features-section"
import { UnitsCarousel } from "@/components/units-carousel"
import { FloorPlansSection } from "@/components/floor-plans-section"
import { PropertyFeaturesSection } from "@/components/property-features-section"
import { DocumentsSection } from "@/components/documents-section"
import { BetterBondSection } from "@/components/betterbond-section"
import { ContactLocationSection } from "@/components/contact-location-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { FloatingBanner } from "@/components/floating-banner"
import { EnquiryModal } from "@/components/enquiry-modal"

export default function HomePage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false)

  const openEnquiryModal = () => setIsEnquiryModalOpen(true)
  const closeEnquiryModal = () => setIsEnquiryModalOpen(false)

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

      {/* Content layer - all sections maintain original styling */}
      <div className="relative z-10">
        <Navigation onEnquire={openEnquiryModal} />
        <FloatingBanner onSignUpClick={openEnquiryModal} />
        <HeroSection />
        <VideoSection />
        <FeaturesSection />
        <UnitsCarousel />
        <FloorPlansSection />
        <PropertyFeaturesSection />
        <DocumentsSection />
        <BetterBondSection />
        <ContactLocationSection />
        <WhatsAppButton />
        <Footer />
      </div>

      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={closeEnquiryModal} />
    </main>
  )
}

