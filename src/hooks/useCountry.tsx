import { Country } from '../contexts/CountryContext';
import { useCountries } from './useCountries';

interface IModifiedCountry
  extends Pick<
    Country,
    'capital' | 'population' | 'tld' | 'region' | 'subregion'
  > {
  name: string;
  flag: string;
  code: string;
  officialName: string;
  borders: string[];
  languages: string[];
  currencies: string[];
}

function useCountry(countryCode: string | undefined) {
  const { countries } = useCountries();

  const languages: string[] = [];
  const currencies: string[] = [];

  let _country = countries.find(
    (country) => country.cca2 === countryCode
  ) as Country;

  for (const key in _country.languages) {
    languages.push(_country.languages[key]);
  }

  for (const key in _country.currencies) {
    currencies.push(_country.currencies[key].name);
  }

  const country: IModifiedCountry = {
    languages,
    currencies,
    tld: _country.tld,
    code: _country.cca2,
    region: _country.region,
    flag: _country.flags.svg,
    capital: _country.capital,
    borders: _country.borders,
    name: _country.name.common,
    subregion: _country.subregion,
    population: _country.population,
    officialName: _country.name.official,
  };

  return country;
}

export { useCountry };
