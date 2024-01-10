import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MonApiService } from '../../services/mon-api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-connexion',
  templateUrl: './page-connexion.component.html',
  styleUrls: ['./page-connexion.component.css']
})
export class PageConnexionComponent {
  credentials = { mail: '', password: '' };

  constructor(private monApiService: MonApiService, private router: Router, private http: HttpClient) {}

  onSubmit(): void {
    // console.log('Formulaire soumis', this.credentials);
    this.envoyerdonne();
    // this.monApiService.login(this.credentials).subscribe
    // const (
    //   (response) => {
    //     if (response && response.status === 'error') {
    //       console.log('Erreur de connexion', response.message);
    //     } else {
    //       console.log('Connexion réussie', response);
    //       // Effectuez la redirection ici
    //       this.router.navigate(['/page-accueil']);
    //     }
    //   },
    //   (error: HttpErrorResponse) => {
    //     console.error('Erreur de connexion', error);
    //   }
    // );
  }
  public async envoyerdonne() {
    const donne = new FormData();
    donne.append("mail", "testadmin@univ-eiffel.fr");
    donne.append("passwd", "testadmin");
  
    try {
      const response = await this.http.post("http://localhost/jpo/traitement_connexion.php", donne).toPromise();
      const data = response as any;
      console.log(data);
    } catch (error) {
      console.log('Erreur lors de la requête HTTP', error);
    }
  }

}
