import type { ToastOptions as ToastOptionsPrimitive } from '@ionic/react';
import { alertCircleOutline, checkmarkCircleOutline, informationCircleOutline, warningOutline } from 'ionicons/icons';

import { dismiss, present } from './overlay';

type ToastOptions = { message: string; duration?: number } | ToastOptionsPrimitive;

type ToastVariantOption = Omit<ToastOptions, 'color' | 'icon'>;

const events = {
  didPresentEventType: 'ionToastDidPresent',
  didDismissEventType: 'ionToastDidDismiss',
};

/**
 * Present a toast.
 * @param opts - Options for configuring the toast.
 * @returns A promise that resolves with the toast's ID.
 */
const toast = (opts: ToastOptions): Promise<string> => present('ion-toast', opts, events);

/**
 * Dismiss a toast.
 * @param id - The ID of the toast to dismiss.
 * @param data - Data to send when dismissing the toast.
 * @param role - The role of the dismissal.
 * @returns A promise that resolves with the result of the dismissal.
 */
toast.dismiss = (id: string, data?: any, role?: string): Promise<any> =>
  dismiss<HTMLIonToastElement>('ion-toast', id, (element) => element.dismiss(data, role));

/**
 * Present a success toast.
 * @param opts - Options for configuring the success toast.
 * @returns A promise that resolves with the toast's ID.
 */
toast.success = (opts: ToastVariantOption): Promise<string> =>
  toast({ ...opts, color: 'success', icon: checkmarkCircleOutline });

/**
 * Present an error toast.
 * @param opts - Options for configuring the error toast.
 * @returns A promise that resolves with the toast's ID.
 */
toast.error = (opts: ToastVariantOption): Promise<string> =>
  toast({ ...opts, color: 'danger', icon: alertCircleOutline });

/**
 * Present a warning toast.
 * @param opts - Options for configuring the warning toast.
 * @returns A promise that resolves with the toast's ID.
 */
toast.warning = (opts: ToastVariantOption): Promise<string> =>
  toast({ ...opts, color: 'warning', icon: warningOutline });

/**
 * Present an info toast.
 * @param opts - Options for configuring the info toast.
 * @returns A promise that resolves with the toast's ID.
 */
toast.info = (opts: ToastVariantOption): Promise<string> =>
  toast({ ...opts, color: 'secondary', icon: informationCircleOutline });

export default toast;
