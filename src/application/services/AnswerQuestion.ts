import { AnswerRepository, Challenge, CountryCode } from "@/domain";
import { ChallengeProgressRepository } from "@/domain/repositories/ChallengeProgressRepository";
import { HashingAlgorithm } from "../ports";

export class AnswerQuestion {
  constructor(
    private readonly hashingAlgorithm: HashingAlgorithm,
    private readonly challengeProgressRepository: ChallengeProgressRepository,
    private readonly answerRepository: AnswerRepository
  ) {}

  async execute(
    countryCode: CountryCode,
    challengeNumber: number,
    challenge: Challenge,
    questionNumber: number,
    answer: string
  ): Promise<Challenge> {
    const answeredChallenge = challenge.answerQuestion(questionNumber, answer);

    await this.answerRepository.save(
      countryCode,
      challengeNumber,
      answeredChallenge
    );

    const checkedQuestion = await this.hashingAlgorithm.checkQuestion(
      answeredChallenge.questions[questionNumber - 1]
    );

    const checkedChallenge = answeredChallenge.checkQuestion(
      questionNumber,
      checkedQuestion.isCorrect || false
    );

    if (checkedQuestion.isCorrect) {
      const correctAnswersCount = checkedChallenge.questions.filter(
        (question) => question.isCorrect
      ).length;

      await this.challengeProgressRepository.save(
        countryCode,
        challengeNumber,
        correctAnswersCount
      );
    }

    return checkedChallenge;
  }
}
