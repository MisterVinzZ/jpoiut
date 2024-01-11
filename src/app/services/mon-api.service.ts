import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonApiService {

  private apiUrl = 'https://bilou.alwaysdata.net/API'; //'https://localhost/projects/SAE/jpo-api/connexion.php'

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> { 
    return this.http.post(`${this.apiUrl}/Admin/traitement_connexion.php`, credentials, { headers: { 'Content-Type': 'application/json' } });
    //methode login qui prends les identifiants en parametres et envois une requete http post dans traitement connexion

}
// checkAdminSession(): Observable<any> { //méthode vérifier la session
//   return this.http.get<any>(`${this.apiUrl}/Admin/check_admin_session.php`);
// }
 
 isAdminSession(): Observable<boolean> { //méthode pour vérifier la session admin
  const adminSession = sessionStorage.getItem('adminSession');
  return of(adminSession === 'true');
}

}