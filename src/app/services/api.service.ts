// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost/projects/SAE/jpo-api/api/';

  constructor(private http: HttpClient) {}

  postData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
