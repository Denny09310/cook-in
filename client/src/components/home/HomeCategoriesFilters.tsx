import { useGetCategoriesQuery } from '@/app/services/categories';
import { IonChip, IonItem, IonLabel, IonText } from '@ionic/react';
import { Fragment, useEffect, useState } from 'react';

import styles from '@/theme/HomeCategoriesFilter.module.scss';

const CategoriesFilters = () => {
  const { data } = useGetCategoriesQuery();
  const [selectedCategory, setSelectedCategory] = useState<string>();

  useEffect(() => {
    if (!data?.categories) return;
    setSelectedCategory(data.categories.at(0)?.name);
  }, [data]);

  return (
    <Fragment>
      <div className={styles.container}>
        {data?.categories?.map(({ id, name }) => (
          <IonChip
            key={id}
            color={selectedCategory === name ? 'primary' : 'tertiary'}
            onClick={() => setSelectedCategory(name)}
          >
            <IonText>{name}</IonText>
          </IonChip>
        ))}
      </div>
      <IonItem lines="none" routerLink="#" detail>
        <IonLabel>
          <h2>All Recipe</h2>
        </IonLabel>
      </IonItem>
    </Fragment>
  );
};

export default CategoriesFilters;
