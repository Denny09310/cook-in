import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Favourites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Favourites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding"></IonContent>
    </IonPage>
  );
};

export default Favourites;
