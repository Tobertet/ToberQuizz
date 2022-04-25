import {
  ChallengeIdentifier,
  ChallengeService,
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
  return ChallengeService.fillInAnswers(challenge, userAnswers);
};

export const FillInUserAnswers = {
  execute: fillInUserAnswers,
};
