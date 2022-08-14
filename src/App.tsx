import { Moon, Sun } from 'phosphor-react';
import { Routes, Route } from 'react-router-dom';

import { CountriesProvider } from './contexts/CountryContext';
import { ListCards } from './components/ListCards';
import { Details } from './pages/Details';
import { darkModeToggle } from './utils/useDarkMode';

function App() {
  const { isDark, toggleThemeChange } = darkModeToggle();

  return (
    <>
      <header className="relative flex justify-between items-center text-sm py-5 px-6 md:text-base md:px-20 lg:px-32 bg-white dark:bg-dark-blue-800 dark:text-white shadow">
        <h1 className="md:xl lg:text-2xl font-extrabold">
          Where in the world?
        </h1>
        <button
          onClick={() => toggleThemeChange()}
          className="font-semibold flex justify-between items-center gap-2"
        >
          {!isDark ? (
            <>
              <Moon size={18} weight="bold" />
              <span>Dark Mode</span>
            </>
          ) : (
            <>
              <Sun size={18} weight="fill" />
              <span>Light Mode</span>
            </>
          )}
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
