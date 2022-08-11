import { useContext } from 'react';
import { CountryContext } from '../contexts/CountryContext';

function useCountries() {
  const context = useContext(CountryContext);

  return context;
}

export { useCountries };
