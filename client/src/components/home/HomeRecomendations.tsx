import styled from '@emotion/styled';
import { IonItem, IonLabel } from '@ionic/react';

import { useGetRecipesQuery } from '@/app/services/recipes';
import HomeRecomendationCard from './HomeRecomendationCard';

const HomeRecomendations = () => {
  const { data } = useGetRecipesQuery({ page: 1, pageSize: 10 });

  return (
    <Container>
      <LinkToRecommendations lines="none" routerLink="#" detail>
        <IonLabel>
          <h2>Recomendations</h2>
        </IonLabel>
        <IonLabel slot="end">View all</IonLabel>
      </LinkToRecommendations>

      <swiper-container slides-per-view="2.15">
        {data?.recipes?.map((recipe) => (
          <swiper-slide key={recipe.id}>
            <HomeRecomendationCard recipe={recipe} />
          </swiper-slide>
        ))}
      </swiper-container>
    </Container>
  );
};

export default HomeRecomendations;

const Container = styled.div`
  flex: 1;
  background-color: var(--ion-color-light);
`;

const LinkToRecommendations = styled(IonItem)`
  --background: transparent;
`;
