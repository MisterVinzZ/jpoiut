import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ResponseServiceQuizService {

  constructor(private httpClient: HttpClient) { }

  sendResponse(response: any): Observable<any> {
    return this.httpClient.post('https://bilou.alwaysdata.net/API/Answer/create.php', response)
    .pipe(
      catchError(error => {
        console.error('Erreur lors de la requête HTTP:', error);
        throw error; // Rethrow l'erreur pour qu'elle soit capturée par le composant appelant, s'il y en a un.
      })
    );
    }}
