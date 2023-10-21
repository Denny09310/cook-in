import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import ComingSoonPanel from '@/components/ComingSoonPanel';

const Favourites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Favourites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <ComingSoonPanel />
      </IonContent>
    </IonPage>
  );
};

export default Favourites;
