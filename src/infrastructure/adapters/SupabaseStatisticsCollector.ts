import {
  CorrectAnswersCountStatisticsEvent,
  StatisticsCollector,
} from "@/application/ports";
import { ApiQueueRepository } from "@/domain";
import { SupabaseClient } from "@supabase/supabase-js";

const loadEvents = async (
  apiQueueRepository: ApiQueueRepository
): Promise<CorrectAnswersCountStatisticsEvent[]> => {
  return await apiQueueRepository.get();
};

const storeEvents = async (
  events: CorrectAnswersCountStatisticsEvent[],
  apiQueueRepository: ApiQueueRepository
): Promise<void> => {
  await apiQueueRepository.save(events);
};

const clearEvents = async (
  apiQueueRepository: ApiQueueRepository
): Promise<void> => {
  await apiQueueRepository.delete();
};

const sendStoredEvents = async (
  apiQueueRepository: ApiQueueRepository,
  supabaseClient: SupabaseClient
): Promise<void> => {
  const storedEvents = await loadEvents(apiQueueRepository);

  const { error } = await supabaseClient.from("correct_answers").insert(
    storedEvents.map((event) => ({
      country_code: event.countryCode,
      challenge_number: event.challengeNumber,
      correct_answers_count: event.correctAnswersCount,
    })),
    { returning: "minimal" }
  );

  if (!error) {
    await clearEvents(apiQueueRepository);
  }
};

const create = (
  apiQueueRepository: ApiQueueRepository,
  supabaseClient: SupabaseClient
): StatisticsCollector => ({
  collect: async (event: CorrectAnswersCountStatisticsEvent) => {
    const storedEvents = await loadEvents(apiQueueRepository);
    await storeEvents([...storedEvents, event], apiQueueRepository);
    await sendStoredEvents(apiQueueRepository, supabaseClient);
  },
});

export const SupabaseStatisticsCollector = {
  create,
};
