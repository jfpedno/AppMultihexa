import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const ListeDesCours: React.FC = () => { 

    const historique = useHistory();
    const handlerChangerPage = () => {
        historique.push('/cours-objectifs');
    }
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Liste des cours</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <h2>ça fonctionne la page Listes des cours</h2>
            <div><IonButton onClick={handlerChangerPage}>Cours objectifs</IonButton></div>
        </IonContent>
    </IonPage>
  );
};

export default ListeDesCours;