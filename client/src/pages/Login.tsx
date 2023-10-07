import { IonButton, IonContent, IonIcon, IonPage, IonText } from '@ionic/react';
import React from 'react';
import { logoGoogle, logoFacebook } from 'ionicons/icons';

import styles from './Login.module.scss';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent className={styles.container}>
        <img className={styles.logo} src="/logo.png" alt="Application Logo" />

        <div className={styles['social-buttons-container']}>
          <IonButton fill="outline" color="dark">
            <IonIcon slot="start" icon={logoGoogle} />
            Sign in with Google
          </IonButton>
          <IonButton fill="outline" color="dark">
            <IonIcon slot="start" icon={logoFacebook} />
            Sign in with Facebook
          </IonButton>
        </div>

        <IonText className={styles['terms-and-conditions']}>
          <p>
            By Signing In, I agree to the <Link to="#">Terms and Conditions</Link>
          </p>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Login;
