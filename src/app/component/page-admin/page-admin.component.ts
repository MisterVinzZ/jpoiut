// page-admin.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Answer } from 'src/app/interface/answer';
import { MonApiService } from '../../services/mon-api.service';
import { Router } from '@angular/router';
import { Users } from 'src/app/interface/users';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css'],
})

export class PageAdminComponent implements OnInit {
  groupedAnswers: any[] = [];
  users: { body: Users[]; itemCount: number } = { body: [], itemCount: 0 };
  searchResults: any[] = [];
  searchUserMail: string = '';


  constructor(private apiService: ApiService, private monApiService: MonApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadGroupedAnswers();
    this.loadUsers();
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

  loadUsers() {
    this.apiService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.log('Error fetching users:', error);
      }
    );
  }

  displayStatistics = true;
  displayConfiguration = false;
  displayStats = true;
  displayList = false;

  showStatistics() {
    this.displayStatistics = true;
    this.displayConfiguration = false;
  }

  showConfiguration() {
    this.displayStatistics = false;
    this.displayConfiguration = true;
  }

  showStats() {
    this.displayStats = true;
    this.displayList = false;
  }

  showList() {
    this.displayList = true;
    this.displayStats = false;
  }

  searchUser() {
    if (this.searchUserMail.trim() !== '') {
      this.apiService.searchUserByEmail(this.searchUserMail).subscribe(
        (data: any[]) => {
          if (data && data.length > 0) {
            this.searchResults = this.groupAnswersByQuestion(data);
          } else {
            console.error('Aucune réponse trouvée pour cet e-mail.');
          }
        },
        (error) => {
          console.log('Erreur lors de la récupération des résultats de recherche:', error);
        }
      );
    }
  }
  resetSearch() {
    this.searchResults = [];
    this.searchUserMail = '';
  }
  
  
}
