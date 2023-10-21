import styled from '@emotion/styled';
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle as IonTitlePrimitive,
  IonToolbar,
} from '@ionic/react';
import { menu, notifications } from 'ionicons/icons';

const HomeHeader = () => {
  return (
    <IonHeader className="ion-no-border">
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton>
            <IonIcon slot="icon-only" icon={menu} />
          </IonButton>
        </IonButtons>
        <IonTitle className="ion-text-center">
          Cook<span>In</span>
        </IonTitle>
        <IonButtons slot="end">
          <IonButton>
            <IonIcon slot="icon-only" icon={notifications} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default HomeHeader;

export const IonTitle = styled(IonTitlePrimitive)`
  font-weight: bold;

  & span {
    color: var(--ion-color-primary);
  }
`;
