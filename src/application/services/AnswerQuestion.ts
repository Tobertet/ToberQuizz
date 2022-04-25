import {
  CountryCode,
  AnswerRepository,
  UncheckedAnswer,
  ChallengeService,
  Challenge,
  QuestionService,
  CheckQuestion,
} from "@/domain";
import { StatisticsCollector } from "@/application/ports";

const answerQuestion = async (
  checker: CheckQuestion,
  statisticsCollector: StatisticsCollector,
  answerRepository: AnswerRepository,
  countryCode: CountryCode,
  challengeNumber: number,
  challenge: Challenge,
  questionNumber: number,
  answer: UncheckedAnswer
) => {
  const answeredChallenge = ChallengeService.fillInAnswer(
    challenge,
    answer,
    questionNumber
  );

  await answerRepository.save(
    { countryCode, challengeNumber },
    answeredChallenge
  );

  const checkedChallenge = await ChallengeService.checkQuestion(
    answeredChallenge,
    checker,
    questionNumber
  );

  if (
    QuestionService.isCorrectlyAnswered(
      checkedChallenge.questions[questionNumber - 1]
    )
  ) {
    const correctAnswersCount = checkedChallenge.questions.filter(
      QuestionService.isCorrectlyAnswered
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
