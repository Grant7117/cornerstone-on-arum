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

import { Footer } from "@/components/footer"
import { EnquiryModal } from "@/components/enquiry-modal"

export default function HomePage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false)

  const openEnquiryModal = () => setIsEnquiryModalOpen(true)
  const closeEnquiryModal = () => setIsEnquiryModalOpen(false)

  // Structured Data for Google (Schema.org) to fix the 'null' report
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "RealEstateListing",
    "name": "Cornerstone on Arum",
    "description": "5 Luxury apartments available for sale in Table View. Available now.",
    "url": "https://www.cornerstoneonarum.co.za",
    "image": "https://www.cornerstoneonarum.co.za/images/Cornerstone-on-arum-hero-image.png",
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "5",
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
      <h1 className="sr-only">Cornerstone on Arum - Luxury Apartments in Table View</h1>
      {/* Injecting Schema for SEO Recovery */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/images/Cornerstone-on-arum-hero-image.png"
          alt="Cornerstone on Arum Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Content layer - all sections maintain original styling */}
      <div className="relative z-10">
        <Navigation onEnquire={openEnquiryModal} />
        <HeroSection />
        <VideoSection />
        <PricingBanner />
        <PriorityUnitsGrid onEnquire={openEnquiryModal} />
        
        {/* Colour-Coded Floor Plans Section */}
        <div id="floor-plans" className="w-full bg-[#1a1c23] py-12 sm:py-20 px-4 flex flex-col items-center">
          <div className="w-full max-w-6xl flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center text-warm-stone mb-10 sm:mb-16 tracking-tight">
              Colour-Coded Floor Plans
            </h2>
            <div className="w-full max-w-5xl overflow-hidden rounded-lg border border-white/10 shadow-2xl bg-zinc-900 flex justify-center">
              <Image
                src="/images/cornerstone-color-coded-floor-plans.jpg"
                alt="Cornerstone Colour-Coded Floor Plans"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

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