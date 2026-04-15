"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface FeatureCardProps {
  title: string
  shortDescription: string
  fullDescription: string
}

function FeatureCard({ title }: { title: string }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 flex flex-col h-64 justify-center text-center transition-all hover:shadow-2xl hover:scale-[1.02]">

      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      <div className="mt-4 h-1 w-12 bg-blue-600 mx-auto rounded-full" />
    </div>
  )
}

export function FeaturesSection() {
  const features = [
    { title: "Design & Strength" },
    { title: "Safety and Security" },
    { title: "Local Advantage" },
  ]

  return (
    <section id="features" className="py-16 sm:py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

