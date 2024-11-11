export interface Country {
  name: string;
  countryCode: string;
}

export interface CountriesNowDetailedResponse {
  data: {
    country: string;
    code: string;
    iso3: string;
    populationCounts: PopulationCount[];
  };
}
interface PopulationCount {
  year: number;
  value: number;
}
