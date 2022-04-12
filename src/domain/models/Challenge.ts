import { Answer, Question } from "@/domain";

export class Challenge {
  constructor(
    public description: string = "",
    public questions: Question[] = [],
    public startingDate: string = ""
  ) {}

  clone(): Challenge {
    return new Challenge(this.description, this.questions, this.startingDate);
  }

  merge(other: Partial<Challenge>): Challenge {
    return Object.assign(this.clone(), other);
  }

  public fillAnswers(answers: Answer[]): Challenge {
    const filledQuestions = this.questions.map((question, index) => ({
      ...question,
      answer: answers[index],
    }));
    return this.merge({ questions: filledQuestions });
  }

  public answerQuestion(questionNumber: number, answer: string): Challenge {
    const answeredQuestions = this.questions.map((question, index) => {
      return index === questionNumber - 1
        ? { ...question, answer }
        : { ...question };
    });
    return this.merge({ questions: answeredQuestions });
  }

  public checkQuestion(questionNumber: number, isCorrect: boolean): Challenge {
    const checkedQuestions = this.questions.map((question, index) => {
      return index === questionNumber - 1
        ? { ...question, isCorrect }
        : { ...question };
    });
    return this.merge({ questions: checkedQuestions });
  }
}
