"use client"

import { useState } from "react"
import Image from "next/image"
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
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MediaAssetsSection } from "@/components/media-assets-section"
import { InteractiveFloorPlans } from "@/components/interactive-floor-plans"

import { Footer } from "@/components/footer"
import { EnquiryModal } from "@/components/enquiry-modal"
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function HomePage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false)

  const openEnquiryModal = () => setIsEnquiryModalOpen(true)
  const closeEnquiryModal = () => setIsEnquiryModalOpen(false)

  // Structured Data for Google (Schema.org) to fix the 'null' report
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "RealEstateListing",
    "name": "Cornerstone on Arum",
    "description": "Luxury apartments available for sale in Table View. Available now.",
    "url": "https://www.cornerstoneonarum.co.za",
    "image": "https://www.cornerstoneonarum.co.za/images/arum-hero-image.png",
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "8",
      "lowPrice": "1700000",
      "highPrice": "2725000",
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
    <main className="min-h-screen bg-background relative overflow-x-hidden w-full max-w-[100vw]">
      {/* Injecting Schema for SEO Recovery */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/images/Cornerstone-on-arum-hero-image.png"
          alt="Background"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Content layer - all sections maintain original styling */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <VideoSection />
        <PricingBanner />
        <PriorityUnitsGrid onEnquire={openEnquiryModal} />
        
        {/* Interactive Floor Plans Section (Hidden behind button) */}
        <div id="floor-plans" className="w-full bg-[#f8f9fa] py-16 sm:py-24 px-4 flex flex-col items-center">
          <div className="w-full max-w-4xl flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-[#1a1c23] tracking-tight mb-6">
              Interactive Floor Plans
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl font-sans text-sm sm:text-base leading-relaxed">
              Explore the layout of Cornerstone on Arum in detail. Click below to open our interactive, color-coded floor plans and view specifications for each available property.
            </p>
            
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-[#1a1c23] hover:bg-[#2d303b] text-white font-sans text-sm font-bold uppercase tracking-widest py-4 px-8 rounded-sm shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                  View Floor Plans
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-full max-h-[95vh] h-full overflow-y-auto bg-slate-50 border-white/20 p-2 sm:p-6 rounded-xl">
                <DialogTitle className="sr-only">Interactive Floor Plans</DialogTitle>
                <DialogDescription className="sr-only">View color-coded floor plans and unit availability.</DialogDescription>
                <div className="w-full h-full flex items-center justify-center pt-8 sm:pt-0">
                  <InteractiveFloorPlans />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <MediaAssetsSection />

        <PropertyFeaturesSection />
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