import React from 'react';
import { IonContent, IonHeader, IonTitle, IonPage, IonToolbar, IonButtons, IonBackButton, IonButton, IonItem, IonList, IonLabel, IonIcon, IonItemSliding, IonItemOption, IonItemOptions, IonFabButton, IonFab, isPlatform} from '@ionic/react';

import {useParams} from 'react-router-dom';
import { COURS_DATA } from './ListeDesCours';
import { addOutline, create, trash } from 'ionicons/icons';

const CoursObjectifs: React.FC = () => {  

    const coursChoisiId = useParams<{coursId: string}>().coursId;
    const coursChoisi = COURS_DATA.find(c => c.id === coursChoisiId);

    const supprimerObjectifHandler = () => {
        console.log("Supprimer l'objectif");
    };
    const modifierObjectifHandler = (event: React.MouseEvent) => {
        event.stopPropagation();
        console.log("Modifier l'objectif");
    };
    const ajouterObjectifHandler = () => {
        console.log("Ajouter l'objectif");
    };
    return(
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
                            <IonButton onClick={ajouterObjectifHandler}>
                                <IonIcon slot="icon-only" icon={addOutline}/>
                            </IonButton>
                        </IonButtons>
                    )}
                </IonToolbar>
           </IonHeader>
           <IonContent>
                { coursChoisi && <IonList>
                    {coursChoisi.objectifs.map(objectif => (  
                        <IonItemSliding key={objectif.id}>
                            {/*slide côté gauche*/} 
                            <IonItemOptions side="start">
                                <IonItemOption onClick={supprimerObjectifHandler} color="danger">
                                    <IonIcon icon={trash} />
                                </IonItemOption>
                            </IonItemOptions>                                               
                            <IonItem lines="full"
                                    //key={objectif.id} 
                                    //button                                     
                                    //onClick={supprimerItemHandler}
                                >
                                <IonLabel>{objectif.texte}</IonLabel>

                                    {/*<IonButton slot="end" fill="clear" color="dark" onClick={modifierItemHandler}>
                                        <IonIcon slot="icon-only" icon={create} />
                            </IonButton>*/}
                            </IonItem>

                            {/*slide côté droit*/} 
                            <IonItemOptions side="end">
                                <IonItemOption onClick={modifierObjectifHandler}>
                                    <IonIcon icon={create} />
                                </IonItemOption>
                            </IonItemOptions>
                        </IonItemSliding>
                    ))}
                </IonList>}
                {!isPlatform('android') && (
                <IonFab horizontal="end" vertical="bottom">
                    <IonFabButton color="secondary" onClick={ajouterObjectifHandler}>
                        <IonIcon icon={addOutline} />
                    </IonFabButton>
                </IonFab>
                )}
            </IonContent>
        </IonPage>
    );
};

export default CoursObjectifs;