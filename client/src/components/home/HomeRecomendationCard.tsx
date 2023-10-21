import styled from '@emotion/styled';
import {
  IonButton,
  IonCardHeader,
  IonCard as IonCardPrimitive,
  IonCardTitle as IonCardTitlePrimitive,
  IonIcon,
} from '@ionic/react';
import { heart, heartOutline } from 'ionicons/icons';
import React from 'react';
import { useBoolean } from 'react-use';

import { type GetRecipesResponseRecipe as Recipe } from '@/app/services/recipes';

interface Props {
  recipe: Recipe;
}

const HomeRecomendationCard: React.FC<Props> = ({ recipe: { id, image, title } }) => {
  const [isFavourite, setIsFavourite] = useBoolean(false);

  const handleToggleFavourite = () => setIsFavourite(!isFavourite);

  return (
    <IonCard>
      <img src={image} alt={title} />
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>

      <IonCardButton fill="clear" onClick={handleToggleFavourite}>
        <IonIcon slot="icon-only" icon={isFavourite ? heart : heartOutline} />
      </IonCardButton>
    </IonCard>
  );
};

export default HomeRecomendationCard;

const IonCard = styled(IonCardPrimitive)`
  height: 14rem;
`;

const IonCardTitle = styled(IonCardTitlePrimitive)`
  text-align: start !important;
  font-size: medium;
  overflow: hidden;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const IonCardButton = styled(IonButton)`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 2.5rem;
  height: 2.5rem;

  --border-radius: 50%;
  --padding-start: 0.5rem;
  --padding-end: 0.5rem;
`;
