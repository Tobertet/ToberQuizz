<script lang="ts">
import {
  GetUserChallenge,
  CheckChallenge,
  AnswerQuestion,
  GetEmptyChallenge,
} from "@/application/services";
import {
  EmptyChallenge,
  ChallengeIdentifier,
  EmptyChallengeGetter,
  UncheckedChallenge,
  CheckedChallenge,
  Challenge,
  CountryCode,
  UncheckedAnswer,
} from "@/domain";
import {
  StorageAnswerRepository,
  Argon2HashingAlgorithm,
  StorageApiQueueRepository,
  SupabaseStatisticsCollector,
  RestChallengeRepository,
} from "@/infrastructure";
import { createClient } from "@supabase/supabase-js";

const supabaseClient = createClient(
  // eslint-disable-next-line
  process.env.VUE_APP_SUPABASE_URL!,
  // eslint-disable-next-line
  process.env.VUE_APP_SUPABASE_ANON_KEY!
);

const answerRepository = StorageAnswerRepository.create();
const challengeRepository = RestChallengeRepository.create(
  process.env.VUE_APP_QUIZZ_RESOURCES_BUCKET || ""
);
const storageApiQueueRepository = StorageApiQueueRepository.create();

const hashingAlgorithm = Argon2HashingAlgorithm.create();
const statisticsCollector = SupabaseStatisticsCollector.create(
  storageApiQueueRepository,
  supabaseClient
);

const checkChallenge: (
  challenge: UncheckedChallenge
) => Promise<CheckedChallenge> = (challenge) =>
  CheckChallenge.execute(challenge, hashingAlgorithm.check);

const answerQuestion: (
  countryCode: CountryCode,
  challengeNumber: number,
  challenge: Challenge,
  questionNumber: number,
  answer: UncheckedAnswer
) => Promise<Challenge> = (
  countryCode,
  challengeNumber,
  challenge,
  questionNumber,
  answer
) =>
  AnswerQuestion.execute(
    hashingAlgorithm.check,
    statisticsCollector,
    answerRepository,
    countryCode,
    challengeNumber,
    challenge,
    questionNumber,
    answer
  );

const getUserChallenge: (
  challengeIdentifier: ChallengeIdentifier
) => Promise<UncheckedChallenge> = (challengeIdentifier) =>
  GetUserChallenge.execute(
    challengeRepository.getEmpty,
    answerRepository.get,
    challengeIdentifier
  );

const getEmptyChallenge: (
  challengeIdentifier: ChallengeIdentifier,
  options?: { emptyChallengeGetter: EmptyChallengeGetter }
) => Promise<EmptyChallenge> = (challengeIdentifier, options) =>
  GetEmptyChallenge.execute(
    options?.emptyChallengeGetter || challengeRepository.getEmpty,
    challengeIdentifier
  );

export default function useApplicationServices() {
  return {
    getEmptyChallenge,
    getUserChallenge,
    checkChallenge,
    answerQuestion,
  };
}
</script>
