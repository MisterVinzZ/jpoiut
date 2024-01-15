import { Component } from '@angular/core';

@Component({
  selector: 'app-profil-component1',
  templateUrl: './profil-component1.component.html',
  styleUrls: ['./profil-component1.component.css']
})
export class ProfilComponent1Component {
  logout(): void{ //méthode pour se déconnecter et supprimer la session
    sessionStorage.removeItem('adminSession')
    console.log('Utilisateur déconnecté')
  }
}
