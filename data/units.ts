export interface Unit {
    unitNo: string;
    floor: string;
    bedrooms: number;
    bathrooms: number;
    size: number;
    color: string;
    status: "Available" | "Sold" | "Reserved" | "Offers Welcome - 72hr Clause";
    price: string;
    images?: string[];
}

export const units: Unit[] = [
    // First Floor
    {
        unitNo: "CS101", floor: "First", bedrooms: 1, bathrooms: 1, size: 47, color: "#f59e0b", status: "Offers Welcome - 72hr Clause", price: "R1,700,000",
        images: ["/images/units/cs101-cs201-floorplan.png", "/images/units/cs-101-201-a.png", "/images/units/cs-101-201-b.png", "/images/units/cs-101-201-c.png", "/images/units/cs-101-201-d.png"]
    },
    {
        unitNo: "CS102", floor: "First", bedrooms: 2, bathrooms: 1, size: 67, color: "#f59e0b", status: "Offers Welcome - 72hr Clause", price: "R2,300,000",
        images: ["/images/units/cs102-cs202-floorplan.png", "/images/units/cs-102-202-b.png", "/images/units/cs-102-202-c.png", "/images/units/cs-102-202-d.png", "/images/units/cs-102-202-e.png"]
    },
    {
        unitNo: "CS103", floor: "First", bedrooms: 1, bathrooms: 1, size: 45, color: "#f59e0b", status: "Offers Welcome - 72hr Clause", price: "R1,700,000",
        images: ["/images/units/cs103-cs203-floorplan.png", "/images/units/cs-103-203-a.png", "/images/units/cs-103-203-b.png", "/images/units/cs-103-203-c.png", "/images/units/cs-103-203-d.png", "/images/units/cs-103-203-e.png"]
    },
    {
        unitNo: "CS104", floor: "First", bedrooms: 1, bathrooms: 1, size: 48, color: "#f59e0b", status: "Offers Welcome - 72hr Clause", price: "R1,700,000",
        images: ["/images/units/cs104-cs204-floorplan.png", "/images/units/cs-104-204-a.png", "/images/units/cs-104-204-b.png", "/images/units/cs-104-204-c.png", "/images/units/cs-104-204-d.png", "/images/units/cs-104-204-e.png"]
    },
    {
        unitNo: "CS105", floor: "First", bedrooms: 1, bathrooms: 1, size: 48, color: "#3b82f6", status: "Sold", price: "R1,700,000",
        images: ["/images/units/cs105-cs205-floorplan.png", "/images/units/cs-105-205-a.png", "/images/units/cs-105-205-b.png", "/images/units/cs-105-205-c.png", "/images/units/cs-105-205-d.png", "/images/units/cs-105-205-e.png"]
    },
    {
        unitNo: "CS106", floor: "First", bedrooms: 1, bathrooms: 1, size: 45, color: "#f59e0b", status: "Offers Welcome - 72hr Clause", price: "R1,700,000",
        images: ["/images/units/cs106-cs206-floorplan.png", "/images/units/cs-106-a.png", "/images/units/cs-106-b.png", "/images/units/cs-106-c.png", "/images/units/cs-106-d.png", "/images/units/cs-106-e.png"]
    },
    {
        unitNo: "CS107", floor: "First", bedrooms: 2, bathrooms: 1, size: 67, color: "#8b5cf6", status: "Sold", price: "R2,300,000",
        images: ["/images/units/cs107-cs207-floorplan.png", "/images/units/cs-107-a.png", "/images/units/cs-107-b.png", "/images/units/cs-107-c.png", "/images/units/cs-107-d.png"]
    },
    {
        unitNo: "CS108", floor: "First", bedrooms: 1, bathrooms: 1, size: 47, color: "#f59e0b", status: "Offers Welcome - 72hr Clause", price: "R1,700,000",
        images: ["/images/units/cs108-cs208-floorplan.png", "/images/units/cs-108-a.png", "/images/units/cs-108-b.png", "/images/units/cs-108-c.png", "/images/units/cs-108-d.png"]
    },

    // Second Floor
    {
        unitNo: "CS201", floor: "Second", bedrooms: 1, bathrooms: 1, size: 47, color: "#3b82f6", status: "Sold", price: "R1,700,000",
        images: ["/images/units/cs101-cs201-floorplan.png", "/images/units/cs-101-201-a.png", "/images/units/cs-101-201-b.png", "/images/units/cs-101-201-c.png", "/images/units/cs-101-201-d.png"]
    },
    {
        unitNo: "CS202", floor: "Second", bedrooms: 2, bathrooms: 1, size: 68, color: "#8b5cf6", status: "Sold", price: "R2,300,000",
        images: ["/images/units/cs102-cs202-floorplan.png", "/images/units/cs-102-202-b.png", "/images/units/cs-102-202-c.png", "/images/units/cs-102-202-d.png", "/images/units/cs-102-202-e.png"]
    },
    {
        unitNo: "CS203", floor: "Second", bedrooms: 1, bathrooms: 1, size: 45, color: "#3b82f6", status: "Sold", price: "R1,700,000",
        images: ["/images/units/cs103-cs203-floorplan.png", "/images/units/cs-103-203-a.png", "/images/units/cs-103-203-b.png", "/images/units/cs-103-203-c.png", "/images/units/cs-103-203-d.png", "/images/units/cs-103-203-e.png"]
    },
    {
        unitNo: "CS204", floor: "Second", bedrooms: 1, bathrooms: 1, size: 48, color: "#3b82f6", status: "Sold", price: "R1,700,000",
        images: ["/images/units/cs104-cs204-floorplan.png", "/images/units/cs-104-204-a.png", "/images/units/cs-104-204-b.png", "/images/units/cs-104-204-c.png", "/images/units/cs-104-204-d.png", "/images/units/cs-104-204-e.png"]
    },
    {
        unitNo: "CS205", floor: "Second", bedrooms: 1, bathrooms: 1, size: 48, color: "#3b82f6", status: "Sold", price: "R1,700,000",
        images: ["/images/units/cs105-cs205-floorplan.png", "/images/units/cs-105-205-a.png", "/images/units/cs-105-205-b.png", "/images/units/cs-105-205-c.png", "/images/units/cs-105-205-d.png", "/images/units/cs-105-205-e.png"]
    },
    {
        unitNo: "CS206", floor: "Second", bedrooms: 1, bathrooms: 1, size: 45, color: "#3b82f6", status: "Sold", price: "R1,700,000",
        images: ["/images/units/cs106-cs206-floorplan.png", "/images/units/cs-106-a.png", "/images/units/cs-106-b.png", "/images/units/cs-106-c.png", "/images/units/cs-106-d.png", "/images/units/cs-106-e.png"]
    },
    {
        unitNo: "CS207", floor: "Second", bedrooms: 2, bathrooms: 1, size: 67, color: "#8b5cf6", status: "Sold", price: "R2,300,000",
        images: ["/images/units/cs107-cs207-floorplan.png", "/images/units/cs-107-a.png", "/images/units/cs-107-b.png", "/images/units/cs-107-c.png", "/images/units/cs-107-d.png"]
    },
    {
        unitNo: "CS208", floor: "Second", bedrooms: 1, bathrooms: 1, size: 47, color: "#3b82f6", status: "Sold", price: "R1,700,000",
        images: ["/images/units/cs108-cs208-floorplan.png", "/images/units/cs-108-a.png", "/images/units/cs-108-b.png", "/images/units/cs-108-c.png", "/images/units/cs-108-d.png"]
    },

    // Third Floor / Loft
    {
        unitNo: "CS301", floor: "Third", bedrooms: 2, bathrooms: 1, size: 67, color: "#8b5cf6", status: "Sold", price: "R2,600,000",
        images: ["/images/units/cs301-floorplan.png", "/images/units/cs-301-a.png", "/images/units/cs-301-b.png", "/images/units/cs-301-c.png", "/images/units/cs-301-d.png", "/images/units/cs-301-e.png"]
    },
    {
        unitNo: "CS302", floor: "Third+Loft", bedrooms: 2, bathrooms: 2, size: 77, color: "#f59e0b", status: "Offers Welcome - 72hr Clause", price: "R2,725,000",
        images: ["/images/units/cs302-floorplan.png", "/images/units/cs-302-a.png", "/images/units/cs-302-b.png", "/images/units/cs-302-c.png", "/images/units/cs-302-d.png", "/images/units/cs-302-e.png"]
    },
    {
        unitNo: "CS303", floor: "Third+Loft", bedrooms: 2, bathrooms: 2, size: 77, color: "#f59e0b", status: "Offers Welcome - 72hr Clause", price: "R2,725,000",
        images: ["/images/units/cs303-floorplan.png", "/images/units/cs303-loft-living-a.png", "/images/units/cs303-bedroom-d.png", "/images/units/cs-303-a.png", "/images/units/cs-303-c.png", "/images/units/cs-303-d.png", "/images/units/cs-303-e.png"]
    },
    {
        unitNo: "CS304", floor: "Third+Loft", bedrooms: 2, bathrooms: 2, size: 77, color: "#f59e0b", status: "Offers Welcome - 72hr Clause", price: "R2,725,000",
        images: ["/images/units/cs304-floorplan.png", "/images/units/304-1.png", "/images/units/304-2.png", "/images/units/304-3.png", "/images/units/304-4.png", "/images/units/304-5.png"]
    },
    {
        unitNo: "CS305", floor: "Third+Loft", bedrooms: 2, bathrooms: 2, size: 77, color: "#f59e0b", status: "Sold", price: "R2,725,000",
        images: ["/images/units/cs304-floorplan.png", "/images/units/305-1.png", "/images/units/305-2.png", "/images/units/305-3.png", "/images/units/305-4.png", "/images/units/305-5.png"]
    },
    {
        unitNo: "CS306", floor: "Third", bedrooms: 2, bathrooms: 1, size: 67, color: "#8b5cf6", status: "Sold", price: "R2,600,000",
        images: ["/images/units/cs306-floorplan.png", "/images/units/cs301-cs306-living-a.png", "/images/units/cs301-cs306-living-b.png", "/images/units/cs301-cs306-bedroom-d.png", "/images/units/cs301-cs306-bedroom-e.png"]
    },
];
