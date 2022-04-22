import { CountryCode, UncheckedAnswer } from "@/domain";
import {
  QuestionUtils,
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

const checkChallenge = async (
  challenge: UncheckedChallenge,
  questionChecker: (question: UncheckedQuestion) => Promise<CheckedQuestion>
): Promise<CheckedChallenge> => {
  const checkedQuestions = await Promise.all(
    challenge.questions.map(async (question) =>
      isUncheckedQuestion(question) ? await questionChecker(question) : question
    )
  );
  return { ...challenge, questions: checkedQuestions };
};

export const ChallengeUtils = {
  fillInAnswers,
  checkChallenge,
};
