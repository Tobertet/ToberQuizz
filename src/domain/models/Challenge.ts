import { CountryCode, UncheckedAnswer } from "@/domain";
import {
  answerQuestion,
  CheckedQuestion,
  isUncheckedQuestion,
  UnansweredQuestion,
  UncheckedQuestion,
} from "./Question";

export type ChallengeIdentifier = {
  countryCode: CountryCode;
  challengeNumber: number;
};

export type EmptyChallenge = {
  description: string;
  questions: UnansweredQuestion[];
};
export type CheckedChallenge = {
  description: string;
  questions: (UnansweredQuestion | CheckedQuestion)[];
};
export type UncheckedChallenge = {
  description: string;
  questions: (UnansweredQuestion | CheckedQuestion | UncheckedQuestion)[];
};
export type Challenge = EmptyChallenge | CheckedChallenge | UncheckedChallenge;

export const fillInAnswers = (
  challenge: EmptyChallenge,
  answers: (UncheckedAnswer | undefined)[]
): UncheckedChallenge => {
  const filledInQuestions = challenge.questions.map((question, index) =>
    !answers[index]
      ? question
      : answerQuestion(question, answers[index] as UncheckedAnswer)
  );
  return { ...challenge, questions: filledInQuestions };
};

const checkChallenge = (
  challenge: UncheckedChallenge,
  questionChecker: (question: UncheckedQuestion) => CheckedQuestion
): CheckedChallenge => {
  const checkedQuestions = challenge.questions.map((question) =>
    isUncheckedQuestion(question) ? questionChecker(question) : question
  );
  return { ...challenge, questions: checkedQuestions };
};
