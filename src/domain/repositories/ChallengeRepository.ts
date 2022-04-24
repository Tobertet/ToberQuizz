import { ChallengeIdentifier, EmptyChallenge } from "@/domain";

export type EmptyChallengeGetter = (
  challengeIdentifier: ChallengeIdentifier
) => Promise<EmptyChallenge>;

export type ChallengeRepository = {
  getEmpty: EmptyChallengeGetter;
};
