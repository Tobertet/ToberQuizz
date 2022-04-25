import {
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
  challenge: Challenge,
  questionNumber: number,
  answer: UncheckedAnswer
) => {
  const answeredChallenge = ChallengeService.fillInAnswer(
    challenge,
    answer,
    questionNumber
  );

  await answerRepository.save(answeredChallenge);

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
      ...ChallengeService.getIdentifier(checkedChallenge),
      correctAnswersCount,
    });
  }
  return checkedChallenge;
};

export const AnswerQuestion = {
  execute: answerQuestion,
};
