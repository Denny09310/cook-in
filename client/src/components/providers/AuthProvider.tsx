import React, { PropsWithChildren, useEffect, useState } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';

import { AuthContext } from '~/contexts/AuthContext';
import { auth } from '~/configs/firebase';

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>();

  const isAuthenticated = user !== undefined && user !== null;

  useEffect(() => onAuthStateChanged(auth, setUser), []);

  return <AuthContext.Provider value={{ user, isAuthenticated }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
