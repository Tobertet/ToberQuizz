import {
  AnsweredQuestion,
  Challenge,
  CheckedQuestion,
  Question,
  UnansweredQuestion,
} from "@/domain";

export interface HashingAlgorithm {
  checkQuestion: (
    question: AnsweredQuestion
  ) => Promise<CheckedQuestion | UnansweredQuestion>;

  checkQuestions: (questions: Question[]) => Promise<Question[]>;

  checkChallenge: (challenge: Challenge) => Promise<Challenge>;
}
