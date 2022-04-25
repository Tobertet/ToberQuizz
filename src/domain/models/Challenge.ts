import {
  CountryCode,
  CheckedQuestion,
  UnansweredQuestion,
  UncheckedQuestion,
} from "@/domain";

export type ChallengeIdentifier = Readonly<{
  countryCode: CountryCode;
  challengeNumber: number;
}>;

export type EmptyChallenge = ChallengeIdentifier &
  Readonly<{
    description: string;
    questions: UnansweredQuestion[];
  }>;
export type CheckedChallenge = ChallengeIdentifier &
  Readonly<{
    description: string;
    questions: (UnansweredQuestion | CheckedQuestion)[];
  }>;
export type UncheckedChallenge = ChallengeIdentifier &
  Readonly<{
    description: string;
    questions: (UnansweredQuestion | CheckedQuestion | UncheckedQuestion)[];
  }>;
export type Challenge = EmptyChallenge | CheckedChallenge | UncheckedChallenge;
