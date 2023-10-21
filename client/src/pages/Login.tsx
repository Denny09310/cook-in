import { IonContent, IonImg, IonPage, IonText } from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';

import FacebookSignInButton from '@/components/FacebookSignInButton';
import GoogleSignInButton from '@/components/GoogleSignInButton';
import styles from '@/theme/Login.module.scss';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent className={styles.container} scrollY={false}>
        <IonImg className={styles.logo} src="/logo.png" alt="Application Logo" />

        <div className={styles['social-buttons-container']}>
          <GoogleSignInButton />
          <FacebookSignInButton disabled />
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
