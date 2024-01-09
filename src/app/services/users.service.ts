// users.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Users } from '../interface/users';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private endpoint = 'read.php'; // Laissez l'endpoint sans le type ici

  constructor(private apiService: ApiService, private http: HttpClient) {}

  getUserData() {
    const requestData = {
      type: 'user',
    };

    this.apiService.postData(requestData).subscribe(response => {
      console.log(response);
      // Faites quelque chose avec la réponse ici
    });
  }
}
