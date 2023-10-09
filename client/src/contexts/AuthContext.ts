import { User } from 'firebase/auth';
import { createContext, useContext } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null | undefined;
}

const initialValues: AuthState = {
  isAuthenticated: false,
  user: undefined,
};

export const AuthContext = createContext(initialValues);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
};
