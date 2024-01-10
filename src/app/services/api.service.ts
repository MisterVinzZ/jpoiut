// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://bilou.alwaysdata.net/API';

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Question/read.php`);
  }

  getAnswers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Answer/read.php`);
  }
}
