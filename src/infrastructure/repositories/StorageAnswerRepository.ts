import { Answer, CountryCode, AnswerRepository, Challenge } from "@/domain";
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

  save(
    countryCode: CountryCode,
    challengeNumber: number,
    challenge: Challenge
  ): Promise<void> {
    const plainAnswers = challenge.questions.map((question) => question.answer);
    return Storage.set({
      key: `${countryCode}_${challengeNumber}`,
      value: JSON.stringify(plainAnswers),
    });
  }
}
