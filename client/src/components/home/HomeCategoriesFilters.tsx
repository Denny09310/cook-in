import styled from '@emotion/styled';
import { IonChip, IonItem, IonLabel } from '@ionic/react';
import { Fragment, useEffect, useState } from 'react';

import { useGetCategoriesQuery } from '@/app/services/categories';

const CategoriesFilters = () => {
  const { data } = useGetCategoriesQuery();
  const [selectedCategory, setSelectedCategory] = useState<string>();

  useEffect(() => {
    if (!data?.categories) return;
    setSelectedCategory(data.categories.at(0)?.name);
  }, [data]);

  return (
    <Fragment>
      <Container>
        {data?.categories?.map(({ id, name }) => (
          <IonChip
            key={id}
            color={selectedCategory === name ? 'primary' : 'secondary'}
            onClick={() => setSelectedCategory(name)}
          >
            <IonLabel>{name}</IonLabel>
          </IonChip>
        ))}
      </Container>
      <IonItem lines="none" routerLink="#" detail>
        <IonLabel>
          <h2>All Recipe</h2>
        </IonLabel>
      </IonItem>
    </Fragment>
  );
};

export default CategoriesFilters;

const Container = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding: 0 0.5rem;

  & ion-chip {
    display: flex;
    justify-content: center;
  }
`;
