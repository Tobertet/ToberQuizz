import { CountryCode } from "@/domain";

export interface ChallengeProgressRepository {
  save(
    countryCode: CountryCode,
    challengeNumber: number,
    correctAnswersCount: number
  ): Promise<void>;
}
