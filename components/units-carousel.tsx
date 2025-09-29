"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { UnitCard } from "@/components/unit-card"

const unitsData = {
  "1-bedroom": [
    {
      unitNo: "101",
      floor: "First",
      bedrooms: 1,
      bathrooms: 1,
      size: 47,
      color: "#9CDA8D",
      status: "Available",
      price: "R1,600,000",
      images: [
        "/images/units/cs-101-201-d.png",
        "/images/units/cs-101-201-a.png",
        "/images/units/cs-101-201-b.png",
        "/images/units/cs-101-201-c.png",
      ],
    },
    {
      unitNo: "103",
      floor: "First",
      bedrooms: 1,
      bathrooms: 1,
      size: 45,
      color: "#FFFF00", // Updated to canary yellow for 45m² units
      status: "Sold",
      price: "SOLD",
      images: [
        "/images/units/cs-103-203-b.png",
        "/images/units/cs-103-203-a.png",
        "/images/units/cs-103-203-d.png",
        "/images/units/cs-103-203-c.png",
        "/images/units/cs-103-203-e.png",
      ],
    },
    {
      unitNo: "104",
      floor: "First",
      bedrooms: 1,
      bathrooms: 1,
      size: 48,
      color: "#d86667", // Updated 48m² units to red color
      status: "Prequalified",
      price: "R1,600,000",
      images: [
        "/images/units/cs-104-204-c.png",
        "/images/units/cs-104-204-e.png",
        "/images/units/cs-104-204-d.png",
        "/images/units/cs-104-204-a.png",
        "/images/units/cs-104-204-b.png",
      ],
    },
    {
      unitNo: "105",
      floor: "First",
      bedrooms: 1,
      bathrooms: 1,
      size: 45, // Corrected size from 48 to 45m²
      color: "#FFFF00", // Updated to canary yellow for 45m² units
      status: "Available",
      price: "R1,500,000", // Updated price for 45m² unit
      images: [
        "/images/units/cs-105-205-e.png",
        "/images/units/cs-105-205-d.png",
        "/images/units/cs-105-205-a.png",
        "/images/units/cs-105-205-b.png",
        "/images/units/cs-105-205-c.png",
      ],
    },
    {
      unitNo: "106",
      floor: "First",
      bedrooms: 1,
      bathrooms: 1,
      size: 45,
      color: "#FFFF00", // Updated to canary yellow for 45m² units
      status: "Available",
      price: "R1,500,000",
      images: [
        "/images/units/cs-106-e.png",
        "/images/units/cs-106-c.png",
        "/images/units/cs-106-b.png",
        "/images/units/cs-106-a.png",
        "/images/units/cs-106-d.png",
      ],
    },
    {
      unitNo: "201",
      floor: "Second",
      bedrooms: 1,
      bathrooms: 1,
      size: 47,
      color: "#9CDA8D",
      status: "Available",
      price: "R1,600,000",
      images: [
        "/images/units/cs-101-201-d.png",
        "/images/units/cs-101-201-a.png",
        "/images/units/cs-101-201-b.png",
        "/images/units/cs-101-201-c.png",
      ],
    },
    {
      unitNo: "203",
      floor: "Second",
      bedrooms: 1,
      bathrooms: 1,
      size: 45,
      color: "#FFFF00", // Updated to canary yellow for 45m² units
      status: "Available",
      price: "R1,500,000",
      images: [
        "/images/units/cs-103-203-b.png",
        "/images/units/cs-103-203-a.png",
        "/images/units/cs-103-203-d.png",
        "/images/units/cs-103-203-c.png",
        "/images/units/cs-103-203-e.png",
      ],
    },
    {
      unitNo: "204",
      floor: "Second",
      bedrooms: 1,
      bathrooms: 1,
      size: 48,
      color: "#d86667", // Updated 48m² units to red color
      status: "Available",
      price: "R1,600,000",
      images: [
        "/images/units/cs-104-204-c.png",
        "/images/units/cs-104-204-e.png",
        "/images/units/cs-104-204-d.png",
        "/images/units/cs-104-204-a.png",
        "/images/units/cs-104-204-b.png",
      ],
    },
    {
      unitNo: "205",
      floor: "Second",
      bedrooms: 1,
      bathrooms: 1,
      size: 45, // Corrected size from 48 to 45m²
      color: "#FFFF00", // Updated to canary yellow for 45m² units
      status: "Available",
      price: "R1,500,000", // Updated price for 45m² unit
      images: [
        "/images/units/cs-105-205-e.png",
        "/images/units/cs-105-205-d.png",
        "/images/units/cs-105-205-a.png",
        "/images/units/cs-105-205-b.png",
        "/images/units/cs-105-205-c.png",
      ],
    },
    {
      unitNo: "206",
      floor: "Second",
      bedrooms: 1,
      bathrooms: 1,
      size: 45,
      color: "#FFFF00", // Updated to canary yellow for 45m² units
      status: "Available",
      price: "R1,500,000",
    },
    {
      unitNo: "208",
      floor: "Second",
      bedrooms: 1,
      bathrooms: 1,
      size: 47,
      color: "#9CDA8D",
      status: "Available",
      price: "R1,600,000",
      images: [
        "/images/units/cs-101-201-d.png",
        "/images/units/cs-101-201-a.png",
        "/images/units/cs-101-201-b.png",
        "/images/units/cs-101-201-c.png",
      ],
    },
    {
      unitNo: "108",
      floor: "First",
      bedrooms: 1,
      bathrooms: 1,
      size: 67, // Keeping the size as shown in the images
      color: "#98E2F5", // Light blue color
      status: "Available",
      price: "R2,100,000",
      images: [
        "/images/units/cs-108-d.png",
        "/images/units/cs-108-c.png",
        "/images/units/cs-108-a.png",
        "/images/units/cs-108-b.png",
      ],
    },
  ],
  "2-bedroom": [
    {
      unitNo: "102",
      floor: "First",
      bedrooms: 2,
      bathrooms: 1,
      size: 67,
      color: "#FFE3A5",
      status: "Available",
      price: "R2,100,000",
      images: [
        "/images/units/cs-102-202-e.png",
        "/images/units/cs-102-202-d.png",
        "/images/units/cs-102-202-b.png",
        "/images/units/cs-102-202-c.png",
      ],
    },
    {
      unitNo: "107",
      floor: "First",
      bedrooms: 2,
      bathrooms: 1,
      size: 67,
      color: "#FFE3A5",
      status: "Available",
      price: "R2,100,000",
      images: [
        "/images/units/cs-107-d.png",
        "/images/units/cs-107-a.png",
        "/images/units/cs-107-b.png",
        "/images/units/cs-107-c.png",
      ],
    },
    {
      unitNo: "202",
      floor: "Second",
      bedrooms: 2,
      bathrooms: 1,
      size: 67,
      color: "#FFE3A5",
      status: "Available",
      price: "R2,100,000",
      images: [
        "/images/units/cs-102-202-e.png",
        "/images/units/cs-102-202-d.png",
        "/images/units/cs-102-202-b.png",
        "/images/units/cs-102-202-c.png",
      ],
    },
    {
      unitNo: "207",
      floor: "Second",
      bedrooms: 2,
      bathrooms: 1,
      size: 67,
      color: "#FFE3A5",
      status: "Available",
      price: "R2,100,000",
    },
    {
      unitNo: "108",
      floor: "First",
      bedrooms: 1,
      bathrooms: 1,
      size: 67,
      color: "#98E2F5", // Light blue color for 2-bedroom units
      status: "Available",
      price: "R2,100,000",
      images: [
        "/images/units/cs-108-d.png",
        "/images/units/cs-108-c.png",
        "/images/units/cs-108-a.png",
        "/images/units/cs-108-b.png",
      ],
    },
    {
      unitNo: "306",
      floor: "Third",
      bedrooms: 2,
      bathrooms: 1,
      size: 67,
      color: "#98E2F5",
      status: "Available",
      price: "R2,200,000",
    },
    {
      unitNo: "301",
      floor: "Third",
      bedrooms: 2,
      bathrooms: 1,
      size: 67, // Adjusting size to match 2-bedroom category
      color: "#98E2F5", // Light blue color for 2-bedroom units
      status: "Prequalified",
      price: "R2,200,000", // Adjusting price to match other 2-bedroom units
      images: [
        "/images/units/cs-301-c.png",
        "/images/units/cs-301-e.png",
        "/images/units/cs-301-a.png",
        "/images/units/cs-301-b.png",
        "/images/units/cs-301-d.png",
      ],
    },
  ],
  "2-bedroom-loft": [
    {
      unitNo: "302",
      floor: "Third+Loft",
      bedrooms: 2,
      bathrooms: 2,
      size: 77,
      color: "#7963AF",
      status: "Available",
      price: "R2,600,000",
      images: [
        "/images/units/cs-302-a.png",
        "/images/units/cs-303-a.png",
        "/images/units/cs-302-d.png",
        "/images/units/cs-302-c.png",
        "/images/units/cs-302-e.png",
        "/images/units/cs-302-b.png",
      ],
    },
    {
      unitNo: "303",
      floor: "Third+Loft",
      bedrooms: 2,
      bathrooms: 2,
      size: 77,
      color: "#DEA598",
      status: "Available",
      price: "R2,600,000",
      images: [
        "/images/units/cs-303-a.png",
        "/images/units/cs-303-e.png",
        "/images/units/cs-303-c.png",
        "/images/units/cs-303-d.png",
      ],
    },
    {
      unitNo: "304",
      floor: "Third+Loft",
      bedrooms: 2,
      bathrooms: 2,
      size: 77,
      color: "#DEA598",
      status: "Available",
      price: "R2,600,000",
    },
    {
      unitNo: "305",
      floor: "Third+Loft",
      bedrooms: 2,
      bathrooms: 2,
      size: 77,
      color: "#7963AF",
      status: "Available",
      price: "R2,600,000",
    },
  ],
}

