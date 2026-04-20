"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ManifestoSection } from "@/components/manifesto-section"
import { VideoSection } from "@/components/video-section"
import { PricingBanner } from "@/components/pricing-banner"
import { UnitsCarousel } from "@/components/units-carousel"
import { PropertyFeaturesSection } from "@/components/property-features-section"
import { DepositBanner } from "@/components/deposit-banner"
import { PartnersBanner } from "@/components/partners-banner"
import { ContactLocationSection } from "@/components/contact-location-section"
import { CopywritingSection } from "@/components/copywriting-section"
import { WhatsAppButton } from "@/components/whatsapp-button"

import { Footer } from "@/components/footer"
import { EnquiryModal } from "@/components/enquiry-modal"

export default function HomePage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false)

  const openEnquiryModal = () => setIsEnquiryModalOpen(true)
  const closeEnquiryModal = () => setIsEnquiryModalOpen(false)

  return (
    <main className="min-h-screen bg-sand-drift relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/arum-hero-image.png)",
            opacity: 0.1,
          }}
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10">
        <Navigation onEnquire={openEnquiryModal} />
        <HeroSection />
        <ManifestoSection onEnquire={openEnquiryModal} />
        <VideoSection />
        <PricingBanner />
        <UnitsCarousel onEnquire={openEnquiryModal} />
        <PropertyFeaturesSection />
        <CopywritingSection />
        <DepositBanner />
        <PartnersBanner />
        <ContactLocationSection />
        <WhatsAppButton />
        <Footer />
      </div>

      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={closeEnquiryModal} />
    </main>
  )
}
