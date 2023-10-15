import globalClassNames from '../style.d';
declare const classNames: typeof globalClassNames & {
  readonly title: 'title';
  readonly 'highlight-primary': 'highlight-primary';
};
export = classNames;
