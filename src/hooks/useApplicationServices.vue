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
} from "@/domain";
import {
  StorageAnswerRepository,
  Argon2HashingAlgorithm,
  StorageApiQueueRepository,
  SupabaseStatisticsCollector,
  RestChallengeRepository,
} from "@/infrastructure";
import { createClient } from "@supabase/supabase-js";

export const supabaseClient = createClient(
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
  CheckChallenge.execute(challenge, hashingAlgorithm.checkQuestion);

const answerQuestion: (challenge: Challenge) => Promise<Challenge> = (
  challenge
) =>
  AnswerQuestion.execute(
    hashingAlgorithm,
    answerRepository,
    statisticsCollector
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

export function useApplicationServices() {
  return {
    getEmptyChallenge,
    getUserChallenge,
    checkChallenge,
    answerQuestion,
  };
}
</script>
