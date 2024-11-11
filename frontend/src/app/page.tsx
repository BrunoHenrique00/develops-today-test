import Link from "next/link";
import CountryCard, { CountryProps } from "./components/CountryCard";
import config from "./config";

export default async function Home() {
  const data = await fetch(`${config.apiUrl}/countries`);
  const countries = await data.json();
  return (
    <main className="container mx-auto px-2">
      <h1 className="text-3xl font-bold my-6">Countries List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {countries.map((country: CountryProps) => (
          <Link
            key={country.countryCode}
            href={`/${country.countryCode}`}
            prefetch
          >
            <CountryCard
              countryCode={country.countryCode}
              name={country.name}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
