import {
  Answer,
  CheckedAnswer,
  CorrectAnswer,
  UncheckedAnswer,
} from "./Answer";

type Image = {
  mediaType: "image";
  uri: string;
};
type Audio = {
  mediaType: "audio";
  uri: string;
};
type MediaResource = Audio | Image;

export type AnsweredQuestion<T extends Answer = Answer> = {
  solutions: string[];
  mediaResource: MediaResource;
  answer: T;
};
export type UnansweredQuestion = {
  solutions: string[];
  mediaResource: MediaResource;
  answer?: never;
};

export type CheckedQuestion = AnsweredQuestion<CheckedAnswer>;
export type UncheckedQuestion = AnsweredQuestion<UncheckedAnswer>;
export type Question = UnansweredQuestion | AnsweredQuestion;

export function isAnsweredQuestion(
  question: Question
): question is AnsweredQuestion {
  return (question as AnsweredQuestion).answer !== undefined;
}

export function isUncheckedQuestion(
  question: Question
): question is UncheckedQuestion {
  const uncheckedQuestion = question as UncheckedQuestion;
  return (
    uncheckedQuestion.answer && uncheckedQuestion.answer.isCorrect === undefined
  );
}

export function isCorrectlyAnsweredQuestion(
  question: Question
): question is AnsweredQuestion {
  const answeredQuestion = question as AnsweredQuestion<CorrectAnswer>;
  return answeredQuestion.answer && answeredQuestion.answer.isCorrect;
}

export const answerQuestion = (
  question: UnansweredQuestion,
  answer: UncheckedAnswer
): UncheckedQuestion => ({ ...question, answer });
