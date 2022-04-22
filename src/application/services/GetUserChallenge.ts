import {
  Challenge,
  CountryCode,
  AnswerRepository,
  ChallengeRepository,
} from "@/domain";

export class GetUserChallenge {
  constructor(
    private readonly challengeRepository: ChallengeRepository,
    private readonly answerRepository: AnswerRepository
  ) {}

  async execute(
    countryCode: CountryCode,
    challengeNumber: number
  ): Promise<Challenge> {
    const emptyChallenge = await this.challengeRepository.get(
      countryCode,
      challengeNumber
    );
    const userAnswers = await this.answerRepository.get(
      countryCode,
      challengeNumber
    );
    const answeredChallenge = emptyChallenge.fillAnswers(userAnswers);

    return answeredChallenge;
  }
}
