import {
  Answer,
  CheckedAnswer,
  CorrectAnswer,
  IncorrectAnswer,
  UncheckedAnswer,
} from "@/domain";

type Image = Readonly<{
  mediaType: "image";
  uri: string;
}>;
type Audio = Readonly<{
  mediaType: "audio";
  uri: string;
}>;
type MediaResource = Audio | Image;

export type AnsweredQuestion<T extends Answer = Answer> = Readonly<{
  solutions: string[];
  mediaResource: MediaResource;
  answer: T;
}>;

export type UnansweredQuestion = Readonly<{
  solutions: string[];
  mediaResource: MediaResource;
  answer?: never;
}>;

export type CheckedQuestion = AnsweredQuestion<CheckedAnswer>;
export type UncheckedQuestion = AnsweredQuestion<UncheckedAnswer>;
export type Question = UnansweredQuestion | AnsweredQuestion;

export type DeleteAnswer = (question: AnsweredQuestion) => UnansweredQuestion;
export type UncheckQuestion = (question: CheckedQuestion) => UncheckedQuestion;
// GOD METHOD dependency
export type AnswerQuestion = (
  question: UnansweredQuestion,
  answer: UncheckedAnswer
) => UncheckedQuestion;

export type CheckQuestion = (
  question: UncheckedQuestion
) => Promise<CheckedQuestion>;

export type CheckQuestionWith = (
  question: UncheckedQuestion,
  checker: CheckQuestion
) => Promise<CheckedQuestion>;

export type CheckQuestionCorrectly = (
  question: UncheckedQuestion
) => AnsweredQuestion<CorrectAnswer>;

export type CheckQuestionIncorrectly = (
  question: UncheckedQuestion
) => AnsweredQuestion<IncorrectAnswer>;
