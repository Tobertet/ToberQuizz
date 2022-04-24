import {
  ChallengeIdentifier,
  ChallengeUtils,
  EmptyChallenge,
  UncheckedChallenge,
  UserAnswersGetter,
} from "@/domain";

const fillInUserAnswers = async (
  userAnswersGetter: UserAnswersGetter,
  challenge: EmptyChallenge,
  challengeIdentifier: ChallengeIdentifier
): Promise<UncheckedChallenge> => {
  const userAnswers = await userAnswersGetter(challengeIdentifier);
  return ChallengeUtils.fillInAnswers(challenge, userAnswers);
};

export const FillInUserAnswers = {
  execute: fillInUserAnswers,
};
