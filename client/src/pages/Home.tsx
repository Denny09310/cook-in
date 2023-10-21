import styled from '@emotion/styled';
import {
  IonContent as IonContentPrimitive,
  IonPage,
  IonSearchbar as IonSearchbarPrimitive,
  IonText,
} from '@ionic/react';
import React from 'react';

import HomeCategoriesFilters from '@/components/home/HomeCategoriesFilters';
import HomeHeader from '@/components/home/HomeHeader';
import HomeRecomendations from '@/components/home/HomeRecomendations';
import { useAuth } from '@/contexts/AuthContext';

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <IonPage>
      <HomeHeader />
      <IonContent>
        <Container>
          <GreetingsText className="ion-padding-start ion-padding-end">
            <h2>Hi {user?.displayName} !</h2>
            <p>What do you want to cook today</p>
          </GreetingsText>
          <IonSearchbar />
          <HomeCategoriesFilters />
        </Container>

        <HomeRecomendations />
      </IonContent>
    </IonPage>
  );
};

export default Home;

const IonContent = styled(IonContentPrimitive)`
  &::part(scroll) {
    display: flex;
    flex-direction: column;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const GreetingsText = styled(IonText)`
  & h2,
  p {
    margin: 0;
  }

  & p {
    color: var(--ion-color-medium);
  }
`;

const IonSearchbar = styled(IonSearchbarPrimitive)`
  --border-radius: 5px;
  --box-shadow: none;
  --background: var(--ion-color-light);
`;
