import { IonContent, IonPage, IonSearchbar, IonText } from '@ionic/react';
import clsx from 'clsx';
import React from 'react';

import { useAuth } from '@/contexts/AuthContext';
import styles from '@/theme/Home.module.scss';

import HomeCategoriesFilters from '@/components/home/HomeCategoriesFilters';
import HomeHeader from '@/components/home/HomeHeader';
import HomeRecomendations from '@/components/home/HomeRecomendations';

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <IonPage>
      <HomeHeader />
      <IonContent className={styles.container}>
        <div className={styles['inner-container']}>
          <IonText className={clsx('ion-padding', styles['greetings-text'])}>
            <h2>Hi {user?.displayName} !</h2>
            <p>What do you want to cook today</p>
          </IonText>
          <IonSearchbar className={styles['search-bar']} />
          <HomeCategoriesFilters />
        </div>

        <HomeRecomendations />
      </IonContent>
    </IonPage>
  );
};

export default Home;
