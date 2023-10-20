import { IonItem, IonLabel } from '@ionic/react';

import { useGetRecipesQuery } from '@/app/services/recipes';
import styles from '@/theme/HomeRecomendations.module.scss';
import HomeRecomendationCard from './HomeRecomendationCard';

const HomeRecomendations = () => {
  const { data } = useGetRecipesQuery({ page: 1, pageSize: 10 });

  return (
    <div>
      <IonItem className={styles['link-to-recomendations']} lines="none" routerLink="#" detail>
        <IonLabel>
          <h2>Recomendations</h2>
        </IonLabel>
        <IonLabel slot="end">View all</IonLabel>
      </IonItem>

      <swiper-container slides-per-view="2.15">
        {data?.recipes?.map((recipe) => (
          <swiper-slide key={recipe.id}>
            <HomeRecomendationCard recipe={recipe} />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default HomeRecomendations;
