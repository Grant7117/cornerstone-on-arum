import { convertToModelMessages, streamText, type UIMessage, tool } from "ai"
import { z } from "zod"
import { PROPERTIES, BUILDING_INFO, FAQ_DATA } from "@/lib/property-data"

export const maxDuration = 30

const searchPropertiesTool = tool({
  description: "Search for properties based on criteria like bedrooms, price range, location, etc.",
  inputSchema: z.object({
    bedrooms: z.number().optional().describe("Number of bedrooms"),
    minPrice: z.number().optional().describe("Minimum price"),
    maxPrice: z.number().optional().describe("Maximum price"),
    propertyType: z.enum(["apartment", "house", "condo", "studio"]).optional(),
    location: z.string().optional().describe("Preferred location or area"),
    minSqft: z.number().optional().describe("Minimum square footage"),
    maxSqft: z.number().optional().describe("Maximum square footage"),
    features: z.array(z.string()).optional().describe("Desired features"),
  }),
  execute: async ({ bedrooms, minPrice, maxPrice, propertyType, location, minSqft, maxSqft, features }) => {
    let filtered = PROPERTIES

    if (bedrooms !== undefined) {
      filtered = filtered.filter((p) => p.bedrooms === bedrooms)
    }
    if (minPrice !== undefined) {
      filtered = filtered.filter((p) => p.price >= minPrice)
    }
    if (maxPrice !== undefined) {
      filtered = filtered.filter((p) => p.price <= maxPrice)
    }
    if (propertyType) {
      filtered = filtered.filter((p) => p.type === propertyType)
    }
    if (location) {
      filtered = filtered.filter((p) => p.location.toLowerCase().includes(location.toLowerCase()))
    }
    if (minSqft !== undefined) {
      filtered = filtered.filter((p) => p.sqft >= minSqft)
    }
    if (maxSqft !== undefined) {
      filtered = filtered.filter((p) => p.sqft <= maxSqft)
    }
    if (features && features.length > 0) {
      filtered = filtered.filter((p) =>
        features.some((feature) =>
          p.features.some((pFeature) => pFeature.toLowerCase().includes(feature.toLowerCase())),
        ),
      )
    }

    return {
      properties: filtered,
      count: filtered.length,
      searchCriteria: { bedrooms, minPrice, maxPrice, propertyType, location, minSqft, maxSqft, features },
    }
  },
})

const getPropertyDetailsTool = tool({
  description: "Get detailed information about a specific property",
  inputSchema: z.object({
    propertyId: z.number().describe("The ID of the property to get details for"),
  }),
  execute: async ({ propertyId }) => {
    const property = PROPERTIES.find((p) => p.id === propertyId)

    if (!property) {
      return { error: "Property not found" }
    }

    return property
  },
})

const getBuildingInfoTool = tool({
  description: "Get information about the building, amenities, location, and policies",
  inputSchema: z.object({
    infoType: z
      .enum(["amenities", "location", "policies", "general", "all"])
      .optional()
      .describe("Type of building information requested"),
  }),
  execute: async ({ infoType = "all" }) => {
    switch (infoType) {
      case "amenities":
        return { amenities: BUILDING_INFO.amenities }
      case "location":
        return { location: BUILDING_INFO.location }
      case "policies":
        return { policies: BUILDING_INFO.policies }
      case "general":
        return {
          name: BUILDING_INFO.name,
          address: BUILDING_INFO.address,
          totalFloors: BUILDING_INFO.totalFloors,
          totalUnits: BUILDING_INFO.totalUnits,
          yearBuilt: BUILDING_INFO.yearBuilt,
          architect: BUILDING_INFO.architect,
          developer: BUILDING_INFO.developer,
          management: BUILDING_INFO.management,
        }
      default:
        return BUILDING_INFO
    }
  },
})

const searchFAQTool = tool({
  description: "Search frequently asked questions and answers",
  inputSchema: z.object({
    query: z.string().describe("The question or topic to search for in FAQs"),
  }),
  execute: async ({ query }) => {
    const relevantFAQs = FAQ_DATA.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query.toLowerCase()) ||
        faq.answer.toLowerCase().includes(query.toLowerCase()),
    )

    return {
      faqs: relevantFAQs,
      count: relevantFAQs.length,
      query,
    }
  },
})

