import { IonButton, IonIcon, IonImg, IonItem, IonLabel, IonThumbnail } from '@ionic/react';
import { heart, heartOutline } from 'ionicons/icons';
import React from 'react';
import { useToggle } from 'react-use';

import styles from './RecipesListItem.module.scss';
import { GetRecipesResponseRecipe } from '~/app/services/recipes';

interface Props {
  item: GetRecipesResponseRecipe;
}

const RecipeListItem: React.FC<Props> = ({ item: { id, image, title } }) => {
  const [favourite, setFavourite] = useToggle(false);

  return (
    <IonItem>
      <IonThumbnail slot="start">
        <IonImg src={image} alt={title} />
      </IonThumbnail>
      <IonLabel>
        <h2>{title}</h2>
      </IonLabel>
      <IonButton
        className={styles['favourite-button']}
        slot="end"
        fill="clear"
        onClick={() => setFavourite(!favourite)}
      >
        <IonIcon slot="icon-only" color="danger" icon={favourite ? heart : heartOutline} />
      </IonButton>
    </IonItem>
  );
};

export default RecipeListItem;
