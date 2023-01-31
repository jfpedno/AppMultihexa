import { Redirect, Route } from 'react-router-dom';
import { 
  IonApp, 
  IonHeader, 
  IonIcon, 
  IonLabel, 
  IonMenu, 
  IonRouterOutlet, 
  setupIonicReact, 
  IonToolbar, 
  IonTitle, 
  IonList, 
  IonItem, 
  IonContent, 
  IonMenuToggle 
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';

import Filtres from './pages/Filtres';
import CoursTabs from './pages/CoursTabs';

import {list, options} from 'ionicons/icons';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/theme.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Cours Objectifs</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
                <IonItem button routerLink="/cours/tous-objectifs" routerDirection="none">           
                  <IonIcon slot="start" icon={list} />
                  <IonLabel>Tous les objectifs</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem button routerLink="/filtres" routerDirection="none">           
                  <IonIcon slot="start" icon={options} />
                  <IonLabel>Filtres</IonLabel>
                </IonItem>
              </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="main">
        <Route path="/filtres" exact>
          <Filtres />
        </Route>
        <Route path="/cours">
          <CoursTabs />
        </Route>
        <Redirect path="/" to="/cours/liste" exact/>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
