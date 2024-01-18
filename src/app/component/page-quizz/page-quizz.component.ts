import { Component, OnInit} from '@angular/core';


import { QuestionServiceQuizService } from '../../services/question-service-quiz.service';

@Component({
  selector: 'app-page-quizz',
  templateUrl: './page-quizz.component.html',
  styleUrls: ['./page-quizz.component.css']
})
export class PageQuizzComponent implements OnInit{
  questions: any; // Assurez-vous que le type est correct

  constructor(private questionServiceQuizService: QuestionServiceQuizService) {}

  ngOnInit(): void {
    this.questionServiceQuizService.getQuestions().subscribe(
      (questions: any) => {
        this.questions = questions; // Assurez-vous que le nom est correct
      },
      (error) => {
        console.error('Erreur lors de la récupération des questions:', error);
      }
    );
  }
}

