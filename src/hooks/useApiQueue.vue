<script lang="ts">
import { Storage } from "@capacitor/storage";
import { CountryCodes } from "@/models";
import { createClient } from "@supabase/supabase-js";

interface CorrectAnswersCountQueueEvent {
  countryCode: CountryCodes;
  challengeNumber: number;
  correctAnswersCount: number;
}

const supabase = createClient(
  // eslint-disable-next-line
  process.env.VUE_APP_SUPABASE_URL!,
  // eslint-disable-next-line
  process.env.VUE_APP_SUPABASE_ANON_KEY!
);

export default function useApiQueue(): {
  pushCorrectAnswersCountEvent: (event: CorrectAnswersCountQueueEvent) => void;
} {
  const loadQueue = async () => {
    const storedQueue = (await Storage.get({ key: "API_QUEUE" })).value;
    if (!storedQueue) return [];
    return JSON.parse(storedQueue) as Array<CorrectAnswersCountQueueEvent>;
  };

  const storeQueue = (queue: CorrectAnswersCountQueueEvent[]) => {
    return Storage.set({ key: "API_QUEUE", value: JSON.stringify(queue) });
  };

  const clearQueue = () => {
    return Storage.remove({ key: "API_QUEUE" });
  };

  const pushCorrectAnswersCountEvent = async (
    event: CorrectAnswersCountQueueEvent
  ) => {
    const apiQueue = await loadQueue();
    const newApiQueue = [...apiQueue, event];
    await storeQueue(newApiQueue);
    sendCorrectAnswersCountEvents();
  };

  const sendCorrectAnswersCountEvents = async () => {
    const correctAnswersCountEvents = await loadQueue();
    const { error } = await supabase.from("correct_answers").insert(
      correctAnswersCountEvents.map((event) => ({
        country_code: event.countryCode,
        challenge_number: event.challengeNumber,
        correct_answers_count: event.correctAnswersCount,
      })),
      { returning: "minimal" }
    );
    if (!error) {
      await clearQueue();
    }
  };

  return {
    pushCorrectAnswersCountEvent,
  };
}
</script>
