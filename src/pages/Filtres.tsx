import React from "react";
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";


const Filtres: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Filtres</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2>ça fonctionne la page des Filtres</h2>
            </IonContent>
        </IonPage>
    );
}
export default Filtres;