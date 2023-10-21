import styled from '@emotion/styled';
import { IonContent as IonContentPrimitive, IonImg, IonPage, IonText } from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';

import FacebookSignInButton from '@/components/FacebookSignInButton';
import GoogleSignInButton from '@/components/GoogleSignInButton';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent scrollY={false}>
        <Logo src="/logo.png" alt="Application Logo" />

        <SocialButtons>
          <GoogleSignInButton />
          <FacebookSignInButton disabled />
        </SocialButtons>

        <TermsAndConditions>
          <p>
            By Signing In, I agree to the <Link to="#">Terms and Conditions</Link>
          </p>
        </TermsAndConditions>
      </IonContent>
    </IonPage>
  );
};

export default Login;

const IonContent = styled(IonContentPrimitive)`
  &::part(scroll) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Logo = styled(IonImg)`
  width: 16rem;
  height: 16rem;
`;

const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & ion-button {
    --border-radius: 0.5rem;
    --padding-start: 2rem;
    --padding-end: 2rem;

    &::part(native) {
      height: 3rem;
    }
  }
`;

const TermsAndConditions = styled(IonText)`
  position: absolute;
  bottom: 6rem;
  font-size: small;
`;
