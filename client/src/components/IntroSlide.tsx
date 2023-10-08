import { IonImg, IonText } from '@ionic/react';
import React from 'react';

interface Props {
  image: string;
  title: string;
  caption: string;
}

const IntroSlide: React.FC<Props> = ({ caption, image, title }) => {
  return (
    <swiper-slide>
      <div className="ion-padding-end">
        <IonImg src={image} alt={title} />
        <IonText>
          <h3 className="ion-text-color">{title}</h3>
          <p className="ion-text-secondary-color ion-margin-top">{caption}</p>
        </IonText>
      </div>
    </swiper-slide>
  );
};

export default IntroSlide;
