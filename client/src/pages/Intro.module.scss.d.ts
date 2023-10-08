import globalClassNames from '../style.d';
declare const classNames: typeof globalClassNames & {
  readonly 'slides-container': 'slides-container';
  readonly 'swiper-pagination': 'swiper-pagination';
  readonly 'swiper-bullet': 'swiper-bullet';
  readonly footer: 'footer';
  readonly 'skip-button': 'skip-button';
  readonly 'next-button': 'next-button';
};
export = classNames;
