import { Storage } from "@capacitor/storage";
import axios from "axios";
import { Challenge, CountryCodes } from "./models";
import { Argon2Utils } from "./utils/Argon2Utils";
import { supabase } from "@/supabase";

interface CorrectAnswersCountQueueEvent {
  countryCode: CountryCodes;
  challengeNumber: number;
  correctAnswersCount: number;
}

const initialChallenges: Array<{
  countryCode: CountryCodes;
  challengeNumber: number;
}> = [
  { countryCode: CountryCodes.WorldWide, challengeNumber: 1 },
  { countryCode: CountryCodes.Spain, challengeNumber: 1 },
  { countryCode: CountryCodes.Spain, challengeNumber: 2 },
  { countryCode: CountryCodes.Spain, challengeNumber: 3 },
];

export const sendPreviousRightAnswersCount = async () => {
  const check = (await Storage.get({ key: "PreviousCorrectAnswersCheck" }))
    .value;

  if (check) return;

  for (const initialChallenge of initialChallenges) {
    const rawAnswers = (
      await Storage.get({
        key: `${initialChallenge.countryCode}_${initialChallenge.challengeNumber}`,
      })
    ).value;

    if (!rawAnswers) continue;

    const storedAnswers = JSON.parse(rawAnswers);

    const challengeURL = `${process.env.VUE_APP_QUIZZ_RESOURCES_BUCKET}/${initialChallenge.countryCode}/${initialChallenge.challengeNumber}/challenge.json`;
    const challengeData = (await (
      await axios.get(challengeURL)
    ).data) as Challenge;

    const checkedAnswers = await Argon2Utils.checkAnswers(
      storedAnswers,
      challengeData.questions
    );

    const correctAnswersCount = checkedAnswers.filter(
      (checkedAnswer) => checkedAnswer && checkedAnswer.isValid
    ).length;

    if (correctAnswersCount === 0) continue;

    const correctAnswersCountEvents: CorrectAnswersCountQueueEvent[] = [];

    for (let i = 1; i <= correctAnswersCount; i++) {
      correctAnswersCountEvents.push({
        countryCode: initialChallenge.countryCode,
        challengeNumber: initialChallenge.challengeNumber,
        correctAnswersCount: i,
      });
    }

    const { error } = await supabase.from("correct_answers").insert(
      correctAnswersCountEvents.map((event) => ({
        country_code: event.countryCode,
        challenge_number: event.challengeNumber,
        correct_answers_count: event.correctAnswersCount,
      })),
      { returning: "minimal" }
    );

    if (error) {
      let storedQueue = new Array<CorrectAnswersCountQueueEvent>();
      const rawStoredQueue = (await Storage.get({ key: "API_QUEUE" })).value;
      if (rawStoredQueue)
        storedQueue = JSON.parse(
          rawStoredQueue
        ) as Array<CorrectAnswersCountQueueEvent>;

      const newApiQueue = [...storedQueue, ...correctAnswersCountEvents];

      await Storage.set({
        key: "API_QUEUE",
        value: JSON.stringify(newApiQueue),
      });
    }
  }

  await Storage.set({
    key: "PreviousCorrectAnswersCheck",
    value: "CHECK",
  });
};
