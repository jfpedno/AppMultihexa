import React from 'react';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const TousLesObjectifs: React.FC = () => { 

  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton />
              </IonButtons>
              <IonTitle>Tous Les Objectifs</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <h2>ça fonctionne la page Tous Les Objectifs</h2>
        </IonContent>
    </IonPage>
  );
};

export default TousLesObjectifs;