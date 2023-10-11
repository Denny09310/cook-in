import { onAuthStateChanged, type User } from 'firebase/auth';
import React, { PropsWithChildren, useEffect, useState } from 'react';

import { auth } from '~/configs/firebase';
import { AuthContext } from '~/contexts/AuthContext';

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>();

  useEffect(() => onAuthStateChanged(auth, setUser), []);

  if (user === undefined) return false;

  return <AuthContext.Provider value={{ user, isAuthenticated: user !== null }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
