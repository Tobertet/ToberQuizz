import {
  CorrectAnswersCountStatisticsEvent,
  StatisticsCollector,
} from "@/application/ports";
import { ApiQueueRepository } from "@/domain";
import { SupabaseClient } from "@supabase/supabase-js";

export class SupabaseStatisticsCollector implements StatisticsCollector {
  constructor(
    private readonly apiQueueRepository: ApiQueueRepository,
    private readonly supabaseClient: SupabaseClient
  ) {}

  async collect(event: CorrectAnswersCountStatisticsEvent): Promise<void> {
    const storedEvents = await this.loadEvents();
    await this.storeEvents([...storedEvents, event]);
    await this.sendStoredEvents();
  }

  private async sendStoredEvents(): Promise<void> {
    const storedEvents = await this.loadEvents();

    const { error } = await this.supabaseClient.from("correct_answers").insert(
      storedEvents.map((event) => ({
        country_code: event.countryCode,
        challenge_number: event.challengeNumber,
        correct_answers_count: event.correctAnswersCount,
      })),
      { returning: "minimal" }
    );

    if (!error) {
      await this.clearEvents();
    }
  }

  private async loadEvents(): Promise<CorrectAnswersCountStatisticsEvent[]> {
    return await this.apiQueueRepository.get();
  }

  private async storeEvents(
    events: CorrectAnswersCountStatisticsEvent[]
  ): Promise<void> {
    await this.apiQueueRepository.save(events);
  }

  private async clearEvents(): Promise<void> {
    await this.apiQueueRepository.delete();
  }
}
