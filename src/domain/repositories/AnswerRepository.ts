import { Answer, CountryCode } from "@/domain";

export interface AnswerRepository {
  get(countryCode: CountryCode, challengeNumber: number): Promise<Answer[]>;
}
