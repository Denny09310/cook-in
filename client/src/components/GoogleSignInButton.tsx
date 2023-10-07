import { IonButton, IonIcon, useIonRouter, useIonToast } from '@ionic/react';
import { logoGoogle } from 'ionicons/icons';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '~/configs/firebase';

const GoogleSignInButton = () => {
  const router = useIonRouter();
  const [present] = useIonToast();

  const handleSignIn = () =>
    signInWithPopup(auth, googleProvider)
      .then(() => router.push('/', 'root', 'replace'))
      .catch(() =>
        present({
          message: "Can't login with google at the moment. Try again later",
          duration: 2500,
          color: 'danger',
        }),
      );

  return (
    <IonButton fill="outline" color="dark" onClick={handleSignIn}>
      <IonIcon slot="start" icon={logoGoogle} />
      Sign in with Google
    </IonButton>
  );
};

export default GoogleSignInButton;
