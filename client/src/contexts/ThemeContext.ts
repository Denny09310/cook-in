import { createContext, useContext } from 'react';

export type Theme = 'system' | 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const initialValues: ThemeState = {
  theme: 'system',
  setTheme: () => null,
  toggleTheme: () => null,
};

export const ThemeContext = createContext(initialValues);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
