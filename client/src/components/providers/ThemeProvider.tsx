import { PropsWithChildren, useEffect } from 'react';
import { useLocalStorage, useMedia } from 'react-use';

import { THEME_UI_KEY } from '@/utils/constants';
import { ThemeContext, type Theme } from '@/contexts/ThemeContext';

interface Props {
  defaultTheme?: Theme;
  storageKey?: string;
}

const ThemeProvider: React.FC<PropsWithChildren<Props>> = ({
  defaultTheme = 'system',
  storageKey = THEME_UI_KEY,
  children,
}) => {
  const [theme, setTheme] = useLocalStorage(storageKey, defaultTheme);

  const prefersDarkScheme = useMedia('(prefers-color-scheme: dark)');

  const isDark = (theme === 'system' && prefersDarkScheme) || theme === 'dark';

  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
  }, [theme, prefersDarkScheme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme: theme ?? defaultTheme, isDark, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
