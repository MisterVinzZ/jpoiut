import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseServiceQuizService {

  constructor(private httpClient: HttpClient) { }

  sendResponse(response: any): Observable<any> {
    return this.httpClient.post('https://bilou.alwaysdata.net/API/Answer/create.php', response);
  }
}
