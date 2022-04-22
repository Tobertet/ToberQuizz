import {
  EmptyChallengeGetter,
  ChallengeIdentifier,
  UserAnswersGetter,
  fillInAnswers,
} from "@/domain";

const getUserChallenge = async (
  emptyChallengeGetter: EmptyChallengeGetter,
  userAnswersGetter: UserAnswersGetter,
  challengeIdentifier: ChallengeIdentifier
) => {
  const emptyChallenge = await emptyChallengeGetter(challengeIdentifier);
  const userAnswers = await userAnswersGetter(challengeIdentifier);
  return fillInAnswers(emptyChallenge, userAnswers);
};

export const GetUserChallenge = {
  execute: getUserChallenge,
};
