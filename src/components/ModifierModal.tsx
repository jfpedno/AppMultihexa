import React from "react";
import { IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonCol, IonRow, IonItem, IonLabel, IonInput } from "@ionic/react";
const modifierModal: React.FC<{
    show: boolean; 
    onCancel: () => void;
    modifierObjectif?: {id: string; text: string} | null;
}> = props => {
    return (
        <IonModal isOpen={props.show}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>{props.modifierObjectif ? "Modifier" : "Ajouter"}un objectif</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Votre objectif</IonLabel>
                                    <IonInput type="text" value={props.modifierObjectif?.text}/>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-text-center">
                            <IonCol>
                                <IonButton color="primary">Sauvegarder</IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton color="dark" onClick={props.onCancel}>Annuler</IonButton>
                            </IonCol>
                        </IonRow>                            
                    </IonGrid>
                </IonContent>
            </IonModal>
    );
};
export default modifierModal;

