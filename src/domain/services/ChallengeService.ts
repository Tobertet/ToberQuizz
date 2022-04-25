import {
  Challenge,
  CheckedChallenge,
  EmptyChallenge,
  UncheckedAnswer,
  UncheckedChallenge,
  QuestionService,
  CheckQuestion,
} from "@/domain";

const fillInAnswer = (
  challenge: Challenge,
  answer: UncheckedAnswer,
  questionNumber: number
): UncheckedChallenge => {
  const filledInQuestions = challenge.questions.map((question, index) => {
    if (index + 1 === questionNumber) {
      const blankQuestion = QuestionService.isAnswered(question)
        ? QuestionService.deleteAnswer(question)
        : question;
      const answeredQuestion = QuestionService.answer(blankQuestion, answer);
      return answeredQuestion;
    }
    return question;
  });
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
  checker: CheckQuestion,
  questionNumber: number
): Promise<Challenge> => {
  const checkedQuestions = await Promise.all(
    challenge.questions.map(async (question, index) =>
      index + 1 === questionNumber && QuestionService.isUnchecked(question)
        ? await checker(question)
        : question
    )
  );
  return { ...challenge, questions: checkedQuestions };
};

const check = async (
  challenge: UncheckedChallenge,
  checker: CheckQuestion
): Promise<CheckedChallenge> => {
  const checkedQuestions = await Promise.all(
    challenge.questions.map(async (question) =>
      QuestionService.isUnchecked(question)
        ? QuestionService.check(question, checker)
        : question
    )
  );
  return { ...challenge, questions: checkedQuestions };
};

const isUnanswered = (challenge: Challenge) =>
  challenge.questions.filter(QuestionService.isAnswered).length === 0;

const isAnswered = (challenge: Challenge) => !isUnanswered(challenge);

const isChecked = (challenge: Challenge) =>
  challenge.questions.filter(
    (question) =>
      !QuestionService.isUnanswered(question) ||
      !QuestionService.isChecked(question)
  ).length === 0;

const isUnchecked = (challenge: Challenge) => !isChecked(challenge);

const isCorrect = (challenge: Challenge) =>
  challenge.questions.filter(QuestionService.isCorrectlyAnswered).length ===
  challenge.questions.length;

const isIncorrect = (challenge: Challenge) => !isCorrect(challenge);

export const ChallengeService = {
  fillInAnswer,
  fillInAnswers,
  checkQuestion,
  check,
  isUnanswered,
  isAnswered,
  isChecked,
  isUnchecked,
  isCorrect,
  isIncorrect,
};
