import { Challenge, Question } from "@/domain";

export interface HashingAlgorithm {
  checkQuestion: (question: Question) => Promise<Question>;

  checkQuestions: (questions: Question[]) => Promise<Question[]>;

  checkChallenge: (challenge: Challenge) => Promise<Challenge>;
}
