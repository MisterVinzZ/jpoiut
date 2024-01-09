import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonApiService {

  private apiUrl = 'https://bilou.alwaysdata.net/API/Admin'; //'https://localhost/projects/SAE/jpo-api/connexion.php'

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> { //permet de faire une requête HTTP POST vers l'endpoint /login de votre API avec les informations d'authentification
    return this.http.post(`${this.apiUrl}/traitement_connexion.php`, credentials);
  }
}
