export type CorrectAnswer = Readonly<{
  text: string;
  isCorrect: true;
}>;

export type IncorrectAnswer = Readonly<{
  text: string;
  isCorrect: false;
}>;

export type CheckedAnswer = CorrectAnswer | IncorrectAnswer;

export type UncheckedAnswer = Readonly<{
  text: string;
  isCorrect?: never;
}>;

export type Answer = CheckedAnswer | UncheckedAnswer;

export type CheckAnswer = (
  answer: UncheckedAnswer,
  isCorrect: boolean
) => CheckedAnswer;

// TODO: GOD METHOD! SHOULD IT BE LIKE THIS BELOW?
export type CheckAnswer2 = (answer: UncheckedAnswer) => CheckedAnswer;

export type CheckAnswerCorrectly = (answer: UncheckedAnswer) => CorrectAnswer;

export type CheckAnswerIncorrectly = (
  answer: UncheckedAnswer
) => IncorrectAnswer;

export type UncheckAnswer = (answer: CheckedAnswer) => UncheckedAnswer;
