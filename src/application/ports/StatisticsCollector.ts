import { CountryCode } from "@/domain";

export interface CorrectAnswersCountStatisticsEvent {
  countryCode: CountryCode;
  challengeNumber: number;
  correctAnswersCount: number;
}

export interface StatisticsCollector {
  collect(event: CorrectAnswersCountStatisticsEvent): Promise<void>;
}
