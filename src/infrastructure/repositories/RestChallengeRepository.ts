import { Challenge, CountryCode, ChallengeRepository } from "@/domain";
import axios from "axios";

export class RestChallengeRepository implements ChallengeRepository {
  constructor(private readonly resourcesUri: string) {}

  async get(
    countryCode: CountryCode,
    challengeNumber: number
  ): Promise<Challenge> {
    const challengeURL = `${this.resourcesUri}/${countryCode}/${challengeNumber}/challenge.json`;

    const response = await axios.get<Challenge>(challengeURL);
    return response.data;
  }
}
