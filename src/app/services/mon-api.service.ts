import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MonApiService {

  private apiUrl = 'https://bilou.alwaysdata.net/API'; //'https://localhost/projects/SAE/jpo-api/connexion.php'

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> { //permet de faire une requête HTTP POST vers l'endpoint /login de votre API avec les informations d'authentification
    return this.http.post(`${this.apiUrl}/Admin/traitement_connexion.php`, credentials, { headers: { 'Content-Type': 'application/json' } });

}
checkAdminSession(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/Admin/check_admin_session.php`);
}
}