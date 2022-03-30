<script lang="ts">
import { Storage } from "@capacitor/storage";
import { CountryCodes } from "@/models";

interface TicsCountQueueEvent {
  countryCode: CountryCodes;
  challengeNumber: number;
  ticsCount: number;
}

export default function useApiQueue(): {
  pushTicsCountEvent: (event: TicsCountQueueEvent) => void;
} {
  const loadQueue = async () => {
    const storedQueue = (await Storage.get({ key: "API_QUEUE" })).value;
    if (!storedQueue) return [];
    return JSON.parse(storedQueue) as Array<TicsCountQueueEvent>;
  };

  const storeQueue = (queue: TicsCountQueueEvent[]) => {
    Storage.set({ key: "API_QUEUE", value: JSON.stringify(queue) });
  };

  const pushTicsCountEvent = async (event: TicsCountQueueEvent) => {
    const apiQueue = await loadQueue();
    const newApiQueue = [...apiQueue, event];
    storeQueue(newApiQueue);
  };

  return {
    pushTicsCountEvent,
  };
}
</script>
