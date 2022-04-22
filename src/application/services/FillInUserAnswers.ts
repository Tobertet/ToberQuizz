import {
  ChallengeIdentifier,
  EmptyChallenge,
  fillInAnswers,
  UncheckedChallenge,
  UserAnswersGetter,
} from "@/domain";

const fillInUserAnswers = async (
  userAnswersGetter: UserAnswersGetter,
  challenge: EmptyChallenge,
  challengeIdentifier: ChallengeIdentifier
): Promise<UncheckedChallenge> => {
  const userAnswers = await userAnswersGetter(challengeIdentifier);
  return fillInAnswers(challenge, userAnswers);
};

export const FillInUserAnswers = {
  execute: fillInUserAnswers,
};
