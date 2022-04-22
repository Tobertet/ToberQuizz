import { CorrectAnswersCountStatisticsEvent } from "@/application/ports";
import { ApiQueueRepository } from "@/domain";
import { Storage } from "@capacitor/storage";

export class StorageApiQueueRepository implements ApiQueueRepository {
  private static readonly STORAGE_KEY = "API_QUEUE";

  async get(): Promise<CorrectAnswersCountStatisticsEvent[]> {
    const storedQueue = (
      await Storage.get({ key: StorageApiQueueRepository.STORAGE_KEY })
    ).value;
    if (!storedQueue) return [];
    return JSON.parse(storedQueue) as Array<CorrectAnswersCountStatisticsEvent>;
  }

  async save(events: CorrectAnswersCountStatisticsEvent[]): Promise<void> {
    return Storage.set({
      key: StorageApiQueueRepository.STORAGE_KEY,
      value: JSON.stringify(events),
    });
  }

  async delete(): Promise<void> {
    return Storage.remove({ key: StorageApiQueueRepository.STORAGE_KEY });
  }
}
