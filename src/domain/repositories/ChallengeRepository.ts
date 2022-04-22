import { Challenge, CountryCode } from "@/domain";

export interface ChallengeRepository {
  get(countryCode: CountryCode, challengeNumber: number): Promise<Challenge>;
}
