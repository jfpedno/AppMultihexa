import React from 'react';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { COURS_DATA } from './ListeDesCours';


const TousLesObjectifs: React.FC = () => {

  const objectifs = COURS_DATA.map(cours => {
    return cours.objectifs.map(objectif => {
      return { ...objectif, coursTitre: cours.titre };
    });
  }).reduce((objectifsArray, nestedObjectifs) => {
    let objectifsArrayAJour = objectifsArray;
    for (const objectif of nestedObjectifs) {
        objectifsArrayAJour = objectifsArrayAJour.concat(objectif);
    }
    return objectifsArrayAJour;
    }, []);

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
          <IonList>
            {objectifs.map(objectif => (
              <IonItem key={objectif.id}>
                <IonLabel>
                  <h2>{objectif.texte}</h2>
                  <p>{objectif.coursTitre}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
    </IonPage>
  );
};

export default TousLesObjectifs;