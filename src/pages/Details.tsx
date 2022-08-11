import { ArrowLeft } from 'phosphor-react';
import { Link, useParams } from 'react-router-dom';
import { useCountry } from '../hooks/useCountry';

function Details() {
  const { countryCode } = useParams();
  const country = useCountry(countryCode);

  return (
    <section className="px-32 pt-14">
      <Link
        to="/"
        className="bg-white flex gap-2 items-center rounded-md justify-center mb-14 p-1 w-28 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]"
      >
        <ArrowLeft weight="bold" />
        <span>Back</span>
      </Link>
      <div className="grid grid-cols-2 gap-20">
        <div className="h-96">
          <img
            className="aspect-square object-cover h-full w-full"
            src={country.flag}
            alt={`${country.name} country flag`}
          />
        </div>
        <div className="flex flex-col justify-center gap-8">
          <h2 className="text-3xl font-bold">{country.name}</h2>
          <div className="flex justify-between text-sm">
            <ul className="flex flex-col gap-1">
              <li>
                <span className="font-semibold">Official Name: </span>
                {country.officialName}
              </li>
              <li>
                <span className="font-semibold">Population: </span>
                {new Intl.NumberFormat('pt-Br').format(country.population)}
              </li>
              <li>
                <span className="font-semibold">Region: </span>
                {country.region}
              </li>
              <li>
                <span className="font-semibold">Sub Region: </span>
                {country.subregion}
              </li>
              <li>
                <span className="font-semibold">Capital: </span>
                {country.capital}
              </li>
            </ul>
            <ul className="flex flex-col gap-1">
              <li>
                <span className="font-semibold">
                  Top Level Domain{country.tld.length > 1 ? 's' : ''}:
                </span>{' '}
                {country.tld.map((tld) => `${tld} `)}
              </li>
              <li>
                <span className="font-semibold">
                  Currenc{country.currencies.length > 1 ? 'ies' : 'y'}:{' '}
                </span>
                {country.currencies.map((currency) => `${currency} `)}
              </li>
              <li>
                <span className="font-semibold">
                  Language{country.languages.length > 1 ? 's' : ''}:{' '}
                </span>
                {country.languages.map((language) => `${language} `)}
              </li>
            </ul>
          </div>
          <div className="flex text-sm gap-3 items-center w-full flex-wrap">
            <span className="font-semibold">
              Border Countr{country.borders.length > 1 ? 'ies' : 'y'}:{' '}
            </span>
            {country.borders.map((border) => {
              return (
                <Link
                  to={`/details/${border}`}
                  className="bg-white  py-[2px] px-6 rounded-sm shadow-md"
                >
                  {border}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export { Details };
