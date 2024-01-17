import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceQuizService {

  private apiUrl = 'https://bilou.alwaysdata.net/API';

  constructor(private httpClient: HttpClient) { }
  
  createUser(userData: any): Observable<any> {
    const url = `${this.apiUrl}/User/create.php`; 
    return this.httpClient.post(url, userData);
  }
}
