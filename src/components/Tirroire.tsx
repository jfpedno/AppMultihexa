import React from 'react';
import {list, options} from 'ionicons/icons';
import { IonApp, IonHeader, IonIcon, IonLabel, IonMenu, IonToolbar, IonTitle, IonList, IonItem, IonContent, IonMenuToggle } from '@ionic/react';

const SideDrawer: React.FC = () => {
  return (
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
  );
};