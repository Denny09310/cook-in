import { PropsWithChildren, useEffect } from 'react';
import { useLocalStorage, useMediaQuery } from 'usehooks-ts';

import { ThemeContext, type Theme } from '~/contexts/ThemeContext';

interface Props {
  defaultTheme?: Theme;
  storageKey?: string;
}

const ThemeProvider: React.FC<PropsWithChildren<Props>> = ({
  defaultTheme = 'system',
  storageKey = 'theme-ui',
  children,
}) => {
  const [theme, setTheme] = useLocalStorage(storageKey, defaultTheme);
  const prefersDarkScheme = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => {
    const shouldToggleClass = (theme === 'system' && prefersDarkScheme) || theme === 'dark';
    document.body.classList.toggle('dark', shouldToggleClass);
  }, [theme, prefersDarkScheme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
