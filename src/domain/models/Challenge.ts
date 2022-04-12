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
    this.questions = this.questions.map((question, index) => ({
      ...question,
      answer: answers[index],
    }));
    return this;
  }
}
