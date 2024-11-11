import Link from "next/link";
import config from "../config";
import PopulationChart from "../components/PopulationChart";

interface CountryInfo {
  borders: Border[];
  population: Population[];
  flag: string;
  name: string;
}
export interface Population {
  year: number;
  value: number;
}
interface Border {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: null | Border[];
}

export default async function page({
  params,
}: {
  params: Promise<{ countryCode: string }>;
}) {
  const countryCode = (await params).countryCode;
  const data = await fetch(`${config.apiUrl}/countries/${countryCode}`);
  const country = (await data.json()) as CountryInfo;

  return (
    <div className="container mx-auto px-2">
      <h1 className="text-3xl  font-bold my-6">{country.name}</h1>
      <img src={country.flag} alt={country.name} className="max-w-sm" />

      <h3 className="text-2xl my-4">{country.name} makes borders with:</h3>
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {country.borders.map((border) => (
          <Link key={border.countryCode} href={`/${border.countryCode}`}>
            <div
              className="border rounded-md p-2 m-auto w-auto text-center"
              key={border.countryCode}
            >
              <p>{border.commonName}</p>
            </div>
          </Link>
        ))}
      </section>
      <h3 className="text-2xl mt-4">Population over the years: </h3>
      <PopulationChart population={country.population} />
    </div>
  );
}
