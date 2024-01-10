import { Component } from '@angular/core';
import { MonApiService } from '../../services/mon-api.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-page-admin-edition',
  templateUrl: './page-admin-edition.component.html',
  styleUrls: ['./page-admin-edition.component.css']
})
export class PageAdminEditionComponent implements OnInit {

  constructor(private monApiService: MonApiService, private router: Router) { }

  ngOnInit() {
    // Vérifier la session admin au chargement du composant
    this.checkAdminSession();
  }

  checkAdminSession() {
    this.monApiService.checkAdminSession().subscribe(
      response => {
        // Si la réponse est réussie, l'utilisateur est en session admin
        console.log(response);
      },
      error => {
        // Si la réponse est une erreur, rediriger vers la page de connexion ou effectuer une autre action
        console.error(error);
        this.router.navigate(['/page-connexion']);
      }
    );
  }
}