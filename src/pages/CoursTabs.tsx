import react from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { 
    IonIcon, 
    IonLabel,
    IonRouterOutlet, 
    IonTabBar, 
    IonTabButton, 
    IonTabs
} from '@ionic/react';

import {list, trophyOutline} from 'ionicons/icons';
import TousLesObjectifs from './TousLesObjectifs';
import ListeDesCours from './ListeDesCours';
import CoursObjectifs from './CoursObjectifs';

const CoursTabs: React.FC = () => { 
    return(

            <IonTabs> 

                <IonRouterOutlet>
                    <Redirect path="/cours" to="/cours/liste" exact/>
                    <Switch>
                        <Route path="/cours/liste" exact>   
                            <ListeDesCours />
                        </Route>
                        <Route path="/cours/tous-objectifs" exact>   
                            <TousLesObjectifs />
                        </Route>
                        <Route path="/cours/:coursId">   
                            <CoursObjectifs />
                        </Route>
                    </Switch>
                </IonRouterOutlet>

                <IonTabBar slot="bottom">                    
                    <IonTabButton tab='cours' href='/cours/liste'>
                        <IonIcon icon={trophyOutline} />
                        <IonLabel>Liste des cours</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab='tous-objectifs' href='/cours/tous-objectifs'>
                        <IonIcon icon={list} />
                        <IonLabel>Tous les objectifs</IonLabel>
                    </IonTabButton>
                </IonTabBar>

            </IonTabs>    
    );
}

export default CoursTabs;