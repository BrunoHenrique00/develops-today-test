import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Country, CountriesNowDetailedResponse } from './types/country';

@Controller('countries')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getCountries(): Promise<Country[]> {
    const data = await fetch('https://date.nager.at/api/v3/AvailableCountries');

    const countries = (await data.json()) as Country[];
    return countries;
  }

  @Get(':countryName')
  async findOne(
    @Param() { countryName }: { countryName: string },
  ): Promise<any> {
    const dataBorder = await fetch(
      `https://date.nager.at/api/v3/CountryInfo/${countryName}`,
    );

    const { borders, commonName } = await dataBorder.json();

    // Parallel requests to get population and flag here
    const [dataPopulation, dataImageFlag] = await Promise.all([
      fetch('https://countriesnow.space/api/v0.1/countries/population', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          country: commonName,
        }),
      }),
      fetch(`https://countriesnow.space/api/v0.1/countries/flag/images`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          iso2: countryName,
        }),
      }),
    ]);

    const {
      data: { populationCounts },
    } = (await dataPopulation.json()) as CountriesNowDetailedResponse;

    const {
      data: { flag },
    } = await dataImageFlag.json();

    return {
      borders,
      population: populationCounts,
      flag,
      name: commonName,
    };
  }
}