// Property details tool
const getPropertyDetailsToolOriginal = tool({
  description: "Get detailed information about a specific property",
  inputSchema: z.object({
    propertyId: z.number().describe("The ID of the property to get details for"),
  }),
  execute: async ({ propertyId }) => {
    // Mock detailed property data
    const propertyDetails = {
      1: {
        id: 1,
        name: "Cornerstone on Arum - Unit 2A",
        bedrooms: 2,
        bathrooms: 2,
        price: 450000,
        type: "apartment",
        location: "Arum District",
        features: ["Modern kitchen", "City views", "Balcony", "Parking"],
        sqft: 1200,
        description: "Beautiful 2-bedroom apartment with stunning city views and modern finishes.",
        amenities: ["Gym", "Pool", "Concierge", "Rooftop terrace"],
        availability: "Available now",
        floorPlan: "Open concept living with separate bedrooms",
        parking: "1 assigned parking space included",
      },
      2: {
        id: 2,
        name: "Cornerstone on Arum - Unit 3B",
        bedrooms: 3,
        bathrooms: 2,
        price: 650000,
        type: "apartment",
        location: "Arum District",
        features: ["Premium finishes", "Panoramic views", "Large balcony", "Storage"],
        sqft: 1600,
        description: "Spacious 3-bedroom apartment with premium finishes and panoramic city views.",
        amenities: ["Gym", "Pool", "Concierge", "Rooftop terrace"],
        availability: "Available March 2025",
        floorPlan: "Split bedroom layout with large living area",
        parking: "1 assigned parking space included",
      },
      3: {
        id: 3,
        name: "Cornerstone on Arum - Studio",
        bedrooms: 0,
        bathrooms: 1,
        price: 320000,
        type: "studio",
        location: "Arum District",
        features: ["Efficient layout", "Modern appliances", "City views"],
        sqft: 650,
        description: "Efficient studio apartment perfect for urban living with modern amenities.",
        amenities: ["Gym", "Pool", "Concierge", "Rooftop terrace"],
        availability: "Available now",
        floorPlan: "Open studio layout with separate kitchen area",
        parking: "Parking available for additional fee",
      },
    }

    const property = propertyDetails[propertyId as keyof typeof propertyDetails]

    if (!property) {
      return { error: "Property not found" }
    }

    return property
  },
})

// Schedule viewing tool
const scheduleViewingTool = tool({
  description: "Schedule a property viewing appointment",
  inputSchema: z.object({
    propertyId: z.number().describe("The ID of the property to view"),
    preferredDate: z.string().describe("Preferred viewing date"),
    preferredTime: z.string().describe("Preferred viewing time"),
    contactInfo: z.object({
      name: z.string(),
      email: z.string(),
      phone: z.string().optional(),
    }),
    viewingType: z.enum(["in-person", "virtual"]).optional().describe("Type of viewing preferred"),
  }),
  execute: async ({ propertyId, preferredDate, preferredTime, contactInfo, viewingType = "in-person" }) => {
    const property = PROPERTIES.find((p) => p.id === propertyId)

    if (!property) {
      return { error: "Property not found" }
    }

    return {
      success: true,
      message: `${viewingType === "virtual" ? "Virtual" : "In-person"} viewing scheduled for ${property.name} on ${preferredDate} at ${preferredTime}`,
      confirmationNumber: `VIEW-${Date.now()}`,
      property: property.name,
      contactInfo,
      viewingType,
      nextSteps: "You will receive a confirmation email shortly with viewing details and access instructions.",
    }
  },
})

const tools = {
  searchProperties: searchPropertiesTool,
  getPropertyDetails: getPropertyDetailsToolOriginal,
  getBuildingInfo: getBuildingInfoTool,
  searchFAQ: searchFAQTool,
  scheduleViewing: scheduleViewingTool,
}

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const systemPrompt = `You are an intelligent property assistant for Cornerstone on Arum, a premium luxury residential building in the prestigious Arum District. You help prospective residents find properties, get detailed information, schedule viewings, and answer questions about the building and neighborhood.

About Cornerstone on Arum:
- 35-story luxury residential building with 280 units
- Built in 2024 by Premium Properties Group
- Located at 123 Arum Boulevard in the heart of Arum District
- Managed by Elite Property Management
- Walk Score: 95, Transit Score: 88

Available Unit Types:
- Studios: Starting at $320,000 (650 sq ft)
- 2-Bedroom: Starting at $450,000 (1,200 sq ft)
- 3-Bedroom: Starting at $650,000 (1,600 sq ft)
- Penthouse: $1,200,000 (2,800 sq ft)

Premium Amenities:
- 24/7 Concierge Service
- State-of-the-art Fitness Center (5 AM - 11 PM)
- Rooftop Pool & Deck with city views
- Sky Lounge with private dining
- Business Center & Co-working Space
- Pet Spa (pet-friendly building)

Location Highlights:
- Walking distance to Arum Park, shopping, dining
- 3 blocks from Metro Station
- Close to Financial District and Arts Quarter
- Excellent walkability and transit access

Your role:
- Help users search for properties based on their specific needs and preferences
- Provide detailed property information including features, pricing, and availability
- Share building amenities, location benefits, and neighborhood information
- Answer questions about policies, lease terms, and move-in requirements
- Schedule both in-person and virtual property viewings
- Search and provide relevant FAQ information
- Be professional, knowledgeable, and helpful in all interactions

Always use the available tools to provide accurate, up-to-date information. When users ask about properties, use the search tool to find relevant options. For specific property details, use the property details tool. For building or neighborhood questions, use the building info tool. For common questions, search the FAQ database.`

  const result = streamText({
    model: "openai/gpt-4o",
    messages: [{ role: "system", content: systemPrompt }, ...convertToModelMessages(messages)],
    tools,
    maxSteps: 5,
  })

  return result.toUIMessageStreamResponse()
}
