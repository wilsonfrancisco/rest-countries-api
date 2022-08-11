import { Link } from 'react-router-dom';

interface ICardProps {
  countryName: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
  code: string;
}

function Card({
  countryName,
  capital,
  population,
  region,
  flag,
  code,
}: ICardProps) {
  return (
    <Link to={`details/${code}`}>
      <div className="bg-white h-80 shadow-md rounded-md overflow-hidden">
        <div className="h-36 w-full relative overflow-hidden">
          <img className="object-cover w-full h-full" src={flag} alt="test" />
        </div>
        <div className="pt-4 px-6 text-sm flex flex-col gap-1">
          <h2 className="font-bold text-lg mb-2">{countryName}</h2>
          <p className="text-gray-500">
            <span className="text-black font-semibold">Population: </span>
            {new Intl.NumberFormat('pt-Br').format(population)}
          </p>
          <p className="text-gray-500">
            <span className="text-black font-semibold">Region: </span>
            {region}
          </p>
          <p className="text-gray-500">
            <span className="text-black font-semibold">Capital: </span>
            {capital}
          </p>
        </div>
      </div>
    </Link>
  );
}

export { Card };
