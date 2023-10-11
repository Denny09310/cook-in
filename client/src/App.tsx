import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import { useStorage } from '~/app/hooks';
import { INTRO_SEEN_KEY } from '~/constants/localStorage';
import { useAuth } from '~/contexts/AuthContext';
import Home from '~/pages/Home';
import Intro from '~/pages/Intro';
import Login from '~/pages/Login';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';

/* Theme variables */
import '~/theme/variables.css';

setupIonicReact();

const App = () => {
  const { isAuthenticated } = useAuth();
  const {
    loading,
    state: [introSeen],
  } = useStorage(INTRO_SEEN_KEY, false);

  const redirectUrl = introSeen ? (isAuthenticated ? '/home' : '/login') : '/intro';

  if (loading) return null;

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact />

          <Route path="/login" component={Login} exact />
          <Route path="/intro" component={Intro} exact />

          <Redirect from="/" to={redirectUrl} exact />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
