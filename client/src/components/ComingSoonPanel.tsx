import { IonButton, IonIcon } from '@ionic/react';
import { home } from 'ionicons/icons';

import styles from '@/theme/ComingSoonPanel.module.scss';

const ComingSoonPanel = () => {
  return (
    <div className={styles.container}>
      <h1>Coming Soon</h1>
      <IonButton routerLink="/tabs/home">
        <IonIcon slot="start" icon={home} />
        Go Back Home
      </IonButton>
    </div>
  );
};

export default ComingSoonPanel;
