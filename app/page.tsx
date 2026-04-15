"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { PricingBanner } from "@/components/pricing-banner"
import { FeaturesSection } from "@/components/features-section"
import { UnitsCarousel } from "@/components/units-carousel"
import { FloorPlansSection } from "@/components/floor-plans-section"
import { PropertyFeaturesSection } from "@/components/property-features-section"
import { DocumentsSection } from "@/components/documents-section"
import { BetterBondSection } from "@/components/betterbond-section"
import { PartnersBanner } from "@/components/partners-banner"
import { ContactLocationSection } from "@/components/contact-location-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
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
            backgroundImage: "url(/images/arum-hero-image.png)",
            opacity: 0.4,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Content layer - all sections maintain original styling */}
      <div className="relative z-10">
        <Navigation onEnquire={openEnquiryModal} />
        <HeroSection />
        <VideoSection />
        <PricingBanner />
        <FeaturesSection />
        <UnitsCarousel onEnquire={openEnquiryModal} />
        <FloorPlansSection onEnquire={openEnquiryModal} />
        <PropertyFeaturesSection />
        <DocumentsSection />
        <BetterBondSection />
        <PartnersBanner />
        <ContactLocationSection />
        <WhatsAppButton />
        <Footer />
      </div>

      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={closeEnquiryModal} />
    </main>
  )
}

