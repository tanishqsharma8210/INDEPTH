export type Source = {
  title: string;
  publisher: string;
  url: string;
};

export type RangeRegion = {
  label: string;
  description: string;
  latitude: number;
  longitude: number;
  radius: number;
};

export type AnimalFact = {
  label: string;
  value: string;
};

export type JourneyImage = {
  src: string;
  alt: string;
  caption: string;
};

export type PrehistoricAnimal = {
  slug: string;
  commonName: string;
  scientificName: string;
  eyebrow: string;
  summary: string;
  image: JourneyImage;
  timePeriod: string;
  dateRange: string;
  habitat: string;
  diet: string;
  physicalTraits: string;
  adaptation: string;
  behaviour: string;
  fossilEvidence: string;
  whyItMatters: string;
  extinction: string;
  facts: AnimalFact[];
  known: string[];
  uncertain: string[];
  rangeSummary: string;
  rangeRegions: RangeRegion[];
  sources: Source[];
};
