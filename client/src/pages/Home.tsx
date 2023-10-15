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
import { useGetRecipesQuery } from '~/graphql/queries/GetRecipes.generated';

const Home: React.FC = () => {
  const { data, isLoading, refetch } = useGetRecipesQuery();

  const handleRefresh = (e: RefresherCustomEvent) => refetch().then(e.detail.complete);
  const handleInfinite = (e: InfiniteScrollCustomEvent) =>
    refetch({ after: data?.recipes?.edges?.at(-1)?.cursor }).then(() => e.target.complete());

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
