import { Challenge, ChallengeIdentifier, UncheckedAnswer } from "@/domain";

export type UserAnswersGetter = (
  challengeIdentifier: ChallengeIdentifier
) => Promise<(UncheckedAnswer | undefined)[]>;

export type AnswerRepository = {
  get: UserAnswersGetter;
  save(
    challengeIdentifier: ChallengeIdentifier,
    challenge: Challenge
  ): Promise<void>;
};
