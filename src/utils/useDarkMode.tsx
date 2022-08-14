import { useState, useEffect } from 'react';

function darkModeToggle() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem('theme') === 'dark' ? true : false
  );

  const toggleThemeChange = () => {
    if (isDark) {
      localStorage.setItem('theme', 'light');

      document.getElementsByTagName('html')[0].classList.add('light');
      document.getElementsByTagName('html')[0].classList.remove('dark');

      setIsDark(false);
    } else {
      localStorage.setItem('theme', 'dark');

      document.getElementsByTagName('html')[0].classList.add('dark');
      document.getElementsByTagName('html')[0].classList.remove('light');

      setIsDark(true);
    }
  };

  useEffect(() => {
    toggleThemeChange();
  }, []);

  return { toggleThemeChange, isDark };
}

export { darkModeToggle };
