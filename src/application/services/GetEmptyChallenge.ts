import { ChallengeIdentifier, EmptyChallengeGetter } from "@/domain";

const getEmptyChallenge = (
  emptyChallengeGetter: EmptyChallengeGetter,
  challengeIdentifier: ChallengeIdentifier
) => emptyChallengeGetter(challengeIdentifier);

export const GetEmptyChallenge = {
  execute: getEmptyChallenge,
};
