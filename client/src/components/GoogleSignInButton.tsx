import { IonButton, IonIcon, useIonRouter, useIonToast } from '@ionic/react';
import { signInWithPopup } from 'firebase/auth';
import { logoGoogle } from 'ionicons/icons';

import { auth, googleProvider } from '~/configs/firebase';

interface Props extends React.ComponentProps<typeof IonButton> {}

const GoogleSignInButton: React.FC<Props> = (props) => {
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
    <IonButton fill="outline" color="dark" onClick={handleSignIn} {...props}>
      <IonIcon slot="start" icon={logoGoogle} />
      Sign in with Google
    </IonButton>
  );
};

export default GoogleSignInButton;
