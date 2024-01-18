// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //permets d'effectuer des requetes HTTP
import { Observable } from 'rxjs'; //traite les réponses asynchrones des requêtes http

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://bilou.alwaysdata.net/API';

  constructor(private http: HttpClient) {}

  getAnswers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Answer/read.php`);
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/User/read.php`);
  }

  searchUserByEmail(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/Answer/traitement_recherche.php?mail=${email}`);
  }


}
