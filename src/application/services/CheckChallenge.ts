import {
  ChallengeService,
  CheckedChallenge,
  CheckQuestion,
  UncheckedChallenge,
} from "@/domain";

const checkChallenge: (
  uncheckedChallenge: UncheckedChallenge,
  checker: CheckQuestion
) => Promise<CheckedChallenge> = (uncheckedChallenge, checker) => {
  return ChallengeService.check(uncheckedChallenge, checker);
};

export const CheckChallenge = {
  execute: checkChallenge,
};
