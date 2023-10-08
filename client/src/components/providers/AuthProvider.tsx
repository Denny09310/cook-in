import React, { PropsWithChildren, useEffect, useState } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';

import { AuthContext } from '~/contexts/AuthContext';
import { auth } from '~/configs/firebase';
import { IonLoading } from '@ionic/react';

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>();

  useEffect(() => onAuthStateChanged(auth, setUser), []);

  if (!user) return <IonLoading isOpen />;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: user !== null }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
