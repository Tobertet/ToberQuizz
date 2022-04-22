import { Challenge } from "@/domain";
import { HashingAlgorithm } from "@/application/ports";

export class CheckChallenge {
  constructor(private readonly hashingAlgorithm: HashingAlgorithm) {}

  async execute(challenge: Challenge): Promise<Challenge> {
    return await this.hashingAlgorithm.checkChallenge(challenge);
  }
}