export function UnitsCarousel() {
  const [activeTab, setActiveTab] = useState<"1-bedroom" | "2-bedroom" | "2-bedroom-loft">("1-bedroom")

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Properties</h2>

        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            <Button
              variant={activeTab === "1-bedroom" ? "default" : "secondary"}
              onClick={() => setActiveTab("1-bedroom")}
              className={`px-8 py-3 rounded-full font-medium ${
                activeTab === "1-bedroom"
                  ? "bg-white text-slate-900 hover:bg-gray-100"
                  : "bg-slate-700 text-white hover:bg-slate-600 border border-slate-600"
              }`}
            >
              1 Bed
            </Button>
            <Button
              variant={activeTab === "2-bedroom" ? "default" : "secondary"}
              onClick={() => setActiveTab("2-bedroom")}
              className={`px-8 py-3 rounded-full font-medium ${
                activeTab === "2-bedroom"
                  ? "bg-white text-slate-900 hover:bg-gray-100"
                  : "bg-slate-700 text-white hover:bg-slate-600 border border-slate-600"
              }`}
            >
              2 Bedroom
            </Button>
            <Button
              variant={activeTab === "2-bedroom-loft" ? "default" : "secondary"}
              onClick={() => setActiveTab("2-bedroom-loft")}
              className={`px-8 py-3 rounded-full font-medium ${
                activeTab === "2-bedroom-loft"
                  ? "bg-white text-slate-900 hover:bg-gray-100"
                  : "bg-slate-700 text-white hover:bg-slate-600 border border-slate-600"
              }`}
            >
              2 Bed Loft
            </Button>
          </div>
        </div>

        <div className="text-white rounded-lg p-4 mb-8">
          <h3 className="text-xl font-semibold text-center mb-4">Unit Type Colour Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="text-base font-medium mb-2">1 Bedroom</h4>
              <p className="text-sm text-gray-300 mb-3">45-48m²</p>
              <div className="flex justify-center space-x-2 mb-2">
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#FFFF00" }}></div>
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#9CDA8D" }}></div>
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#d86667" }}></div>
              </div>
              <div className="flex justify-center space-x-4 text-xs text-gray-400">
                <span>45m²</span>
                <span>47m²</span>
                <span>48m²</span>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-base font-medium mb-2">2 Bedroom</h4>
              <p className="text-sm text-gray-300 mb-3">67m²</p>
              <div className="flex justify-center space-x-2 mb-2">
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#FFE3A5" }}></div>
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#98E2F5" }}></div>
              </div>
              <div className="flex justify-center space-x-4 text-xs text-gray-400">
                <span>67m²</span>
                <span>67m²</span>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-base font-medium mb-2">2 Bedroom Loft</h4>
              <p className="text-sm text-gray-300 mb-3">77m²</p>
              <div className="flex justify-center space-x-2 mb-2">
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#7963AF" }}></div>
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#DEA598" }}></div>
              </div>
              <div className="flex justify-center space-x-4 text-xs text-gray-400">
                <span>77m²</span>
                <span>77m²</span>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="flex space-x-6 pb-4" style={{ minWidth: "max-content" }}>
            {unitsData[activeTab].map((unit) => (
              <div key={unit.unitNo} className="flex-shrink-0">
                <UnitCard unit={unit} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
