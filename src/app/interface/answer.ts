export interface Answer {
    id_answer: number;
    answer: string;
    fk_question: string; // Changer le type en string si fk_question contient le texte de la question
    fk_user: {
      name: string;
      firstname: string;
    };
  }