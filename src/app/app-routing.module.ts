import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageJPOComponent } from './component/page-jpo/page-jpo.component';
import { PageAcceuilComponent } from './component/page-accueil/page-acceuil.component';
import { PageAdminEditionComponent } from './component/page-admin-edition/page-admin-edition.component';
import { PageAdminStatsComponent } from './component/page-admin-stats/page-admin-stats.component';
import { PageConnexionComponent } from './component/page-connexion/page-connexion.component';
import { PageContactComponent } from './component/page-contact/page-contact.component';
import { PageFormationComponent } from './component/page-formation/page-formation.component';
import { PageQuestionnaireComponent } from './component/page-questionnaire/page-questionnaire.component';
import { PageQuizzComponent } from './component/page-quizz/page-quizz.component';
import { PageQuizzResultatComponent } from './component/page-quizz-resultat/page-quizz-resultat.component';
import { PageRessourcesComponent } from './component/page-ressources/page-ressources.component';
import { PageVisiteComponent } from './component/page-visite/page-visite.component';
import { PageAdminComponent } from './component/page-admin/page-admin.component';

const routes: Routes = [
  { path: 'administration', component: PageAdminComponent},
  { path: '', component: PageAcceuilComponent },
  { path: 'page-admin-edition', component: PageAdminEditionComponent },
  { path: 'page-admin-stats', component: PageAdminStatsComponent },
  { path: 'page-connexion', component: PageConnexionComponent },
  { path: 'page-contact', component: PageContactComponent },
  { path: 'page-formation', component: PageFormationComponent },
  { path: 'page-jpo', component: PageJPOComponent },
  { path: 'page-questionnaire', component: PageQuestionnaireComponent },
  { path: 'page-quizz', component: PageQuizzComponent },
  { path: 'page-quizz-resultat', component: PageQuizzResultatComponent },
  { path: 'page-ressources', component: PageRessourcesComponent },
  { path: 'page-visite', component: PageVisiteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
