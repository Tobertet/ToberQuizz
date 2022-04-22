import { Answer, CountryCode, Challenge } from "@/domain";

export interface AnswerRepository {
  get(countryCode: CountryCode, challengeNumber: number): Promise<Answer[]>;
  save(
    countryCode: CountryCode,
    challengeNumber: number,
    challenge: Challenge
  ): Promise<void>;
}
