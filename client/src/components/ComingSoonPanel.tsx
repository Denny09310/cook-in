import styled from '@emotion/styled';
import { IonButton, IonIcon } from '@ionic/react';
import { home } from 'ionicons/icons';

const ComingSoonPanel = () => {
  return (
    <Contaier>
      <h1>Coming Soon</h1>
      <IonButton routerLink="/tabs/home">
        <IonIcon slot="start" icon={home} />
        Go Back Home
      </IonButton>
    </Contaier>
  );
};

export default ComingSoonPanel;

const Contaier = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    font-weight: 600;
  }
`;
