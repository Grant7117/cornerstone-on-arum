export interface Unit {
    unitNo: string;
    floor: string;
    bedrooms: number;
    bathrooms: number;
    size: number; // Total size
    color: string;
    status: "Available" | "Sold" | "Reserved";
    price: string;
    images?: string[];
}

export const units: Unit[] = [
    // First Floor
    { unitNo: "CS101", floor: "First", bedrooms: 1, bathrooms: 1, size: 47, color: "#3b82f6", status: "Sold", price: "R1,600,000" },
    { unitNo: "CS102", floor: "First", bedrooms: 2, bathrooms: 1, size: 67, color: "#8b5cf6", status: "Sold", price: "R2,100,000" },
    { unitNo: "CS103", floor: "First", bedrooms: 1, bathrooms: 1, size: 45, color: "#3b82f6", status: "Sold", price: "R1,600,000" },
    { unitNo: "CS104", floor: "First", bedrooms: 1, bathrooms: 1, size: 48, color: "#3b82f6", status: "Sold", price: "R1,600,000" },
    { unitNo: "CS105", floor: "First", bedrooms: 1, bathrooms: 1, size: 48, color: "#3b82f6", status: "Sold", price: "R1,600,000" },
    { unitNo: "CS106", floor: "First", bedrooms: 1, bathrooms: 1, size: 45, color: "#3b82f6", status: "Sold", price: "R1,500,000" },
    { unitNo: "CS107", floor: "First", bedrooms: 2, bathrooms: 1, size: 67, color: "#8b5cf6", status: "Sold", price: "R2,100,000" },
    { unitNo: "CS108", floor: "First", bedrooms: 1, bathrooms: 1, size: 47, color: "#3b82f6", status: "Sold", price: "R1,600,000" },

    // Second Floor
    { unitNo: "CS201", floor: "Second", bedrooms: 1, bathrooms: 1, size: 47, color: "#3b82f6", status: "Sold", price: "R1,600,000" },
    { unitNo: "CS202", floor: "Second", bedrooms: 2, bathrooms: 1, size: 68, color: "#8b5cf6", status: "Sold", price: "R2,100,000" },
    { unitNo: "CS203", floor: "Second", bedrooms: 1, bathrooms: 1, size: 45, color: "#3b82f6", status: "Sold", price: "R1,500,000" },
    { unitNo: "CS204", floor: "Second", bedrooms: 1, bathrooms: 1, size: 48, color: "#3b82f6", status: "Sold", price: "R1,600,000" },
    { unitNo: "CS205", floor: "Second", bedrooms: 1, bathrooms: 1, size: 48, color: "#3b82f6", status: "Sold", price: "R1,600,000" },
    { unitNo: "CS206", floor: "Second", bedrooms: 1, bathrooms: 1, size: 45, color: "#3b82f6", status: "Sold", price: "R1,500,000" },
    { unitNo: "CS207", floor: "Second", bedrooms: 2, bathrooms: 1, size: 67, color: "#8b5cf6", status: "Sold", price: "R2,100,000" },
    { unitNo: "CS208", floor: "Second", bedrooms: 1, bathrooms: 1, size: 47, color: "#3b82f6", status: "Sold", price: "R1,600,000" },

    // Third Floor / Loft
    { unitNo: "CS301", floor: "Third", bedrooms: 2, bathrooms: 1, size: 67, color: "#8b5cf6", status: "Sold", price: "R2,200,000" },
    {
        unitNo: "CS302", floor: "Third+Loft", bedrooms: 2, bathrooms: 2, size: 77, color: "#f59e0b", status: "Sold", price: "R2,600,000"
    },
    {
        unitNo: "CS303", floor: "Third+Loft", bedrooms: 2, bathrooms: 2, size: 77, color: "#f59e0b", status: "Sold", price: "R2,600,000"
    },
    {
        unitNo: "CS304", floor: "Third+Loft", bedrooms: 2, bathrooms: 2, size: 77, color: "#f59e0b", status: "Sold", price: "R2,600,000",
        images: [
            "/images/units/304-1.png",
            "/images/units/304-2.png",
            "/images/units/304-3.png",
            "/images/units/304-4.png",
            "/images/units/304-5.png",
        ]
    },
    {
        unitNo: "CS305", floor: "Third+Loft", bedrooms: 2, bathrooms: 2, size: 77, color: "#f59e0b", status: "Sold", price: "R2,600,000",
        images: [
            "/images/units/305-1.png",
            "/images/units/305-2.png",
            "/images/units/305-3.png",
            "/images/units/305-4.png",
            "/images/units/305-5.png",
        ]
    },
    { unitNo: "CS306", floor: "Third", bedrooms: 2, bathrooms: 1, size: 67, color: "#8b5cf6", status: "Sold", price: "R2,200,000" },
];
