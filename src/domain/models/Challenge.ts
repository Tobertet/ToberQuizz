import {
  CountryCode,
  CheckedQuestion,
  UnansweredQuestion,
  UncheckedQuestion,
} from "@/domain";

export type ChallengeIdentifier = {
  countryCode: CountryCode;
  challengeNumber: number;
};

export type EmptyChallenge = {
  description: string;
  questions: UnansweredQuestion[];
};
export type CheckedChallenge = {
  description: string;
  questions: (UnansweredQuestion | CheckedQuestion)[];
};
export type UncheckedChallenge = {
  description: string;
  questions: (UnansweredQuestion | CheckedQuestion | UncheckedQuestion)[];
};
export type Challenge = EmptyChallenge | CheckedChallenge | UncheckedChallenge;
