import { IonButton, IonContent, IonPage, useIonRouter } from '@ionic/react';
import React, { useRef, useState } from 'react';
import { SwiperContainer } from 'swiper/element';
import { useEffectOnce, useLocalStorage } from 'usehooks-ts';

import introImage1 from '~/assets/on-boarding-1.png';
import introImage2 from '~/assets/on-boarding-2.png';
import introImage from '~/assets/on-boarding-3.png';
import IntroSlide from '~/components/IntroSlide';
import { INTRO_SEEN_KEY } from '~/constants/localStorage';

import styles from './Intro.module.scss';

const Intro: React.FC = () => {
  const router = useIonRouter();

  const [, setIntroSeen] = useLocalStorage(INTRO_SEEN_KEY, false);
  const [reachEnd, setReachEnd] = useState(false);
  const swiperContainerRef = useRef<SwiperContainer>(null);

  useEffectOnce(() => {
    const swiper = swiperContainerRef.current!;

    swiper.className = styles['slides-container'];
    swiper.pagination = {
      el: `.${styles['swiper-pagination']}`,
      renderBullet: (_index, className) =>
        `<span className="${className} ${styles['swiper-bullet']}"><span>`,
    };
    swiper.addEventListener('reachend', handleReachEnd);

    return () => {
      swiper.removeEventListener('reachend', handleReachEnd);
    };
  });

  const handleReachEnd = () => setReachEnd(true);

  const handleSkip = () => {
    setIntroSeen(true);
    router.push('/login', 'root', 'replace');
  };

  const handleNext = () => {
    if (reachEnd) {
      handleSkip();
      return;
    }

    const swiper = swiperContainerRef.current!;
    swiper.scrollBy({ behavior: 'smooth', left: 1 });
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
            caption="Recipes.Io helps you make any dish providing step by step instructions with the help of video clips"
          />
          <IntroSlide
            image={introImage}
            title="Cook with available ingredients"
            caption="Explore recipes by searching the ingredients available at home"
          />
          <div className={styles['swiper-pagination']}></div>
        </swiper-container>
        <div className={styles.footer}>
          <IonButton className={styles['skip-button']} fill="clear" onClick={handleSkip}>
            Skip
          </IonButton>

          <IonButton className={styles['next-button']} onClick={handleNext}>
            {reachEnd ? 'Finish' : 'Next'}
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Intro;
