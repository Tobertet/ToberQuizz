import {
  EmptyChallengeGetter,
  ChallengeIdentifier,
  UserAnswersGetter,
  ChallengeUtils,
} from "@/domain";

const getUserChallenge = async (
  emptyChallengeGetter: EmptyChallengeGetter,
  userAnswersGetter: UserAnswersGetter,
  challengeIdentifier: ChallengeIdentifier
) => {
  const emptyChallenge = await emptyChallengeGetter(challengeIdentifier);
  const userAnswers = await userAnswersGetter(challengeIdentifier);
  return ChallengeUtils.fillInAnswers(emptyChallenge, userAnswers);
};

export const GetUserChallenge = {
  execute: getUserChallenge,
};
