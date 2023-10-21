import { IonButton, IonContent, IonPage, useIonRouter } from '@ionic/react';
import React, { useRef, useState } from 'react';
import { useEffectOnce, useLocalStorage } from 'react-use';
import { SwiperContainer } from 'swiper/element';

import introImage1 from '@/assets/on-boarding-1.png';
import introImage2 from '@/assets/on-boarding-2.png';
import introImage from '@/assets/on-boarding-3.png';
import IntroSlide from '@/components/IntroSlide';
import styles from '@/theme/Intro.module.scss';
import { INTRO_SEEN_KEY } from '@/utils/constants';

const Intro: React.FC = () => {
  const router = useIonRouter();

  const [, setIntroSeen] = useLocalStorage(INTRO_SEEN_KEY, false);

  const [reachEnd, setReachEnd] = useState(false);
  const swiperContainerRef = useRef<SwiperContainer>(null);

  useEffectOnce(() => {
    const swiper = swiperContainerRef.current!;

    swiper.className = styles['slides-container'];
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
        <swiper-container ref={swiperContainerRef}>
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
        <div className={styles.footer}>
          <IonButton className={styles['skip-button']} fill="clear" onClick={handleFinish}>
            Skip
          </IonButton>

          {!reachEnd ? (
            <IonButton className={styles['next-button']} onClick={handleNext}>
              Next
            </IonButton>
          ) : (
            <IonButton className={styles['next-button']} onClick={handleFinish}>
              Finish
            </IonButton>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Intro;
