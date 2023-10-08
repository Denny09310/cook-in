import { createRoot } from 'react-dom/client';
import { Provider as ReduxStoreProvider } from 'react-redux';
import { register } from 'swiper/element/bundle';

import App from '~/app';
import { store } from '~/app/store';
import AuthProvider from '~/components/providers/AuthProvider';
import ThemeProvider from '~/components/providers/ThemeProvider';

register();

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <ReduxStoreProvider store={store}>
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </ReduxStoreProvider>,
);
