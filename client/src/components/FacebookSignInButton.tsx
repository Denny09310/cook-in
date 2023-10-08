import { IonButton, IonIcon } from '@ionic/react';
import { logoFacebook } from 'ionicons/icons';

interface Props extends React.ComponentProps<typeof IonButton> {}

const FacebookSignInButton: React.FC<Props> = (props) => {
  return (
    <IonButton fill="outline" color="dark" {...props}>
      <IonIcon slot="start" icon={logoFacebook} />
      Sign in with Facebook
    </IonButton>
  );
};

export default FacebookSignInButton;
