import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

export const COURS_DATA = [
    { 
        id: 'M14', 
        titre: 'Mobile 1 avec Kotlin et Android Studio',
        description: 'Description du cours M14',
        image: 'https://pluspng.com/img-png/kotlin-logo-png-kotlin-logo-icon-of-flat-style-available-in-svg-png-eps-ai-512x512.png',
        inscription: new Date('05/18/2023'),
        objectifs: [
            {id: 'M14O1', texte: 'Débuter avec Android studio'},
            {id: 'M14O2', texte: 'Introduction à Kotlin'},
            {id: 'M14O3', texte: 'Développer une application mobile'},
        ]
    },
    {
        id: 'M24', 
        titre: 'Mobile 2 avec Ionic et React',
        description: 'Description du cours M24',
        image: 'http://angular.github.io/react-native-renderer/assets/react.png',
        inscription: new Date('07/10/2023'),
        objectifs: [
            {id: 'M24O1', texte: 'Débuter avec Ionic'},
            {id: 'M24O2', texte: 'Introduction à React'},
            {id: 'M24O3', texte: 'Développer une application mobile'},
        ]
    },
    { 
        id: 'W34', 
        titre: 'PHP E-Commerce avec boutique en ligne',
        description: 'Description du cours W34',
        image: 'https://pngimg.com/uploads/php/php_PNG25.png',
        inscription: new Date('01/26/2023'),
        objectifs: [
            {id: 'W34O1', texte: 'Débuter avec VS Code'},
            {id: 'W34O2', texte: 'Introduction à PHP'},
            {id: 'W34O3', texte: 'Développer une application e-commerce'},
        ]
    },
    
];

const ListeDesCours: React.FC = () => { 
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Liste des cours</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonGrid>
                {COURS_DATA.map((cours) => (
                    <IonRow key={cours.id}>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader className='ion-text-center'>
                                    <IonCardTitle>{cours.titre}</IonCardTitle>
                                    <IonCardSubtitle>
                                        Inscrition le&nbsp;
                                        {cours.inscription.toLocaleDateString('fr-CA', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: '2-digit'
                                            })}
                                    </IonCardSubtitle>
                                </IonCardHeader>
                                <IonCardContent className='ion-text-center'>
                                    <IonImg src={cours.image} />
                                    <p>{cours.description}</p>
                                    <IonButton routerLink={`/cours/${cours.id}`}>
                                        Voir les objectifs
                                    </IonButton>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                ))}
            </IonGrid>
        </IonContent>
    </IonPage>
  );
};

export default ListeDesCours;