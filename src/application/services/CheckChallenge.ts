import {
  ChallengeUtils,
  CheckedChallenge,
  CheckedQuestion,
  UncheckedChallenge,
  UncheckedQuestion,
} from "@/domain";

const checkChallenge: (
  uncheckedChallenge: UncheckedChallenge,
  questionChecker: (question: UncheckedQuestion) => Promise<CheckedQuestion>
) => Promise<CheckedChallenge> = (uncheckedChallenge, questionChecker) => {
  return ChallengeUtils.checkChallenge(uncheckedChallenge, questionChecker);
};

export const CheckChallenge = {
  execute: checkChallenge,
};
