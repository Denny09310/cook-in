import { IonList } from '@ionic/react';
import React from 'react';

import { GetRecipesResponse } from '~/app/services/recipes';
import RecipesListItem from './RecipesListItem';

interface Props {
  data: GetRecipesResponse | undefined;
}

const RecipesInfiniteList: React.FC<Props> = ({ data }) => {
  const recipes = data?.recipes;

  return <IonList>{recipes?.map((recipe) => <RecipesListItem key={recipe.id} item={recipe} />)}</IonList>;
};

export default RecipesInfiniteList;
