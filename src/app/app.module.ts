import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BackgroundImageComponent } from './component/background-image/background-image.component';
import { TextOnBackgroundImageComponent } from './component/text-on-background-image/text-on-background-image.component';
import { PageJPOComponent } from './component/page-jpo/page-jpo.component';
import { PageAcceuilComponent } from './component/page-acceuil/page-acceuil.component';
import { PageVisiteComponent } from './component/page-visite/page-visite.component';
import { PageRessourcesComponent } from './component/page-ressources/page-ressources.component';
import { PageQuestionnaireComponent } from './component/page-questionnaire/page-questionnaire.component';
import { PageAdminStatsComponent } from './component/page-admin-stats/page-admin-stats.component';
import { PageAdminEditionComponent } from './component/page-admin-edition/page-admin-edition.component';
import { PageFormationComponent } from './component/page-formation/page-formation.component';
import { PageQuizzResultatComponent } from './component/page-quizz-resultat/page-quizz-resultat.component';
import { PageQuizzComponent } from './component/page-quizz/page-quizz.component';
import { PageConnexionComponent } from './component/page-connexion/page-connexion.component';
import { PageContactComponent } from './component/page-contact/page-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BackgroundImageComponent,
    TextOnBackgroundImageComponent,
    PageJPOComponent,
    PageAcceuilComponent,
    PageVisiteComponent,
    PageRessourcesComponent,
    PageQuestionnaireComponent,
    PageAdminStatsComponent,
    PageAdminEditionComponent,
    PageFormationComponent,
    PageQuizzResultatComponent,
    PageQuizzComponent,
    PageConnexionComponent,
    PageContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
