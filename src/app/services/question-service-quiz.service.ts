import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceQuizService {

  questionsUrl = 'https://bilou.alwaysdata.net/API/Question/read.php';

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get<any>(this.questionsUrl).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
