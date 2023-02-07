import React, { useRef, useState } from 'react';
import { IonContent, IonHeader, IonTitle, IonPage, IonToolbar, IonButtons, IonBackButton, IonButton, IonList, IonIcon, IonFabButton, IonFab, isPlatform, IonAlert, IonToast} from '@ionic/react';

import {useParams} from 'react-router-dom';
import { COURS_DATA } from './ListeDesCours';
import { addOutline, create, trash } from 'ionicons/icons';
import ModifierModal from '../components/ModifierModal';
import ObjectifModifiable from '../components/ObjectifModifiable';

const CoursObjectifs: React.FC = () => {  

    const [debuterSupprimer, setDebuterSupprimer] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [debuterModifier, setDebuterModifier] = useState(false);
    const [objectifSelectionne, setObjectifSelectionne] = useState<any>();

    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

    const coursChoisiId = useParams<{coursId: string}>().coursId;
    const coursChoisi = COURS_DATA.find(c => c.id === coursChoisiId);

    const debuterSupprimerObjectifHandler = () => {
        setDebuterSupprimer(true);
        //console.log("Debuter la suppression");
    };

    const supprimerObjectifHandler = () => {
        setDebuterSupprimer(false);
        //console.log("Annuller la suppression");
        setToastMessage("Objectif supprimé");
    };
/*
    const annullerSupprimerObjectifHandler = () => {
        setDebuterSupprimer(false);
        //console.log("Objectif supprimé");
        setToastMessage("Objectif supprimé");
    };    
*/
    const debuterModifierObjectifHandler = (objectifId: string, event: React.MouseEvent) => {
        event.stopPropagation();
        const objectif = coursChoisi?.objectifs.find(o => o.id === objectifId);
        slidingOptionsRef.current?.closeOpened();
        if(!objectif) {
            return;
        }
        setDebuterModifier(true);
        //console.log("Débuter modifier l'objectif");
        setObjectifSelectionne(objectif);
    };

    const annullerModifierObjectifHandler = () => {
        setDebuterModifier(false);
        //console.log("Objectif supprimé");
        setObjectifSelectionne(null);
        setToastMessage("Objectif préservé");
    };

    const debuterAjouterObjectifHandler = () => {
        setDebuterModifier(true);
        setObjectifSelectionne(null);
        console.log("Débuter ajouter l'objectif");
    };

    return(
        <React.Fragment>
            <ModifierModal
                show={debuterModifier}
                onCancel={annullerModifierObjectifHandler}
                modifierObjectif={objectifSelectionne}
            />
            <IonToast
                isOpen={!!toastMessage} // convert to boolean si string vide = false et si string non vide = true
                message={toastMessage}
                duration={2000}
                onDidDismiss={() => {
                    setToastMessage('')
                }}
            />
            <IonAlert
                isOpen={debuterSupprimer}
                header="Confirmation suppression"
                message="Êtes-vous certain de supprimer l'objectif ?"
                buttons={[
                    {
                        text: 'Annuler',
                        role: 'cancel',
                        handler: () => {
                            setDebuterSupprimer(false);
                        }
                    },
                    {
                        text: 'Supprimer',
                        handler: supprimerObjectifHandler
                    }
                ]}
            />
            <IonPage>
            <IonHeader>                       
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/" />
                        </IonButtons>
                        <IonTitle>
                            { coursChoisi ? coursChoisi.titre : "Aucun cours trouvé!" }
                        </IonTitle>
                        {!isPlatform('ios') && (
                            <IonButtons slot="end">
                                <IonButton onClick={debuterAjouterObjectifHandler}>
                                    <IonIcon slot="icon-only" icon={addOutline}/>
                                </IonButton>
                            </IonButtons>
                        )}
                    </IonToolbar>
            </IonHeader>
            <IonContent>
                    { coursChoisi && <IonList>
                        {coursChoisi.objectifs.map(objectif => (  
                            <ObjectifModifiable 
                            key={objectif.id}
                            slidingRef={slidingOptionsRef}
                            debuterModification={debuterModifierObjectifHandler.bind(null, objectif.id)}
                            debuterSuppression={debuterSupprimerObjectifHandler}
                            text={objectif.texte}
                            />
                        ))}
                    </IonList>}
                    {!isPlatform('android') && (
                    <IonFab horizontal="end" vertical="bottom">
                        <IonFabButton color="secondary" onClick={debuterAjouterObjectifHandler}>
                            <IonIcon icon={addOutline} />
                        </IonFabButton>
                    </IonFab>
                    )}
                </IonContent>
        </IonPage>
        </React.Fragment>
    );
};

export default CoursObjectifs;