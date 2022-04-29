import { CountryCode } from "@/domain";

export type CorrectAnswersCountStatisticsEvent = {
  countryCode: CountryCode;
  challengeNumber: number;
  correctAnswersCount: number;
};

export type StatisticsCollector = {
  collect: (event: CorrectAnswersCountStatisticsEvent) => Promise<void>;
  flush: () => Promise<void>;
  isEnabled: () => Promise<boolean>;
  setEnabled: (isEnabled: boolean) => Promise<void>;
};
