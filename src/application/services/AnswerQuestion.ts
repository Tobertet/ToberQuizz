import {
  CountryCode,
  AnswerRepository,
  isCorrectlyAnsweredQuestion,
  UncheckedAnswer,
  ChallengeUtils,
  UncheckedQuestion,
  CheckedQuestion,
  Challenge,
} from "@/domain";
import { StatisticsCollector } from "@/application/ports";

const answerQuestion = async (
  questionChecker: (question: UncheckedQuestion) => Promise<CheckedQuestion>,
  statisticsCollector: StatisticsCollector,
  answerRepository: AnswerRepository,
  countryCode: CountryCode,
  challengeNumber: number,
  challenge: Challenge,
  questionNumber: number,
  answer: UncheckedAnswer
) => {
  const answeredChallenge = ChallengeUtils.fillInAnswer(
    challenge,
    answer,
    questionNumber
  );

  await answerRepository.save(
    { countryCode, challengeNumber },
    answeredChallenge
  );

  const checkedChallenge = await ChallengeUtils.checkQuestion(
    answeredChallenge,
    questionChecker,
    questionNumber
  );

  if (
    isCorrectlyAnsweredQuestion(checkedChallenge.questions[questionNumber - 1])
  ) {
    const correctAnswersCount = checkedChallenge.questions.filter(
      isCorrectlyAnsweredQuestion
    ).length;

    statisticsCollector.collect({
      countryCode,
      challengeNumber,
      correctAnswersCount,
    });
  }
  return checkedChallenge;
};

export const AnswerQuestion = {
  execute: answerQuestion,
};
