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
};

export type Answer = CheckedAnswer | UncheckedAnswer;
