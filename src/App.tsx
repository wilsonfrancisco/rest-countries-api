import { Moon } from 'phosphor-react';
import { Routes, Route } from 'react-router-dom';

import { CountriesProvider } from './contexts/CountryContext';
import { ListCards } from './components/ListCards';
import { Details } from './pages/Details';

function App() {
  return (
    <>
      <header className="relative flex justify-between items-center py-5 px-32 bg-white shadow">
        <h1 className="text-2xl font-extrabold">Where in the world?</h1>
        <button className="font-semibold flex justify-between items-center gap-2">
          <Moon size={18} weight="bold" />
          <span>Dark Mode</span>
        </button>
      </header>
      <CountriesProvider>
        <Routes>
          <Route path="/" element={<ListCards />} />
          <Route path="details/:countryCode" element={<Details />} />
        </Routes>
      </CountriesProvider>
    </>
  );
}

export default App;
