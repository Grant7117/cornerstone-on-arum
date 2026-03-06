"use client";
import BetterBondSection from "../components/betterbond-section";
import FloorPlansSection from "../components/floor-plans-section";
import { Navigation } from "../components/navigation"
import { HeroSection } from "../components/hero-section"
import { VideoSection } from "../components/video-section"
import { FeaturesSection } from "../components/features-section"
import { PropertyFeaturesSection } from "../components/property-features-section"
import { UnitsCarousel } from "../components/units-carousel"
import { ContactLocationSection } from "../components/contact-location-section"
import { ChatInterface } from "../components/chat-interface"
import { WhatsAppButton } from "../components/whatsapp-button"
import { Footer } from "../components/footer"
import { useState } from "react"

export default function HomePage() {
  const [isChatOpen, setIsChatOpen] = useState(false)


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
        <Navigation />
        <HeroSection />
        <VideoSection />
        <FeaturesSection />
        <PropertyFeaturesSection />
        <UnitsCarousel />
        <FloorPlansSection />
        <BetterBondSection />
        <ContactLocationSection />
        <WhatsAppButton />
        <ChatInterface isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
        <Footer />
      </div>


    </main>


  )


}
















