import {
  Challenge,
  CountryCode,
  AnswerRepository,
  isCorrectlyAnsweredQuestion,
} from "@/domain";
import { HashingAlgorithm, StatisticsCollector } from "@/application/ports";

export class AnswerQuestion {
  constructor(
    private readonly hashingAlgorithm: HashingAlgorithm,
    private readonly answerRepository: AnswerRepository,
    private readonly statisticsCollector: StatisticsCollector
  ) {}

  async execute(
    countryCode: CountryCode,
    challengeNumber: number,
    challenge: Challenge,
    questionNumber: number,
    answer: string
  ): Promise<Challenge> {
    // const answeredChallenge = challenge.answerQuestion(questionNumber, answer);

    // await this.answerRepository.save(
    //   countryCode,
    //   challengeNumber,
    //   answeredChallenge
    // );

    // const checkedQuestion = await this.hashingAlgorithm.checkQuestion(
    //   answeredChallenge.questions[questionNumber - 1]
    // );

    // const checkedChallenge = answeredChallenge.checkQuestion(
    //   questionNumber,
    //   checkedQuestion.answer.isCorrect || false
    // );

    // if (checkedQuestion.answer.isCorrect) {
    //   const correctAnswersCount = checkedChallenge.questions.filter(
    //     isCorrectlyAnsweredQuestion
    //   ).length;

    //   this.statisticsCollector.collect({
    //     countryCode,
    //     challengeNumber,
    //     correctAnswersCount,
    //   });
    // }

    // return checkedChallenge;
    return challenge;
  }
}
