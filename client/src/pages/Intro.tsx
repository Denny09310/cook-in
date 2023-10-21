import styled from '@emotion/styled';
import { IonButton, IonContent, IonPage, useIonRouter } from '@ionic/react';
import React, { useRef, useState } from 'react';
import { useEffectOnce, useLocalStorage } from 'react-use';
import { SwiperContainer } from 'swiper/element';

import introImage1 from '@/assets/on-boarding-1.png';
import introImage2 from '@/assets/on-boarding-2.png';
import introImage from '@/assets/on-boarding-3.png';
import IntroSlide from '@/components/IntroSlide';
import { INTRO_SEEN_KEY } from '@/utils/constants';

const Intro: React.FC = () => {
  const router = useIonRouter();

  const [, setIntroSeen] = useLocalStorage(INTRO_SEEN_KEY, false);

  const [reachEnd, setReachEnd] = useState(false);
  const swiperContainerRef = useRef<SwiperContainer>(null);

  useEffectOnce(() => {
    const swiper = swiperContainerRef.current!;

    swiper.pagination = {
      type: 'bullets',
    };

    swiper.addEventListener('reachend', handleReachEnd);

    return () => {
      swiper.removeEventListener('reachend', handleReachEnd);
    };
  });

  const handleReachEnd = () => setReachEnd(true);

  const handleFinish = () => {
    setIntroSeen(true);
    router.push('/login', 'forward', 'replace');
  };

  const handleNext = () => {
    const swiperEl = swiperContainerRef.current!;
    swiperEl.swiper.slideNext();
  };

  return (
    <IonPage>
      <IonContent>
        <swiper-container ref={swiperContainerRef} style={{ height: '90%', width: '100%' }}>
          <IntroSlide
            image={introImage1}
            title="Cook with available ingredients"
            caption="Explore recipes by searching the ingredients available at home"
          />
          <IntroSlide
            image={introImage2}
            title="Cooking made easier and fun"
            caption="CookIn helps you make any dish providing step by step instructions with the help of video clips"
          />
          <IntroSlide
            image={introImage}
            title="Cook with available ingredients"
            caption="Explore recipes by searching the ingredients available at home"
          />
        </swiper-container>
        <Footer>
          <IonButton className="skip-button" fill="clear" onClick={handleFinish}>
            Skip
          </IonButton>

          {!reachEnd ? (
            <IonButton className="next-button" onClick={handleNext}>
              Next
            </IonButton>
          ) : (
            <IonButton className="next-button" onClick={handleFinish}>
              Finish
            </IonButton>
          )}
        </Footer>
      </IonContent>
    </IonPage>
  );
};

export default Intro;

const Footer = styled.div`
  width: 100%;
  padding: 1rem;

  position: absolute;
  bottom: 1rem;

  display: inline-flex;
  justify-content: space-between;

  & ion-button {
    --padding-start: 2rem;
    --padding-end: 2rem;
    --padding-top: 1rem;
    --padding-bottom: 1rem;
  }

  & .skip-button {
    --color: var(--ion-text-color);
  }

  & .next-button {
    --box-shadow: none;
  }
`;
