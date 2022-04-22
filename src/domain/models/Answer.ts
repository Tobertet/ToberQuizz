export type CorrectAnswer = {
  text: string;
  isCorrect: true;
};

export type IncorrectAnswer = {
  text: string;
  isCorrect: false;
};

export type CheckedAnswer = CorrectAnswer | IncorrectAnswer;

export type UncheckedAnswer = {
  text: string;
  isCorrect?: never;
};

export type Answer = CheckedAnswer | UncheckedAnswer;
