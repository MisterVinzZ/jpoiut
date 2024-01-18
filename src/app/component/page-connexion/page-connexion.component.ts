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
  credentials = { mail: '', password: '' }; //objet qui stock les infos du formulaire
  errorMessage = '';
  isAdminSession: boolean = false;
  constructor(private monApiService: MonApiService, private router: Router, private http: HttpClient) {}

  onSubmit(): void { //méthode appelé lorsque le formulaire est soumis
    const isAdminSession = sessionStorage.getItem('adminSession') === 'true';
    this.isAdminSession = isAdminSession;

    if (isAdminSession) {
      
      console.log('L\'utilisateur est en session admin'); // L'utilisateur est en session admin
    } else {
      
      console.log('Redirection connexion');// Rediriger vers la page de connexion ou effectuer une autre action
      
    }
    this.envoyerdonne();
    

  }
  public async envoyerdonne() {
    const donne = new FormData(); // Création d'un objet FormData avec les informations du formulaire
    donne.append("mail", this.credentials.mail); //ajoute une paire clé-valeur à l'objet FormData
    donne.append("passwd", this.credentials.password);
  
    try {
      //envoi de la requête post au serveur
      const response = await this.http.post("https://bilou.alwaysdata.net/API/Admin/traitement_connexion.php", donne).toPromise();
      const data = response as any; //contourner verif type
      if (data && data.status !== 'error') {  
        console.log('Connexion réussie', data);
        sessionStorage.setItem('adminSession', 'true');
        this.router.navigate(['/page-admin']);
      } else {
        console.log('Erreur de connexion', data.message);
        this.errorMessage = data.message;
      }
    } catch (error) {
      console.log('Erreur lors de la requête HTTP', error);
    }
  }
  }