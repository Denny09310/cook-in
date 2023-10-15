import { IonImg, IonItem, IonList, IonThumbnail } from '@ionic/react';
import React from 'react';
import { GetRecipesResponse } from '~/app/services/recipes';

interface Props {
  data: GetRecipesResponse | undefined;
}

const RecipesInfiniteList: React.FC<Props> = ({ data }) => {
  const recipes = data?.recipes;

  return (
    <IonList>
      {recipes?.map(({ id, title, image }) => (
        <IonItem key={id}>
          <IonThumbnail slot="start">
            <IonImg src={image} alt={title} />
          </IonThumbnail>
          <h4>{title}</h4>
        </IonItem>
      ))}
    </IonList>
  );
};

export default RecipesInfiniteList;
