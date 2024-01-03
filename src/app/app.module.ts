import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BackgroundImageComponent } from './component/background-image/background-image.component';
import { TextOnBackgroundImageComponent } from './component/text-on-background-image/text-on-background-image.component';
import { PageJPOComponent } from './component/page-jpo/page-jpo.component';
import { PageAcceuilComponent } from './component/page-accueil/page-acceuil.component';
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
import { FondFlouComponent } from './component/fond-flou/fond-flou.component';
import { ImageADroiteComponent } from './component/image-a-droite/image-a-droite.component';
import { FondBleuFonceComponent } from './component/fond-bleu-fonce/fond-bleu-fonce.component';
import { ImageAGaucheComponent } from './component/image-a-gauche/image-a-gauche.component';
import { ParagrapheCentreComponent } from './component/paragraphe-centre/paragraphe-centre.component';
import { ImageADroite2Component } from './component/image-a-droite2/image-a-droite2.component';
import { FooterComponent } from './component/footer/footer.component';

import { RessourcesComponent } from './component/ressources/ressources.component';
import { HautRessources1Component } from './component/haut-ressources1/haut-ressources1.component';
import { VracRessources1Component } from './component/vrac-ressources1/vrac-ressources1.component';
import { UniteRessources1Component } from './component/unite-ressources1/unite-ressources1.component';
import { ProjetRessources1Component } from './component/projet-ressources1/projet-ressources1.component';

import { AccueilComponent1Component } from './component/accueil-component1/accueil-component1.component';
import { AccueilComponent2Component } from './component/accueil-component2/accueil-component2.component';
import { AccueilComponent3Component } from './component/accueil-component3/accueil-component3.component';
import { AccueilComponent4Component } from './component/accueil-component4/accueil-component4.component';
import { AccueilComponent5Component } from './component/accueil-component5/accueil-component5.component';
import { AccueilComponentHeaderComponent } from './component/accueil-component-header/accueil-component-header.component';
import { WebglComponent } from './component/webgl/webgl.component';
import { PageAdminComponent } from './component/page-admin/page-admin.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';


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
    PageContactComponent,
    FondFlouComponent,
    ImageADroiteComponent,
    FondBleuFonceComponent,
    ImageAGaucheComponent,
    ParagrapheCentreComponent,
    ImageADroite2Component,
    FooterComponent,

    RessourcesComponent,
HautRessources1Component,
VracRessources1Component,
UniteRessources1Component,
ProjetRessources1Component,

    AccueilComponent1Component,
    AccueilComponent2Component,
    AccueilComponent3Component,
    AccueilComponent4Component,
    AccueilComponent5Component,
    AccueilComponentHeaderComponent,
    WebglComponent,
    PageAdminComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
