import { IonButton, IonIcon } from '@ionic/react';
import { logoFacebook } from 'ionicons/icons';

const FacebookSignInButton = () => {
  return (
    <IonButton fill="outline" color="dark">
      <IonIcon slot="start" icon={logoFacebook} />
      Sign in with Facebook
    </IonButton>
  );
};

export default FacebookSignInButton;
