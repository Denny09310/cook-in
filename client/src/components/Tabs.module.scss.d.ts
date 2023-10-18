import globalClassNames from '../style.d';
declare const classNames: typeof globalClassNames & {
  readonly selected: 'selected';
  readonly 'tab-selected': 'tab-selected';
  readonly unselected: 'unselected';
};
export = classNames;
