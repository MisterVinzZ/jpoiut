import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { FormulaireContactComponent } from './component/formulaire-contact/formulaire-contact.component';
import { BanniereContactComponent } from './component/banniere-contact/banniere-contact.component';
import { TexteContactComponent } from './component/texte-contact/texte-contact.component';
import { PageRessources2Component } from './component/page-ressources2/page-ressources2.component';
import { ProjetRessources2Component } from './component/projet-ressources2/projet-ressources2.component';
import { VracRessources2Component } from './component/vrac-ressources2/vrac-ressources2.component';
import { UniteRessources2Component } from './component/unite-ressources2/unite-ressources2.component';
import { HautRessources2Component } from './component/haut-ressources2/haut-ressources2.component';
import { PageRessources3Component } from './component/page-ressources3/page-ressources3.component';
import { ProjetRessources3Component } from './component/projet-ressources3/projet-ressources3.component';
import { VracRessources3Component } from './component/vrac-ressources3/vrac-ressources3.component';
import { UniteRessources3Component } from './component/unite-ressources3/unite-ressources3.component';
import { HautRessources3Component } from './component/haut-ressources3/haut-ressources3.component';


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
    FormulaireContactComponent,
    BanniereContactComponent,
    TexteContactComponent,
    PageRessources2Component,
    ProjetRessources2Component,
    VracRessources2Component,
    UniteRessources2Component,
    HautRessources2Component,
    PageRessources3Component,
    ProjetRessources3Component,
    VracRessources3Component,
    UniteRessources3Component,
    HautRessources3Component,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
