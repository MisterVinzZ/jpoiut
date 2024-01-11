import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Answer } from 'src/app/interface/answer';
import { MonApiService } from '../../services/mon-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-admin-stats',
  templateUrl: './page-admin-stats.component.html',
  styleUrls: ['./page-admin-stats.component.css']
})
export class PageAdminStatsComponent {
  constructor(private monApiService: MonApiService, private router: Router) {}

  ngOnInit(): void {
    // this.checkAdminSession();
  }

  // checkAdminSession() {
  //   this.monApiService.checkAdminSession().subscribe(
  //     response => {
  //       // Si la réponse est réussie, l'utilisateur est en session admin
  //       console.log(response);
  //     },
  //     error => {
  //       // Si la réponse est une erreur, rediriger vers la page de connexion ou effectuer une autre action
  //       console.error(error);
  //       this.router.navigate(['/page-connexion']);
  //     }
  //   );
  // }
}
