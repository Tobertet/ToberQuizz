import {
  AnswerRepository,
  ChallengeIdentifier,
  UncheckedAnswer,
} from "@/domain";
import { Storage } from "@capacitor/storage";

const loadRawAnswers: (
  challengeIdentifier: ChallengeIdentifier
) => Promise<string[]> = async ({ countryCode, challengeNumber }) => {
  const storedAnswers = (
    await Storage.get({
      key: `${countryCode}_${challengeNumber}`,
    })
  ).value;
  return !storedAnswers ? [] : JSON.parse(storedAnswers);
};

const storeRawAnswers: (
  challengeIdentifier: ChallengeIdentifier,
  rawAnswers: (string | undefined)[]
) => Promise<void> = async ({ countryCode, challengeNumber }, rawAnswers) => {
  return Storage.set({
    key: `${countryCode}_${challengeNumber}`,
    value: JSON.stringify(rawAnswers),
  });
};

const create: () => AnswerRepository = () => ({
  get: async (challengeIdentifier) => {
    const rawAnswers = await loadRawAnswers(challengeIdentifier);
    return rawAnswers.map<UncheckedAnswer>((rawAnswer) => ({
      text: rawAnswer,
    }));
  },
  save: async (challengeIdentifier, challenge) => {
    const rawAnswers = challenge.questions.map(
      (question) => question.answer?.text
    );
    return storeRawAnswers(challengeIdentifier, rawAnswers);
  },
});

export const StorageAnswerRepository = {
  create,
};
