import { ChallengeIdentifier, EmptyChallenge } from "@/domain";

export type EmptyChallengeGetter = (
  challengeIdentifier: ChallengeIdentifier
) => Promise<EmptyChallenge>;

const getEmptyChallenge = (
  emptyChallengeGetter: EmptyChallengeGetter,
  challengeIdentifier: ChallengeIdentifier
) => emptyChallengeGetter(challengeIdentifier);

export const GetEmptyChallenge = {
  execute: getEmptyChallenge,
};
