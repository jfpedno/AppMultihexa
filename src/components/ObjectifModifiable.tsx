import { IonItemSliding, IonItemOptions, IonItemOption, IonIcon, IonItem, IonLabel } from '@ionic/react';
import { trash, create } from 'ionicons/icons';
import React from 'react';

const ObjectifModifiable: React.FC<{
    slidingRef: React.Ref<HTMLIonItemSlidingElement>;
    debuterSuppression:() => void;
    debuterModification: (event: React.MouseEvent) => void;
    text : string;
}> = props => {
    return (
        <React.Fragment>
            <IonItemSliding ref={props.slidingRef}>
                {/*slide côté gauche*/} 
                <IonItemOptions side="start">
                    <IonItemOption onClick={props.debuterSuppression} color="danger">
                        <IonIcon slot="icon-only" icon={trash} />
                    </IonItemOption>
                </IonItemOptions>                                               
                <IonItem lines="full">
                    <IonLabel>{props.text}</IonLabel>
                </IonItem>

                {/*slide côté droit*/} 
                <IonItemOptions side="end">
                    <IonItemOption slot="icon-only" onClick={props.debuterModification}>
                        <IonIcon slot="icon-only" icon={create}/>
                    </IonItemOption>
                </IonItemOptions>
            </IonItemSliding>
        </React.Fragment>
    );
};

export default ObjectifModifiable;