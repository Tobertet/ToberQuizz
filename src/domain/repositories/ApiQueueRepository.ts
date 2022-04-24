import { CorrectAnswersCountStatisticsEvent } from "@/application/ports";

export type ApiQueueRepository = {
  save(events: CorrectAnswersCountStatisticsEvent[]): Promise<void>;
  // TODO These events should be in the domain probably
  get(): Promise<CorrectAnswersCountStatisticsEvent[]>;
  delete(): Promise<void>;
};
