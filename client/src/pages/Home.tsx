import {
  InfiniteScrollCustomEvent,
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonLoading,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  RefresherCustomEvent,
  RefresherEventDetail,
} from '@ionic/react';
import React from 'react';

import RecipesInfiniteList from '~/components/RecipesInfiniteList';
import { useGetRecipesQuery } from '~/app/services/recipes';
import { useCounter } from 'react-use';

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
          <IonTitle>Page Title</IonTitle>
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
