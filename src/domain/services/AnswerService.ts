import {
  Answer,
  CheckAnswer,
  CheckAnswerCorrectly,
  CheckAnswerIncorrectly,
  CheckedAnswer,
  CorrectAnswer,
  IncorrectAnswer,
  UncheckAnswer,
  UncheckedAnswer,
} from "@/domain";

const check: CheckAnswer = (answer, isCorrect) => ({
  ...answer,
  isCorrect,
});

const checkCorrectly: CheckAnswerCorrectly = (answer) => ({
  ...answer,
  isCorrect: true,
});

const checkIncorrectly: CheckAnswerIncorrectly = (answer) => ({
  ...answer,
  isCorrect: false,
});

const uncheck: UncheckAnswer = (answer) => ({
  ...answer,
  isCorrect: undefined,
});

const isUnchecked = (answer: Answer): answer is UncheckedAnswer =>
  answer.isCorrect === undefined;

const isChecked = (answer: Answer): answer is CheckedAnswer =>
  !isUnchecked(answer);

const isCorrect = (answer: Answer): answer is CorrectAnswer =>
  isChecked(answer) && answer.isCorrect === true;

const isIncorrect = (answer: Answer): answer is IncorrectAnswer =>
  isChecked(answer) && !isCorrect(answer);

export const AnswerService = {
  check,
  checkCorrectly,
  checkIncorrectly,
  uncheck,
  isUnchecked,
  isChecked,
  isCorrect,
  isIncorrect,
};
