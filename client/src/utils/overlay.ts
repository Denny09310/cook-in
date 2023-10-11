type PresentElementEvents = {
  didPresentEventType: string;
  didDismissEventType: string;
};

/**
 * Present an Ionic component.
 * @param tag - The HTML tag name of the Ionic component.
 * @param opts - Options for configuring the component.
 * @param events - Events to listen for when presenting/dismissing the component.
 * @returns A promise that resolves with the component's ID.
 */
export const present = <TElement extends HTMLElement>(
  tag: string,
  opts: Record<string, any>,
  events: PresentElementEvents,
): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const app = document.body.querySelector('ion-app');

    if (!app) {
      reject(new Error("Element 'ion-app' not found"));
      return;
    }

    const { didDismissEventType, didPresentEventType } = events;
    const element = Object.assign(document.createElement(tag) as TElement, opts);

    element.addEventListener(didDismissEventType, () => {
      requestAnimationFrame(() => app.removeChild(element));
    });

    app.appendChild(element);

    requestAnimationFrame(() => {
      element.present();
      element.addEventListener(didPresentEventType, () => resolve(element.id));
    });
  });
};

/**
 * Dismiss an Ionic component.
 * @param tag - The HTML tag name of the Ionic component.
 * @param id - The ID of the component to dismiss.
 * @param callback - A callback function to perform component dismissal.
 * @returns A promise that resolves with the result of the dismissal.
 */
export const dismiss = <TElement extends HTMLElement>(
  tag: string,
  id: string,
  callback: (element: TElement) => Promise<any>,
): Promise<any> => {
  const element = document.querySelector(`${tag}[id="${id}"]`) as TElement;
  if (element) {
    return callback(element);
  }
  return Promise.reject(new Error(`Element '${tag}' with ID '${id}' not found`));
};
