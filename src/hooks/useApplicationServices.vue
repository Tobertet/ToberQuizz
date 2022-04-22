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
  UserAnswersGetter,
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
const storageApiQueueRepository = new StorageApiQueueRepository();

const hashingAlgorithm = new Argon2HashingAlgorithm();
const statisticsCollector = new SupabaseStatisticsCollector(
  storageApiQueueRepository,
  supabaseClient
);

const checkChallenge = new CheckChallenge(hashingAlgorithm);
const answerQuestion = new AnswerQuestion(
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
