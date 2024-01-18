import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil-component1',
  templateUrl: './profil-component1.component.html',
  styleUrls: ['./profil-component1.component.css']
})
export class ProfilComponent1Component {
  constructor(private router: Router) { }
  logout(): void{ //méthode pour se déconnecter et supprimer la session
    sessionStorage.removeItem('adminSession')
    this.router.navigate(['/page-accueil']);
    console.log('Utilisateur déconnecté')
  }
  redirection(): void{
    this.router.navigate(['/page-admin']);
  }
}
