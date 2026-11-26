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

  // Structured Data for Google & AI Engines (Schema.org) with RealEstateListing, ApartmentComplex, VideoObject & FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ApartmentComplex",
        "@id": "https://www.cornerstoneonarum.co.za/#complex",
        "name": "Cornerstone on Arum",
        "description": "New residential apartment development located at 154 Arum Road, Table View, Cape Town. Final luxury top floor duplex unit (Unit 304, 77m²) available at R2,725,000 with no transfer duty. Levy R2,200.00 per month.",
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
        "description": "Final luxury duplex unit remaining: Unit 304 (2-bedroom, 2-bathroom duplex loft measuring 77m² total) at Cornerstone on Arum, 154 Arum Road, Table View. All other units SOLD.",
        "url": "https://www.cornerstoneonarum.co.za",
        "image": "https://www.cornerstoneonarum.co.za/images/Cornerstone-on-arum-hero-image.png",
        "offers": {
          "@type": "AggregateOffer",
          "offerCount": "1",
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
      },
      {
        "@type": "VideoObject",
        "@id": "https://www.cornerstoneonarum.co.za/#video-tour",
        "name": "Cornerstone on Arum - Duplex Loft Video Walkthrough (Unit 304 layout)",
        "description": "Virtual HD video walkthrough of the duplex loft layout of the final remaining unit (Unit 304, 77m² total, 2 Bed, 2 Bath) at Cornerstone on Arum, 154 Arum Road, Table View.",
        "thumbnailUrl": [
          "https://www.cornerstoneonarum.co.za/images/units/303-a.jpg",
          "https://customer-2qsi4jrxewznhq17.cloudflarestream.com/40d24c91d37fc98b6f7f135ca3261bb0/thumbnails/thumbnail.jpg"
        ],
        "uploadDate": "2026-09-18T20:00:00+02:00",
        "embedUrl": "https://customer-2qsi4jrxewznhq17.cloudflarestream.com/40d24c91d37fc98b6f7f135ca3261bb0/iframe",
        "contentUrl": "https://customer-2qsi4jrxewznhq17.cloudflarestream.com/40d24c91d37fc98b6f7f135ca3261bb0/manifest/video.m3u8"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.cornerstoneonarum.co.za/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which units are available at Cornerstone on Arum?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Only 1 unit remains available: Unit 304, a luxury 2-bedroom, 2-bathroom top floor loft duplex apartment measuring 77m² total (71m² interior + 6m² private balcony). All other units are SOLD."
            }
          },
          {
            "@type": "Question",
            "name": "What is the price of the remaining units at Cornerstone on Arum?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The final duplex unit (Unit 304) is selling for R2,725,000 with NO transfer duty. The levy is R2,200.00 per month."
            }
          },
          {
            "@type": "Question",
            "name": "What deposit is required to secure a unit at Cornerstone on Arum?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A deposit of only R5,000 secures your unit, payable within 7 days of Offer to Purchase signature."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Cornerstone on Arum located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cornerstone on Arum is located at 154 Arum Road, Table View, Cape Town, 7441, close to pristine beaches, shopping centres, and MyCiTi transit."
            }
          },
          {
            "@type": "Question",
            "name": "How can I book a viewing or watch the video tour?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can stream the official HD video walkthrough directly on our website or contact Grant Whitburn on 072 450 3626 to book an in-person viewing."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-background relative w-full overflow-x-clip">
      {/* Injecting Schema for SEO & LLM Optimization */}
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