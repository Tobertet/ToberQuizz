import { ChallengeRepository, EmptyChallenge } from "@/domain";
import axios from "axios";

const create: (resourcesUri: string) => ChallengeRepository = (
  resourcesUri
) => ({
  getEmpty: async ({ challengeNumber, countryCode }) => {
    const challengeUri = `${resourcesUri}/${countryCode}/${challengeNumber}/challenge.json`;
    const response = await axios.get<EmptyChallenge>(challengeUri);
    return response.data;
  },
});

export const RestChallengeRepository = {
  create,
};
