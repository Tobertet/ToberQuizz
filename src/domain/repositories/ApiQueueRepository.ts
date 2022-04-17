import { CorrectAnswersCountStatisticsEvent } from "@/application/ports";

export interface ApiQueueRepository {
  save(events: CorrectAnswersCountStatisticsEvent[]): Promise<void>;
  // TODO These events should be in the domain probably
  get(): Promise<CorrectAnswersCountStatisticsEvent[]>;
  delete(): Promise<void>;
}
