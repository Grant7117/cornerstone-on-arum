export interface Property {
  id: number
  name: string
  bedrooms: number
  bathrooms: number
  price: number
  type: "apartment" | "house" | "condo" | "studio"
  location: string
  features: string[]
  sqft: number
  description: string
  amenities: string[]
  availability: string
  floorPlan: string
  parking: string
  images?: string[]
  floor?: number
  balconySize?: string
  petPolicy?: string
  leaseTerm?: string
}

export const PROPERTIES: Property[] = [
  {
    id: 1,
    name: "Cornerstone on Arum - Unit 2A",
    bedrooms: 2,
    bathrooms: 2,
    price: 450000,
    type: "apartment",
    location: "Arum District",
    features: ["Modern kitchen", "City views", "Balcony", "Parking", "In-unit laundry", "Hardwood floors"],
    sqft: 1200,
    description:
      "Beautiful 2-bedroom apartment with stunning city views and modern finishes. Features an open-concept living area with floor-to-ceiling windows and a private balcony overlooking the city skyline.",
    amenities: ["24/7 Concierge", "Fitness Center", "Rooftop Pool", "Sky Lounge", "Business Center", "Pet Spa"],
    availability: "Available now",
    floorPlan: "Open concept living with separate bedrooms and walk-in closets",
    parking: "1 assigned parking space included",
    floor: 15,
    balconySize: "120 sq ft",
    petPolicy: "Pet-friendly (cats and dogs under 50lbs)",
    leaseTerm: "12-24 months available",
  },
  {
    id: 2,
    name: "Cornerstone on Arum - Unit 3B",
    bedrooms: 3,
    bathrooms: 2,
    price: 650000,
    type: "apartment",
    location: "Arum District",
    features: ["Premium finishes", "Panoramic views", "Large balcony", "Storage", "Chef's kitchen", "Master suite"],
    sqft: 1600,
    description:
      "Spacious 3-bedroom apartment with premium finishes and panoramic city views. The master suite includes a walk-in closet and spa-like bathroom with soaking tub.",
    amenities: ["24/7 Concierge", "Fitness Center", "Rooftop Pool", "Sky Lounge", "Business Center", "Pet Spa"],
    availability: "Available March 2025",
    floorPlan: "Split bedroom layout with large living area and separate dining room",
    parking: "1 assigned parking space included",
    floor: 22,
    balconySize: "200 sq ft",
    petPolicy: "Pet-friendly (cats and dogs under 50lbs)",
    leaseTerm: "12-24 months available",
  },
  {
    id: 3,
    name: "Cornerstone on Arum - Studio",
    bedrooms: 0,
    bathrooms: 1,
    price: 320000,
    type: "studio",
    location: "Arum District",
    features: ["Efficient layout", "Modern appliances", "City views", "Murphy bed", "Built-in storage"],
    sqft: 650,
    description:
      "Efficient studio apartment perfect for urban living with modern amenities. Features a Murphy bed system and clever storage solutions to maximize space.",
    amenities: ["24/7 Concierge", "Fitness Center", "Rooftop Pool", "Sky Lounge", "Business Center"],
    availability: "Available now",
    floorPlan: "Open studio layout with separate kitchen area and built-in workspace",
    parking: "Parking available for additional $150/month",
    floor: 8,
    petPolicy: "Small pets only (under 25lbs)",
    leaseTerm: "6-12 months available",
  },
  {
    id: 4,
    name: "Cornerstone on Arum - Penthouse",
    bedrooms: 4,
    bathrooms: 3,
    price: 1200000,
    type: "apartment",
    location: "Arum District",
    features: ["Private elevator", "Wraparound terrace", "Premium appliances", "Smart home system", "Wine cellar"],
    sqft: 2800,
    description:
      "Luxury penthouse with private elevator access and wraparound terrace. Features top-of-the-line finishes, smart home automation, and breathtaking 360-degree city views.",
    amenities: [
      "24/7 Concierge",
      "Fitness Center",
      "Rooftop Pool",
      "Sky Lounge",
      "Business Center",
      "Pet Spa",
      "Private dining room",
    ],
    availability: "Available June 2025",
    floorPlan: "Grand layout with formal dining, library, and master wing",
    parking: "2 assigned parking spaces included",
    floor: 35,
    balconySize: "800 sq ft wraparound terrace",
    petPolicy: "Pet-friendly (all sizes welcome)",
    leaseTerm: "12+ months required",
  },
]

