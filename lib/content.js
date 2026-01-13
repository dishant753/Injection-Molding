export const stats = [
  { value: 45, label: "Presses" },
  { value: 800, label: "Ton Range" },
  { value: 8, label: "Parts / Month (M+)" },
  { value: 100, label: "Sq.ft Facility (K+)" }
];

export const capabilityCards = [
  {
    title: "Tooling & DFM",
    description: "In-house mold design, simulation, and rapid prototyping support."
  },
  {
    title: "Multi-cavity Production",
    description: "High-efficiency molding for scalable, repeatable output."
  },
  {
    title: "Insert & Overmolding",
    description: "Integrated assemblies with metal or plastic inserts."
  },
  {
    title: "Assembly & Packaging",
    description: "Secondary ops, kitting, labeling, and dispatch."
  }
];

export const industries = [
  "Automotive",
  "Medical",
  "Electronics",
  "Packaging",
  "Consumer",
  "Industrial"
];

export const productFilters = [
  "All",
  "Automotive",
  "Medical",
  "Electronics",
  "Packaging",
  "Consumer",
  "Industrial"
];

export const productItems = Array.from({ length: 50 }, (_, index) => {
  const categories = ["Automotive", "Medical", "Electronics", "Packaging", "Consumer", "Industrial"];
  const category = categories[index % categories.length];
  return {
    id: index + 1,
    title: `Component ${index + 1}`,
    category,
    material: "ABS",
    finish: "Matte",
    images: [
      `/images/products/product-${(index % 10) + 1}.jpg`,
      `/images/products/product-${(index % 10) + 2}.jpg`,
      `/images/products/product-${(index % 10) + 3}.jpg`
    ]
  };
});

export const facilityImages = [
  "/images/facility/facility-1.jpg",
  "/images/facility/facility-2.jpg",
  "/images/facility/facility-3.jpg",
  "/images/facility/facility-4.jpg",
  "/images/facility/facility-5.jpg",
  "/images/facility/facility-6.jpg"
];
