"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface FeatureCardProps {
  title: string
  shortDescription: string
  fullDescription: string
}

function FeatureCard({ title, shortDescription, fullDescription }: FeatureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-card rounded-lg p-4 shadow-sm border border-border flex flex-col h-full">
      <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-grow">
        {isExpanded ? fullDescription : shortDescription}
      </p>
      <Button
        variant="link"
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-0 h-auto font-semibold underline text-sm self-start !text-black hover:!text-gray-700"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </Button>
    </div>
  )
}

export function FeaturesSection() {
  const features = [
    {
      title: "Design & Strength",
      shortDescription:
        "Smart layouts maximise space and natural light, paired with premium finishes such as timber-look vinyl flooring, engineered stone countertops, and soft-close cabinetry.",
      fullDescription:
        "Smart layouts maximise space and natural light, paired with premium finishes such as timber-look vinyl flooring, engineered stone countertops, and soft-close cabinetry. Built with a full reinforced concrete frame, every apartment delivers structural integrity, acoustic comfort, and reduced long-term maintenance.",
    },
    {
      title: "Sustainable Systems",
      shortDescription:
        "Cornerstone incorporates practical green features, including onsite water storage, central hot water boiler system.",
      fullDescription:
        "Cornerstone incorporates practical green features, including onsite water storage, central hot water boiler system. These sustainable systems reduce environmental impact while providing reliable, efficient utilities for all residents.",
    },
    {
      title: "Local Advantage",
      shortDescription:
        "Positioned in Table View, Cornerstone on Arum is close to beaches, shopping centres, restaurants, top-tier schools, medical facilities, and the MyCiTi transport network.",
      fullDescription:
        "Positioned in Table View, Cornerstone on Arum is close to beaches, shopping centres, restaurants, top-tier schools, medical facilities, and the MyCiTi transport network. It combines a coastal lifestyle with everyday convenience, making it an ideal location for both living and investment.",
    },
  ]

  return (
    <section className="py-6 sm:py-8 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              shortDescription={feature.shortDescription}
              fullDescription={feature.fullDescription}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
