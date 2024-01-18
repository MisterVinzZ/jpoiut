import { Component, Input, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserServiceQuizService } from '../../services/user-service-quiz.service';
import { QuestionServiceQuizService } from '../../services/question-service-quiz.service';
import { ResponseServiceQuizService } from '../../services/response-service-quiz.service';

@Component({
  selector: 'app-page-quizz-component1',
  templateUrl: './page-quizz-component1.component.html',
  styleUrls: ['./page-quizz-component1.component.css']
})
export class PageQuizzComponent1Component {
  @Input() 
  questionsFromParent: any[] = [];
  selectedOption: any = {};


  hasCreatedAccount = false;
  mail: string = '';
  name: string = '';
  firstname: string = '';

  private questionContainerQuiz: HTMLElement | null = null;

  questions: any[] = [
    {
      id: 6,
      question: 'Question 6',
      options: [
        { value: 'Sciences', label: 'Sciences' },
        { value: 'Littérature', label: 'Littérature' },
        { value: 'Sciences sociales', label: 'Sciences sociales' },
        { value: 'Arts', label: 'Arts' },
        { value: 'Économie et gestion', label: 'Économie et gestion' }
      ]
    },
    {
      id: 8,
      question: 'Question 8',
      options: [
        { value: 'Réseaux sociaux', label: 'Réseaux sociaux (Facebook, Twitter, etc.)' },
        { value: 'Site web de l\'école', label: 'Site web de l\'école' },
        { value: 'Amis ou famille', label: 'Amis ou famille' },
        { value: 'Affiches physiques', label: 'Affiches physiques' }
      ]
    },
    {
      id: 9,
      question: 'Question 9',
      options: [
        { value: 'Découvrir les filières de formation', label: 'Découvrir les filières de formation' },
        { value: 'Rencontrer des étudiants', label: 'Rencontrer des étudiants' },
        { value: 'Obtenir des informations sur les débouchés professionnels', label: 'Obtenir des informations sur les débouchés professionnels' },
        { value: 'Participer à des ateliers pratiques', label: 'Participer à des ateliers pratiques' }
      ]
    },
    {
      id: 11,
      question: 'Question 11',
      options: [
        { value: 'Développement web', label: 'Développement web' },
        { value: 'Audiovisuel', label: 'Audiovisuel' },
        { value: 'Graphisme', label: 'Graphisme' }
      ]
    },
    {
      id: 12,
      question: 'Question 12',
      options: [
        { value: 'Acquisition de compétences techniques', label: 'Acquisition de compétences techniques' },
        { value: 'Développement de la créativité', label: 'Développement de la créativité' },
        { value: 'Préparation à un secteur en croissance', label: 'Préparation à un secteur en croissance' },
        { value: 'Répondre à un intérêt personnel', label: 'Répondre à un intérêt personnel' }
      ]
    },
    {
      id: 13,
      question: 'Question 13',
      options: [
        { value: 'Très convivial', label: 'Très convivial' },
        { value: 'Convivial', label: 'Convivial' },
        { value: 'Neutre', label: 'Neutre' },
        { value: 'Peu convivial', label: 'Peu convivial' },
        { value: 'Pas du tout convivial', label: 'Pas du tout convivial' }
      ]
    },
    {
      id: 14,
      question: 'Question 14',
      options: [
        { value: '1', label: '1 (Pas du tout)' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5 (Neutre)' },
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '8', label: '8' },
        { value: '9', label: '9' },
        { value: '10', label: '10 (Extrêmement)' }
      ]
    }
  ];

    constructor(
      private httpClient: HttpClient, private elementRef: ElementRef,
      public userService: UserServiceQuizService,
      public questionService: QuestionServiceQuizService,
      public responseService: ResponseServiceQuizService ) {}

      ngOnInit(): void {
        this.questionService.getQuestions().subscribe(
          (data: any) => {
            console.log('Questions récupérées:', data);
            this.questionsFromParent = data;
            setTimeout(() => this.displayQuestions(), 0);
          },
          error => {
            console.error('Erreur lors du chargement des questions:', error);
            alert('Une erreur s\'est produite lors du chargement des questions. Veuillez réessayer.');
          }
        );
    
        this.questionContainerQuiz = document.getElementById('question-container-quiz');
      }
    

