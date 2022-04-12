import { Answer, CountryCode, AnswerRepository } from "@/domain";
import { Storage } from "@capacitor/storage";

export class StorageAnswerRepository implements AnswerRepository {
  async get(
    countryCode: CountryCode,
    challengeNumber: number
  ): Promise<Answer[]> {
    const storedAnswers = (
      await Storage.get({
        key: `${countryCode}_${challengeNumber}`,
      })
    ).value;

    return !storedAnswers ? [] : JSON.parse(storedAnswers);
  }
}
