import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

export interface Country {
  name: {
    common: string;
    official: string;
  };
  cca2: string;
  flags: {
    svg: string;
    png: string;
  };
  capital: string;
  population: number;
  tld: string[];
  region: string;
  subregion: string;
  borders: string[];
  currencies: { [key: string]: { name: string } };
  languages: { [key: string]: string };
}

interface CountryContextData {
  countries: Country[];
  setRegionFilter: React.Dispatch<React.SetStateAction<string>>;
}

interface CountriesProviderProps {
  children: ReactNode;
}

const CountryContext = createContext<CountryContextData>(
  {} as CountryContextData
);

export const filters =
  'fields=name,capital,tld,cca2,region,subregion,currencies,languages,flags,population,borders';

function CountriesProvider({ children }: CountriesProviderProps) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [regionFilter, setRegionFilter] = useState<string>('');

  useEffect(() => {
    (async () => {
      if (!regionFilter) {
        await api
          .get(`all?${filters}`)
          .then((response) => response.data)
          .then((data) => setCountries(data));

        return;
      }

      await api
        .get(`region/${regionFilter}?${filters}`)
        .then((response) => response.data)
        .then((data) => setCountries(data));
    })();
  }, [regionFilter]);

  return (
    <CountryContext.Provider value={{ countries, setRegionFilter }}>
      {children}
    </CountryContext.Provider>
  );
}

export { CountryContext, CountriesProvider };
