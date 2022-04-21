import {
  Challenge,
  CountryCode,
  ChallengeRepository,
  EmptyChallenge,
} from "@/domain";
import axios from "axios";

export class RestChallengeRepository implements ChallengeRepository {
  constructor(private readonly resourcesUri: string) {}

  async get(challengeIdentifier: {
    countryCode: CountryCode;
    challengeNumber: number;
  }): Promise<EmptyChallenge> {
    const challengeURL = `${this.resourcesUri}/${challengeIdentifier.countryCode}/${challengeIdentifier.challengeNumber}/challenge.json`;

    const response = await axios.get<Partial<Challenge>>(challengeURL);
    return new Challenge().merge(response.data);
  }
}
