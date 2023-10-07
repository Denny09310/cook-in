import { createRoot } from 'react-dom/client';
import { Provider as ReduxStoreProvider } from 'react-redux';

import App from '~/app';
import { store } from '~/app/store';
import AuthProvider from './components/providers/AuthProvider';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <ReduxStoreProvider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ReduxStoreProvider>,
);