  submitUserData(): void {

    const name = this.name.trim();
    const firstname = this.firstname.trim();
    const mail = this.mail.trim();

    if (name !== '' && firstname !== '' && mail !== '') {
      const userData = {
        name: name,
        firstname: firstname,
        mail: mail,
      };

      this.userService.createUser(userData).subscribe(
        (data: any) => {
          console.log(JSON.stringify(data));
          alert(data.message);

          this.hasCreatedAccount = true;
          // this.enableTestButton();
        },
        error => {
          console.error('Erreur lors de l\'envoi des données utilisateur:', error);
          alert('Une erreur s\'est produite. Veuillez réessayer.');
        }
      );
    } else {
      alert("Veuillez remplir tous les champs du formulaire utilisateur.");
    }
  }
  
// Appeler cette fonction lorsque le compte est créé avec succès
//   enableTestButton(): void {
//   const testButton = document.getElementById('test-button');
//   if (testButton) {
//     testButton.removeAttribute('disabled');
//   }
//   this.hasCreatedAccount = true;
// }


  // showQuiz(): void {
  //   const userInfoForm = document.getElementById('user-info-form');
  //   const quizContainer = document.getElementById('quiz-container');
  //   if (userInfoForm && quizContainer) {
  //     userInfoForm.style.display = 'none';
  //     quizContainer.style.display = 'block';
  //   }
  //   this.loadQuestions();
  // }

  displayQuestions(): void {
    if (this.questionContainerQuiz && this.questions) {
      this.questionContainerQuiz.innerHTML = '';
  
      this.questions.forEach((question: any) => {
        // Création du conteneur pour la question
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question-container');
  
        // Création du paragraphe pour la question
        const questionElement = document.createElement('p');
        questionElement.textContent = question.question;
        questionContainer.appendChild(questionElement);
  
        // Ajout des options de réponse en fonction de la question
        const options = question.options;
        if (options) {
          options.forEach((option: any) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `q${question.id}`;
            input.value = option.value;
            label.appendChild(input);
            label.appendChild(document.createTextNode(` ${option.label}`));
            label.appendChild(document.createElement('br'));
            questionContainer.appendChild(label);
          });
        }
  
        this.questionContainerQuiz!.appendChild(questionContainer);
      });
    }
  }
getOptionsForQuestion(question: any): any[] {
  const options = this.questions[question.id_question];
  return options ? Object.keys(options).map(key => ({ value: key, label: options[key] })) : [];
}

  submitQuiz(event: any): void {
    event.preventDefault();
    
    if (!this.hasCreatedAccount) {
        alert("Veuillez d'abord envoyer vos informations utilisateur.");
        return;
    }
    const responses: any[] = [];
    const questions = document.querySelectorAll('.question-container');

    const quizForm = document.getElementById('quizForm');

    questions.forEach((questionContainer, index) => {
        const questionId = (<HTMLInputElement>questionContainer.querySelector('input[type="radio"]')).name.substring(1);
        const selectedAnswer = <HTMLInputElement>questionContainer.querySelector('input[type="radio"]:checked');

        if(!selectedAnswer){
          alert('Veuillez répondre à la question ${questionId} avant de soumettre le quiz.');
          return;
        }

        const response = {
            answer: selectedAnswer.value,
            fk_question: questionId,
            mail: this.mail,
        };

        responses.push(response);
        this.sendResponse(response);
        console.log(response);
    });

    if (responses.length === 0) {
        alert("Veuillez répondre à au moins une question avant de soumettre le quiz.");
        return;
    }

    responses.forEach(response => {
      this.sendResponse(response);
    });
    
    alert("Quiz soumis avec succès!");}

    sendResponse(response: any): void {
      this.httpClient.post('https://bilou.alwaysdata.net/API/Answer/create.php', response)
        .subscribe(
          (data: any) => {
            console.log('Réponse du serveur:', data);
          },
          (error) => {
            console.error('Erreur lors de l\'envoi de la réponse du quiz:', error);
            alert(`Une erreur s'est produite lors de l'envoi d'une réponse. Détails : ${error.message}`);
          }
        );
    }
}