import { PropsWithChildren, useEffect } from 'react';
import { useMedia } from 'react-use';

import { useStorage } from '@/app/storage';
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
  const {
    loading,
    state: [theme, setTheme],
  } = useStorage(storageKey, defaultTheme);

  const prefersDarkScheme = useMedia('(prefers-color-scheme: dark)');

  const isDark = (theme === 'system' && prefersDarkScheme) || theme === 'dark';

  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
  }, [theme, prefersDarkScheme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  if (loading) return false;

  return <ThemeContext.Provider value={{ theme, isDark, setTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
