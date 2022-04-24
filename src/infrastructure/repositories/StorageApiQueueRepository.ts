import { CorrectAnswersCountStatisticsEvent } from "@/application/ports";
import { ApiQueueRepository } from "@/domain";
import { Storage } from "@capacitor/storage";

const STORAGE_KEY = "API_QUEUE";

const create = (): ApiQueueRepository => ({
  get: async () => {
    const storedQueue = (await Storage.get({ key: STORAGE_KEY })).value;
    if (!storedQueue) return [];
    return JSON.parse(storedQueue) as Array<CorrectAnswersCountStatisticsEvent>;
  },
  save: (events: CorrectAnswersCountStatisticsEvent[]) => {
    return Storage.set({
      key: STORAGE_KEY,
      value: JSON.stringify(events),
    });
  },
  delete: () => {
    return Storage.remove({ key: STORAGE_KEY });
  },
});

export const StorageApiQueueRepository = {
  create,
};
