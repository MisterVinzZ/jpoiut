import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil-component4',
  templateUrl: './accueil-component4.component.html',
  styleUrls: ['./accueil-component4.component.css']
})
export class AccueilComponent4Component {
  constructor(private router: Router) {}

  redirigerVersPageFormation() {
    this.router.navigate(['/page-formation']);
  }
  redirigerVersPageRessources() {
    this.router.navigate(['/page-ressources']);
  }
}
