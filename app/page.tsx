"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { PricingBanner } from "@/components/pricing-banner"
import { PriorityUnitsGrid } from "@/components/priority-units-grid"
import { PropertyFeaturesSection } from "@/components/property-features-section"
import { BetterBondSection } from "@/components/betterbond-section"
import { DepositBanner } from "@/components/deposit-banner"
import { PartnersBanner } from "@/components/partners-banner"
import { ContactLocationSection } from "@/components/contact-location-section"
import { Footer } from "@/components/footer"
import { EnquiryModal } from "@/components/enquiry-modal"

export default function HomePage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false)

  const openEnquiryModal = () => setIsEnquiryModalOpen(true)
  const closeEnquiryModal = () => setIsEnquiryModalOpen(false)

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "RealEstateListing",
    "name": "Cornerstone on Arum",
    "description": "6 Luxury apartments available for sale in Table View. Ready for occupation May 2026.",
    "url": "https://www.cornerstoneonarum.co.za",
    "image": "https://www.cornerstoneonarum.co.za/images/arum-hero-image.png",
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "6",
      "priceCurrency": "ZAR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "RealEstateAgent",
        "name": "Igneous Property Development"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "154 Arum Road",
      "addressLocality": "Table View",
      "addressRegion": "Western Cape",
      "postalCode": "7441",
      "addressCountry": "ZA"
    }
  };

  return (
    <main className="min-h-screen bg-background relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

      <div className="relative z-10">
        <Navigation onEnquire={openEnquiryModal} />
        <HeroSection />
        <VideoSection />
        <PricingBanner />
        <PriorityUnitsGrid onEnquire={openEnquiryModal} />
        <PropertyFeaturesSection />
        <DepositBanner />
        <BetterBondSection />
        <PartnersBanner />
        <ContactLocationSection />
        <Footer />
      </div>

      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={closeEnquiryModal} />
    </main>
  )
}