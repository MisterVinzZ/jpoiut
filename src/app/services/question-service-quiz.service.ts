import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceQuizService {

  private apiUrl = 'https://bilou.alwaysdata.net/API/Question/read.php?type=question';

  constructor(private httpClient: HttpClient) { }

  getQuestions(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }
}
