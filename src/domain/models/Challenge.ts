import {
  CountryCode,
  UncheckedAnswer,
  QuestionService,
  CheckedQuestion,
  UnansweredQuestion,
  UncheckedQuestion,
} from "@/domain";

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
  challenge: Challenge,
  answer: UncheckedAnswer,
  questionNumber: number
): UncheckedChallenge => {
  const filledInQuestions = challenge.questions.map((question, index) =>
    index + 1 === questionNumber && QuestionService.isUnanswered(question)
      ? QuestionService.answer(question, answer)
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
      : QuestionService.answer(question, answers[index] as UncheckedAnswer)
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
      index + 1 === questionNumber && QuestionService.isUnchecked(question)
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
      QuestionService.isUnchecked(question)
        ? QuestionService.check(question, questionChecker)
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
