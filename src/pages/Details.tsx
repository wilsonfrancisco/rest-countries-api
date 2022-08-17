import { ArrowLeft } from 'phosphor-react';
import { Link, useParams } from 'react-router-dom';
import { useCountries } from '../hooks/useCountries';
import { useCountry } from '../hooks/useCountry';

function Details() {
  const { countryCode } = useParams();
  const { getCountries, countries } = useCountries();

  if (!countries) {
    getCountries();
  }

  const country = useCountry(countryCode);

  return country ? (
    <section className="px-6 lg:px-32 pt-14">
      <Link
        to="/"
        className="bg-white dark:text-white dark:bg-dark-blue-800 flex gap-2 items-center rounded-md justify-center mb-14 p-1 w-28 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]"
      >
        <ArrowLeft weight="bold" />
        <span>Back</span>
      </Link>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="h-52 md:h-80 lg:h-96">
          <img
            className="aspect-square object-cover h-full w-full"
            src={country.flag}
            alt={`${country.name} country flag`}
          />
        </div>
        <div className="flex flex-col justify-center gap-8">
          <h2 className="text-3xl font-bold dark:text-white">{country.name}</h2>
          <div className="flex flex-col lg:flex-row lg:justify-between text-sm">
            <ul className="flex flex-col gap-1">
              <li className="dark:text-gray-300">
                <span className="font-semibold dark:text-white">
                  Official Name:{' '}
                </span>
                {country.officialName}
              </li>
              <li className="dark:text-gray-300">
                <span className="font-semibold dark:text-white">
                  Population:{' '}
                </span>
                {new Intl.NumberFormat('pt-Br').format(country.population)}
              </li>
              <li className="dark:text-gray-300">
                <span className="font-semibold dark:text-white">Region: </span>
                {country.region}
              </li>
              <li className="dark:text-gray-300">
                <span className="font-semibold dark:text-white">
                  Sub Region:{' '}
                </span>
                {country.subregion}
              </li>
              <li className="dark:text-gray-300">
                <span className="font-semibold dark:text-white">Capital: </span>
                {country.capital}
              </li>
            </ul>
            <ul className="flex flex-col gap-1 mt-8 lg:mt-0">
              <li className="dark:text-gray-300">
                <span className="font-semibold dark:text-white">
                  Top Level Domain{country.tld.length > 1 ? 's' : ''}:
                </span>{' '}
                {country.tld.map((tld) => (
                  <span key={tld}>{tld} </span>
                ))}
              </li>
              <li className="dark:text-gray-300">
                <span className="font-semibold dark:text-white">
                  Currenc{country.currencies.length > 1 ? 'ies' : 'y'}:{' '}
                </span>
                {country.currencies.map((currency) => (
                  <span key={currency}>{currency} </span>
                ))}
              </li>
              <li className="dark:text-gray-300">
                <span className="font-semibold dark:text-white">
                  Language{country.languages.length > 1 ? 's' : ''}:{' '}
                </span>
                {country.languages.map((language) => (
                  <span key={language}>{language} </span>
                ))}
              </li>
            </ul>
          </div>
          <div className="flex flex-col lg:flex-row text-sm gap-3 lg:items-center w-full flex-wrap">
            <span className="font-semibold dark:text-white">
              Border Countr{country.borders.length > 1 ? 'ies' : 'y'}:{' '}
            </span>
            <div className="flex gap-3 md:pb-16 flex-wrap">
              {country.borders.map((border) => {
                return (
                  <Link
                    key={border}
                    to={`/details/${border.slice(0, -1)}`}
                    className="bg-white dark:text-gray-300 dark:bg-dark-blue-800  py-[2px] px-6 rounded-sm shadow-md"
                  >
                    {border}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : null;
}

export { Details };