export const BUILDING_INFO = {
  name: "Cornerstone on Arum",
  address: "123 Arum Boulevard, Arum District",
  totalFloors: 35,
  totalUnits: 280,
  yearBuilt: 2024,
  architect: "Modern Living Architects",
  developer: "Premium Properties Group",
  management: "Elite Property Management",

  amenities: {
    fitness: {
      name: "State-of-the-art Fitness Center",
      hours: "5:00 AM - 11:00 PM daily",
      features: ["Cardio equipment", "Weight training", "Yoga studio", "Personal training available"],
    },
    pool: {
      name: "Rooftop Pool & Deck",
      hours: "6:00 AM - 10:00 PM daily",
      features: ["Heated pool", "Hot tub", "Cabanas", "BBQ area", "City views"],
    },
    concierge: {
      name: "24/7 Concierge Service",
      services: [
        "Package receiving",
        "Dry cleaning",
        "Restaurant reservations",
        "Event planning",
        "Transportation coordination",
      ],
    },
    business: {
      name: "Business Center & Co-working Space",
      hours: "24/7 access for residents",
      features: ["Private offices", "Conference rooms", "High-speed internet", "Printing services"],
    },
    social: {
      name: "Sky Lounge & Entertainment",
      features: ["Private dining room", "Kitchen facilities", "Entertainment system", "Panoramic views"],
    },
  },

  location: {
    neighborhood: "Arum District",
    walkScore: 95,
    transitScore: 88,
    nearbyAttractions: [
      "Arum Park (2 blocks)",
      "Downtown Shopping District (0.5 miles)",
      "Financial District (1 mile)",
      "Arts & Culture Quarter (0.8 miles)",
    ],
    transportation: [
      "Metro Station (3 blocks)",
      "Bus stops (1 block)",
      "Bike share stations (on-site)",
      "Highway access (0.5 miles)",
    ],
    dining: [
      "Fine dining restaurants (walking distance)",
      "Cafes and casual dining (numerous options)",
      "Grocery stores (2 blocks)",
      "Farmers market (weekends, 4 blocks)",
    ],
  },

  policies: {
    petPolicy: "Pet-friendly building with breed restrictions. Pet deposit and monthly fee apply.",
    smokingPolicy: "Non-smoking building. Designated outdoor smoking areas available.",
    guestPolicy: "Guests welcome with 24-hour advance notice to concierge.",
    moveInRequirements: [
      "First month's rent",
      "Security deposit (1-2 months rent)",
      "Application fee",
      "Credit check and background verification",
      "Proof of income (3x monthly rent)",
    ],
  },
}

export const FAQ_DATA = [
  {
    question: "What amenities are included?",
    answer:
      "Cornerstone on Arum features a 24/7 concierge, state-of-the-art fitness center, rooftop pool and deck, sky lounge, business center, and pet spa. All residents have access to these premium amenities.",
  },
  {
    question: "Is parking included?",
    answer:
      "Most units include one assigned parking space. Additional parking spaces are available for rent. The building also offers electric vehicle charging stations.",
  },
  {
    question: "Are pets allowed?",
    answer:
      "Yes, we are a pet-friendly building! We welcome cats and dogs with some breed and size restrictions. A pet deposit and monthly pet fee apply. We also have an on-site pet spa for your convenience.",
  },
  {
    question: "What is the application process?",
    answer:
      "Our application process includes completing an application form, credit and background checks, proof of income verification, and payment of application fee and deposits. Our leasing team will guide you through each step.",
  },
  {
    question: "How do I schedule a viewing?",
    answer:
      "You can schedule a viewing by contacting our leasing office, using our online booking system, or asking me to help schedule one for you. We offer both in-person and virtual tours.",
  },
  {
    question: "What lease terms are available?",
    answer:
      "We offer flexible lease terms ranging from 6 months to 24+ months depending on the unit. Longer lease terms may qualify for special pricing incentives.",
  },
]
