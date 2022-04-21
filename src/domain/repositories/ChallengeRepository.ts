import { Challenge, CountryCode } from "@/domain";
import { EmptyChallenge } from "../models";

export interface ChallengeRepository {
  get(challengeIdentifier: {
    countryCode: CountryCode;
    challengeNumber: number;
  }): Promise<EmptyChallenge>;
}
