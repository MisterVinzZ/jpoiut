import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-accueil-component2',
  templateUrl: './accueil-component2.component.html',
  styleUrls: ['./accueil-component2.component.css']
})
export class AccueilComponent2Component {
  constructor(private router: Router) {}
  redirigerVersPageRessources() {
    this.router.navigate(['/page-ressources']);
  }
}
