export type KBItem = { id: string; question: string; answer: string; category?: string };

const knowledge: KBItem[] = [
  { id: "welcome", question: "What is Cornerstone on Arum?", answer: "A modern residential development at 154 Arum Road, Table View, Cape Town. Approximately 2.3 km to the beach and close to the MyCiTi Table View stop.", category: "General" },
  { id: "pricing-range", question: "What is the price range for units?", answer: "Prices have recently been adjusted to reflect current market value. Most 1-bedroom units are R1,700,000, 2-bedroom units are R2,300,000 and 2-bedroom lofts are R2,725,000.", category: "Pricing" },
  { id: "availability", question: "Which units are sold or available?", answer: "Most units are officially SOLD, but we have a unique opportunity on a few specific units (e.g., 101, 102, 103, 104, 106, 108, 302, 303, 304). There is currently an accepted offer on these, but they are still suspensive. If you submit a clean offer now, there is a very strong chance of securing the property via the 72-hour clause.", category: "Availability" },
  { id: "deposit", question: "What deposit is required?", answer: "R5,000 within 7 days of Offer to Purchase signature. Applies to cash and bond buyers.", category: "Finance" },
  { id: "bond-window", question: "How long is the bond approval window?", answer: "30 days from Offer to Purchase signature.", category: "Finance" },
  { id: "transfers", question: "When do transfers start and when is completion?", answer: "Transfers commence approximately 60 days before completion. Target completion date is 01 May 2026.", category: "Process" },
  { id: "viewings", question: "Are viewings available?", answer: "No. The development is under construction. Renders, floor plans and specifications are provided digitally.", category: "General" },
  { id: "size-policy", question: "Which size should be quoted?", answer: "Always quote Total m², which includes interior plus balcony if applicable.", category: "Policy" },
  { id: "finance-help", question: "Do you offer help with home loans?", answer: "Yes. BetterBond can assist with up to 100% finance. Use the digital home loan application link provided.", category: "Finance" },
  { id: "72hr-clause", question: "What does the Offers Welcome - 72hr clause mean?", answer: "These units have accepted offers that are currently suspensive. Under the 72-hour clause, the developer can accept a new, unconditional/clean offer. This gives the original buyer 72 hours to meet the new terms or lose the unit.", category: "Policy" }
];

export default knowledge;
