// page-admin.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Answer } from 'src/app/interface/answer';



@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css'],
})

export class PageAdminComponent implements OnInit {
  groupedAnswers: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadGroupedAnswers();
  }

  loadGroupedAnswers() {
    this.apiService.getAnswers().subscribe(
      (data: any) => {
        if (data.body) {
          this.groupedAnswers = this.groupAnswersByQuestion(data.body);
        } else {
          console.error('Invalid response structure. Missing "body" property.');
        }
      },
      (error) => {
        console.log('Error fetching answers:', error);
      }
    );
  }

  groupAnswersByQuestion(answers: Answer[]): any[] {
    const groupedAnswers: any[] = [];

    answers.forEach((answer: Answer) => {
      const existingGroup = groupedAnswers.find(group => group.question === answer.fk_question);

      if (existingGroup) {
        existingGroup.answers.push(answer);
      } else {
        groupedAnswers.push({
          question: answer.fk_question,
          answers: [answer]
        });
      }
    });

    return groupedAnswers;
  }
}
