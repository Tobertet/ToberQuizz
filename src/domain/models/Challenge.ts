import { CountryCode, UncheckedAnswer } from "@/domain";
import {
  QuestionUtils,
  CheckedQuestion,
  isUncheckedQuestion,
  UnansweredQuestion,
  UncheckedQuestion,
  isCorrectlyAnsweredQuestion,
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

const fillInAnswer = (
  challenge: CheckedChallenge,
  answer: UncheckedAnswer,
  questionNumber: number
): UncheckedChallenge => {
  const filledInQuestions = challenge.questions.map((question, index) =>
    index + 1 === questionNumber
      ? QuestionUtils.answerQuestion(question, answer)
      : question
  );
  return { ...challenge, questions: filledInQuestions };
};

const fillInAnswers = (
  challenge: EmptyChallenge,
  answers: (UncheckedAnswer | undefined)[]
): UncheckedChallenge => {
  const filledInQuestions = challenge.questions.map((question, index) =>
    !answers[index]
      ? question
      : QuestionUtils.answerQuestion(
          question,
          answers[index] as UncheckedAnswer
        )
  );
  return { ...challenge, questions: filledInQuestions };
};

const checkQuestion = async (
  challenge: UncheckedChallenge,
  questionChecker: (question: UncheckedQuestion) => Promise<CheckedQuestion>,
  questionNumber: number
): Promise<Challenge> => {
  const checkedQuestions = await Promise.all(
    challenge.questions.map(async (question, index) =>
      index + 1 === questionNumber && isUncheckedQuestion(question)
        ? await questionChecker(question)
        : question
    )
  );
  return { ...challenge, questions: checkedQuestions };
};

const checkChallenge = async (
  challenge: UncheckedChallenge,
  questionChecker: (question: UncheckedQuestion) => Promise<CheckedQuestion>
): Promise<CheckedChallenge> => {
  const checkedQuestions = await Promise.all(
    challenge.questions.map(async (question) =>
      isUncheckedQuestion(question)
        ? QuestionUtils.checkQuestion(question, questionChecker)
        : question
    )
  );
  return { ...challenge, questions: checkedQuestions };
};

export const ChallengeUtils = {
  fillInAnswer,
  fillInAnswers,
  checkChallenge,
  checkQuestion,
};
