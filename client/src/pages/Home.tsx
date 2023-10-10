import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '~/configs/firebase';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page Title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton onClick={() => signOut(auth)}>Signout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
