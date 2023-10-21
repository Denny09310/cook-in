import { IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import {
  bookmark,
  bookmarkOutline,
  home,
  homeOutline,
  person,
  personOutline,
  search,
  searchOutline,
} from 'ionicons/icons';
import React from 'react';
import { Redirect, Route, RouteComponentProps, match } from 'react-router';

import Account from '@/pages/Account';
import Favourites from '@/pages/Favourites';
import Home from '@/pages/Home';
import Search from '@/pages/Search';

const Tabs: React.FC<RouteComponentProps> = ({ match }) => {
  const routes = configureRoutes(match);

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path={routes.home.path} component={Home} exact />
        <Route path={routes.favourites.path} component={Favourites} exact />
        <Route path={routes.search.path} component={Search} exact />
        <Route path={routes.account.path} component={Account} exact />
        <Redirect from="/tabs" to={routes.home.path} exact />
      </IonRouterOutlet>

      <IonTabBar id="main-tabs" slot="bottom">
        {Object.values(routes).map(({ icon, iconActive, path, title }) => (
          <IonTabButton key={title} tab={title} href={path}>
            <IonIcon className="selected" icon={iconActive} />
            <IonIcon className="unselected" icon={icon} />
          </IonTabButton>
        ))}
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;

const configureRoutes = (match: match) => {
  const getPath = (path: string) => match.url + path;

  return {
    home: {
      path: getPath('/home'),
      icon: homeOutline,
      iconActive: home,
      title: 'Home',
    },
    favourites: {
      path: getPath('/favourites'),
      icon: bookmarkOutline,
      iconActive: bookmark,
      title: 'Favourites',
    },
    search: {
      path: getPath('/search'),
      icon: searchOutline,
      iconActive: search,
      title: 'Search',
    },
    account: {
      path: getPath('/account'),
      icon: personOutline,
      iconActive: person,
      title: 'Account',
    },
  };
};
