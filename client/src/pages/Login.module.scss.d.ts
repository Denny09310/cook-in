import globalClassNames from '../style.d';
declare const classNames: typeof globalClassNames & {
  readonly container: 'container';
  readonly logo: 'logo';
  readonly 'social-buttons-container': 'social-buttons-container';
  readonly 'terms-and-conditions': 'terms-and-conditions';
};
export = classNames;
