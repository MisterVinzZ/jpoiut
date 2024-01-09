import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MonApiService } from '../../services/mon-api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-page-connexion',
  templateUrl: './page-connexion.component.html',
  styleUrls: ['./page-connexion.component.css']
})
export class PageConnexionComponent {
  credentials = { mail: '', password: '' };

  constructor(private monApiService: MonApiService, private router: Router) {}

  onSubmit(): void {
    console.log('Formulaire soumis', this.credentials);
    this.monApiService.login(this.credentials).subscribe(
      (response) => {
        console.log('Connexion réussie', response);
        this.router.navigate(['/page-accueil']);
      },
      (error: HttpErrorResponse) => {
        console.error('Erreur de connexion', error);
      }
    );
  }
}
