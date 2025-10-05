export type KBItem = { id: string; question: string; answer: string; category?: string };

const knowledge: KBItem[] = [
  { id: "welcome", question: "What is Cornerstone on Arum?", answer: "A modern residential development at 154 Arum Road, Table View, Cape Town. Approximately 2.3 km to the beach and close to the MyCiTi Table View stop.", category: "General" },
  { id: "pricing-range", question: "What is the price range for units?", answer: "1-bedroom R1,500,000 to R1,600,000. 2-bedroom R2,100,000. 2-bedroom loft R2,600,000.", category: "Pricing" },
  { id: "availability", question: "Which units are sold or available?", answer: "Unit 301 is SOLD. Example available 2-bedroom: Unit 306 at R2,200,000. Enquire for the latest live stock.", category: "Availability" },
  { id: "deposit", question: "What deposit is required?", answer: "R5,000 within 7 days of Offer to Purchase signature. Applies to cash and bond buyers.", category: "Finance" },
  { id: "bond-window", question: "How long is the bond approval window?", answer: "30 days from Offer to Purchase signature.", category: "Finance" },
  { id: "transfers", question: "When do transfers start and when is completion?", answer: "Transfers commence approximately 60 days before completion. Target completion date is 01 May 2026.", category: "Process" },
  { id: "viewings", question: "Are viewings available?", answer: "No. The development is under construction. Renders, floor plans and specifications are provided digitally.", category: "General" },
  { id: "size-policy", question: "Which size should be quoted?", answer: "Always quote Total m², which includes interior plus balcony if applicable.", category: "Policy" },
  { id: "finance-help", question: "Do you offer help with home loans?", answer: "Yes. BetterBond can assist with up to 100% finance. Use the digital home loan application link provided.", category: "Finance" }
];

export default knowledge;
