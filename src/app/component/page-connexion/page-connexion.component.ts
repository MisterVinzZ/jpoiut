import { Component } from '@angular/core';
import { MonApiService } from '../../services/mon-api.service';

@Component({
  selector: 'app-page-connexion',
  templateUrl: './page-connexion.component.html',
  styleUrls: ['./page-connexion.component.css']
})
export class PageConnexionComponent {
  credentials = { mail: '', password: '' };

  constructor(private monApiService: MonApiService) {}

  onSubmit() : void{
    console.log('Formulaire soumis');
    this.monApiService.login(this.credentials).subscribe(
      (response) => {
        console.log('Connexion réussie', response);
      },
      (error) => {
        console.error('Erreur de connexion', error);
      }
    );
  }
}
