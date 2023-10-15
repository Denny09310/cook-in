import {
  InfiniteScrollCustomEvent,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonLoading,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  RefresherCustomEvent,
} from '@ionic/react';
import clsx from 'clsx';
import React from 'react';

import { menu, notifications } from 'ionicons/icons';
import { useCounter } from 'react-use';
import { useGetRecipesQuery } from '~/app/services/recipes';
import RecipesInfiniteList from '~/components/RecipesInfiniteList';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  const [page, { inc: nextPage }] = useCounter(1);

  const { data, isLoading, refetch } = useGetRecipesQuery({ page, pageSize: 15 });

  const handleRefresh = (e: RefresherCustomEvent) => refetch().then(e.detail.complete);
  const handleInfinite = (e: InfiniteScrollCustomEvent) => {
    nextPage();
    refetch().then(() => e.target.complete());
  };

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
      <IonContent>
        <IonLoading isOpen={isLoading} />
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent />
        </IonRefresher>
        <RecipesInfiniteList data={data} />
        <IonInfiniteScroll onIonInfinite={handleInfinite}>
          <IonInfiniteScrollContent />
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default Home;
