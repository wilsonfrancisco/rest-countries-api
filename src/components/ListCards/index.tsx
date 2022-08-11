import { MagnifyingGlass } from 'phosphor-react';
import { useState } from 'react';
import { Country } from '../../contexts/CountryContext';
import { useCountries } from '../../hooks/useCountries';
import { Card } from '../Card';

function ListCards() {
  const [searchedCountry, setSearchedCountry] = useState<string>('');
  const { countries, setRegionFilter } = useCountries();

  let filteredCountries: Country[] = [];

  filteredCountries =
    searchedCountry.length > 0
      ? (filteredCountries = countries.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(searchedCountry.toLowerCase())
        ))
      : [];

  return (
    <main className="mx-32 mt-10">
      <form className="w-full flex justify-between items-center">
        <label
          htmlFor="country"
          className="flex items-center gap-4 bg-white w-96 p-4 rounded-md text-gray-500 shadow-[0_0_5px_0_rgba(0,0,0,0.1)]"
        >
          <MagnifyingGlass size={18} weight="bold" />
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Search for a country..."
            className="w-full h-full"
            onChange={(e) => setSearchedCountry(e.target.value)}
          />
        </label>

        <label
          htmlFor="region"
          className="bg-white font-semibold p-4 rounded-md w-48 shadow-[0_0_5px_0_rgba(0,0,0,0.1)]"
        >
          <select
            name="region"
            id="region"
            className="bg-white w-full"
            onChange={(e) => setRegionFilter(e.target.value)}
          >
            <option selected disabled hidden>
              Filter by Region
            </option>
            <option value="">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </label>
      </form>

      <section className="mt-10 grid grid-cols-4 gap-14 h-[calc(100vh-14rem)] overflow-y-auto pb-8">
        {searchedCountry.length > 0
          ? filteredCountries.map((country) => (
              <Card
                key={country.name.common}
                capital={country.capital}
                countryName={country.name.common}
                population={country.population}
                region={country.region}
                flag={country.flags.svg}
                code={country.cca2}
              />
            ))
          : countries.map((country) => (
              <Card
                key={country.name.common}
                capital={country.capital}
                countryName={country.name.common}
                population={country.population}
                region={country.region}
                flag={country.flags.svg}
                code={country.cca2}
              />
            ))}
      </section>
    </main>
  );
}

export { ListCards };
