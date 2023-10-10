import { IonToast } from '@ionic/react';
import { refresh } from 'ionicons/icons';
import { useRegisterSW } from 'virtual:pwa-register/react';

const intervalMS = 60 * 60 * 1000;

const AppUpdater = () => {
  const {
    updateServiceWorker,
    needRefresh: [needRefresh],
  } = useRegisterSW({
    immediate: true,
    onRegisteredSW(swUrl, r) {
      r &&
        setInterval(async () => {
          if (!(!r.installing && navigator)) return;

          if ('connection' in navigator && !navigator.onLine) return;

          const resp = await fetch(swUrl, {
            cache: 'no-store',
            headers: {
              cache: 'no-store',
              'cache-control': 'no-cache',
            },
          });

          if (resp?.status === 200) await r.update();
        }, intervalMS);
    },
  });

  return needRefresh ? (
    <IonToast
      icon={refresh}
      message="There's an update!"
      buttons={[{ text: 'Reload', handler: updateServiceWorker }]}
      isOpen
    />
  ) : null;
};

export default AppUpdater;
