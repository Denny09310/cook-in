import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/react';
import { heart, heartOutline } from 'ionicons/icons';
import React from 'react';

import { type GetRecipesResponseRecipe as Recipe } from '@/app/services/recipes';
import styles from '@/theme/HomeRecomendationCard.module.scss';
import { useBoolean } from 'react-use';

interface Props {
  recipe: Recipe;
}

const HomeRecomendationCard: React.FC<Props> = ({ recipe: { id, image, title } }) => {
  const [isFavourite, setIsFavourite] = useBoolean(false);

  const handleToggleFavourite = () => setIsFavourite(!isFavourite);

  return (
    <IonCard className={styles.card}>
      <img src={image} alt={title} />
      <IonCardHeader>
        <IonCardTitle className={styles['card-title']}>{title}</IonCardTitle>
      </IonCardHeader>

      <IonButton
        fill="clear"
        className={styles['card-favourite-button']}
        onClick={handleToggleFavourite}
      >
        <IonIcon slot="icon-only" icon={isFavourite ? heart : heartOutline} />
      </IonButton>
    </IonCard>
  );
};

export default HomeRecomendationCard;
