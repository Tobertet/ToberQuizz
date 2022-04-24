import {
  AnsweredQuestion,
  CorrectAnswer,
  Question,
  UncheckedQuestion,
  AnswerService,
  UnansweredQuestion,
  IncorrectAnswer,
  CheckedQuestion,
  DeleteAnswer,
  AnswerQuestion,
  CheckQuestion,
  CheckQuestionCorrectly,
  CheckQuestionIncorrectly,
  UncheckQuestion,
} from "@/domain";

const deleteAnswer: DeleteAnswer = (question) => ({
  ...question,
  answer: undefined,
});

const uncheck: UncheckQuestion = (question) => ({
  ...question,
  answer: AnswerService.uncheck(question.answer),
});

const answer: AnswerQuestion = (question, answer) => ({ ...question, answer });

const check: CheckQuestion = (question, answer) => ({ ...question, answer });

const checkCorrectly: CheckQuestionCorrectly = (question) => ({
  ...question,
  answer: AnswerService.checkCorrectly(question.answer),
});

const checkIncorrectly: CheckQuestionIncorrectly = (question) => ({
  ...question,
  answer: AnswerService.checkIncorrectly(question.answer),
});

const isAnswered = (question: Question): question is AnsweredQuestion =>
  question.answer !== undefined;

const isUnanswered = (question: Question): question is UnansweredQuestion =>
  !isAnswered(question);

const isUnchecked = (question: Question): question is UncheckedQuestion =>
  isAnswered(question) && AnswerService.isUnchecked(question.answer);

const isChecked = (question: Question): question is CheckedQuestion =>
  isAnswered(question) && AnswerService.isChecked(question.answer);

const isCorrectlyAnswered = (
  question: Question
): question is AnsweredQuestion<CorrectAnswer> =>
  isAnswered(question) && AnswerService.isCorrect(question.answer);

const isIncorrectlyAnswered = (
  question: Question
): question is AnsweredQuestion<IncorrectAnswer> =>
  isAnswered(question) && AnswerService.isIncorrect(question.answer);

export const QuestionService = {
  deleteAnswer,
  uncheck,
  answer,
  check,
  checkCorrectly,
  checkIncorrectly,
  isAnswered,
  isUnanswered,
  isUnchecked,
  isChecked,
  isCorrectlyAnswered,
  isIncorrectlyAnswered,
};
