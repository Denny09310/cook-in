import { IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
import clsx from 'clsx';
import { menu, notifications } from 'ionicons/icons';

import styles from '@/theme/HomeHeader.module.scss';

const HomeHeader = () => {
  return (
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
  );
};

export default HomeHeader;
