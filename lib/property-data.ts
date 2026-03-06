export type PropertyContext = {
  building: string;
  city: string;
  country?: string;
};

export function getPropertyContext(): PropertyContext {
  return {
    building: "Cornerstone on Arum",
    city: "Table View",
    country: "South Africa",
  };
}
