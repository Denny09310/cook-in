import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { menu, notifications } from 'ionicons/icons';
import React from 'react';
import clsx from 'clsx';

import styles from '@/theme/Home.module.scss';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonIcon slot="icon-only" icon={menu} />
            </IonButton>
          </IonButtons>
          <IonTitle class={clsx('ion-text-center', styles.title)}>
            Cook<span className={styles['highlight-primary']}>In</span>
          </IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon slot="icon-only" icon={notifications} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">UI goes here...</IonContent>
    </IonPage>
  );
};

export default Home;
