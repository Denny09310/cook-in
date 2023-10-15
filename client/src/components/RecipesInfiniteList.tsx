import { IonImg, IonItem, IonList, IonThumbnail } from '@ionic/react';
import React from 'react';
import { GetRecipesQuery } from '~/graphql/queries/GetRecipes.generated';

interface Props {
  data: GetRecipesQuery | undefined;
}

const RecipesInfiniteList: React.FC<Props> = ({ data }) => {
  const recipes = data?.recipes?.edges;

  return (
    <IonList>
      {recipes?.map(({ node }) => {
        if (!node) return false;

        const { id, title, image } = node;
        return (
          <IonItem key={id}>
            <IonThumbnail slot="start">
              <IonImg src={image} alt={title} />
            </IonThumbnail>
            <h4>{title}</h4>
          </IonItem>
        );
      })}
    </IonList>
  );
};

export default RecipesInfiniteList;
