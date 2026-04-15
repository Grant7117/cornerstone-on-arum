"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface FeatureCardProps {
  title: string
  shortDescription: string
  fullDescription: string
}

export function FeaturesSection() {
  const pillars = [
    {
      title: "Savings on New Developments",
      description: "There are no transfer duties, making your investment more cost-effective."
    },
    {
      title: "State-of-the-Art Security",
      description: "Our AI-integrated security systems are linked to an off-site control centre for your peace of mind."
    },
    {
      title: "High-Speed Internet",
      description: "Enjoy lightning-fast fibre internet installed in your new home, perfect for working from home or streaming the latest entertainment."
    },
    {
      title: "Long-Term Community Focus",
      description: "Airbnb and short-term rentals are not permitted. This decision reflects a deliberate strategy to create a superior residential experience, shielding investors from a volatile and increasingly regulated market while fostering a secure, stable, and desirable community. At Cornerstone on Arum, we are committed to ensuring that this is not just a building, but a place residents are proud to call home."
    },
    {
      title: "No Surprise Utilities",
      description: "With prepaid water and electricity meters, you can top up as you go without any shocking surprises."
    },
    {
      title: "Secure Off-Street Parking",
      description: "Rest easy knowing your car is as safe as houses at Cornerstone."
    }
  ]

  return (
    <section id="features" className="py-20 sm:py-32 px-4 relative overflow-hidden bg-white/50">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="features-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="feature-card glassmorphism-panel flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


