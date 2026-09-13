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

  // Structured Data for Google (Schema.org) with RealEstateListing & ApartmentComplex
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ApartmentComplex",
        "@id": "https://www.cornerstoneonarum.co.za/#complex",
        "name": "Cornerstone on Arum",
        "description": "New residential apartment development located at 154 Arum Road, Table View, Cape Town. Available units from R1,700,000 with no transfer duty.",
        "url": "https://www.cornerstoneonarum.co.za",
        "telephone": "+27724503626",
        "image": "https://www.cornerstoneonarum.co.za/images/Cornerstone-on-arum-hero-image.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "154 Arum Road",
          "addressLocality": "Table View",
          "addressRegion": "Western Cape",
          "postalCode": "7441",
          "addressCountry": "ZA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -33.824,
          "longitude": 18.491
        },
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "NFC Access Control", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "CCTV", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Fibre Ready", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Prepaid Electricity & Water Meters", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Gas Hob & Electric Oven", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Dedicated Parking Bay", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Centralised Heat Pump Hot Water System", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Battery Power Backup for Common Areas and Access Control Systems", "value": true }
        ]
      },
      {
        "@type": "RealEstateListing",
        "@id": "https://www.cornerstoneonarum.co.za/#listing",
        "name": "Cornerstone on Arum Residential Duplex Apartments for Sale",
        "description": "Only 2 luxury duplex units remaining: Unit 303 and Unit 304 (2-bedroom, 2-bathroom duplex lofts measuring 77m² total) at Cornerstone on Arum, 154 Arum Road, Table View. All other units SOLD.",
        "url": "https://www.cornerstoneonarum.co.za",
        "image": "https://www.cornerstoneonarum.co.za/images/Cornerstone-on-arum-hero-image.png",
        "offers": {
          "@type": "AggregateOffer",
          "offerCount": "2",
          "lowPrice": "2725000",
          "highPrice": "2725000",
          "priceCurrency": "ZAR",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "RealEstateAgent",
            "name": "Igneous Property Development",
            "telephone": "+27724503626",
            "email": "sales@igneousproperty.co.za",
            "url": "https://www.cornerstoneonarum.co.za"
          }
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-background relative w-full overflow-x-clip">
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
        <div id="floor-plans" className="w-full bg-[#f8f9fa] py-16 sm:py-24 px-4 flex flex-col items-center scroll-mt-20">
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
              <DialogContent className="max-w-[95vw] sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-[90vw] xl:max-w-[85vw] w-full max-h-[95vh] h-[90vh] bg-slate-50 border-white/20 p-2 sm:p-6 rounded-xl overflow-hidden flex flex-col justify-center">
                <DialogTitle className="sr-only">Interactive Floor Plans</DialogTitle>
                <DialogDescription className="sr-only">View color-coded floor plans and unit availability.</DialogDescription>
                <div className="w-full h-full flex items-center justify-center pt-6 sm:pt-0">
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