import {
  CorrectAnswersCountStatisticsEvent,
  StatisticsCollector,
} from "@/application/ports";
import { ApiQueueRepository } from "@/domain";
import { Capacitor } from "@capacitor/core";
import { Storage } from "@capacitor/storage";
import { SupabaseClient } from "@supabase/supabase-js";

const STORAGE_KEY = "STATISTICS_OPT_IN";

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
  const userOptedIn = await isEnabled();
  if (!userOptedIn) return;

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

const isEnabled = async () => {
  // This line causes e2e tests to fail
  if (!Capacitor.isNativePlatform()) return true;
  const storedOptIn = await Storage.get({ key: STORAGE_KEY });
  if (!storedOptIn) return false;
  const isOptinEnabled: boolean | null = JSON.parse(
    storedOptIn.value as string
  );
  return !!isOptinEnabled;
};

const setEnabled = (isEnabled: boolean) =>
  Storage.set({ key: STORAGE_KEY, value: JSON.stringify(isEnabled) });

const create = (
  apiQueueRepository: ApiQueueRepository,
  supabaseClient: SupabaseClient
): StatisticsCollector => ({
  collect: async (event: CorrectAnswersCountStatisticsEvent) => {
    const storedEvents = await loadEvents(apiQueueRepository);
    await storeEvents([...storedEvents, event], apiQueueRepository);
    await sendStoredEvents(apiQueueRepository, supabaseClient);
  },
  isEnabled,
  setEnabled,
  flush: () => sendStoredEvents(apiQueueRepository, supabaseClient),
});

export const SupabaseStatisticsCollector = {
  create,
};
