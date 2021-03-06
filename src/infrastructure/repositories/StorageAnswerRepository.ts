import {
  AnswerRepository,
  ChallengeIdentifier,
  ChallengeService,
  UncheckedAnswer,
} from "@/domain";
import { Storage } from "@capacitor/storage";

const loadRawAnswers: (
  challengeIdentifier: ChallengeIdentifier
) => Promise<(string | null)[]> = async ({ countryCode, challengeNumber }) => {
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
    return rawAnswers.map<UncheckedAnswer | undefined>((rawAnswer) =>
      rawAnswer
        ? {
            text: rawAnswer,
          }
        : undefined
    );
  },
  save: async (challenge) => {
    const rawAnswers = challenge.questions.map(
      (question) => question.answer?.text
    );
    return storeRawAnswers(
      ChallengeService.getIdentifier(challenge),
      rawAnswers
    );
  },
});

export const StorageAnswerRepository = {
  create,
};
