<script lang="ts">
import {
  GetUserChallenge,
  CheckChallenge,
  AnswerQuestion,
  GetEmptyChallenge,
  EmptyChallengeGetter,
} from "@/application/services";
import { EmptyChallenge, ChallengeIdentifier, CountryCode } from "@/domain";
import {
  StorageAnswerRepository,
  RestChallengeRepository,
  Argon2HashingAlgorithm,
  StorageApiQueueRepository,
  SupabaseStatisticsCollector,
} from "@/infrastructure";
import { createClient } from "@supabase/supabase-js";

export const supabaseClient = createClient(
  // eslint-disable-next-line
  process.env.VUE_APP_SUPABASE_URL!,
  // eslint-disable-next-line
  process.env.VUE_APP_SUPABASE_ANON_KEY!
);

const answerRepository = new StorageAnswerRepository();
const challengeRepository = new RestChallengeRepository(
  process.env.VUE_APP_QUIZZ_RESOURCES_BUCKET || ""
);
const storageApiQueueRepository = new StorageApiQueueRepository();

const hashingAlgorithm = new Argon2HashingAlgorithm();
const statisticsCollector = new SupabaseStatisticsCollector(
  storageApiQueueRepository,
  supabaseClient
);

const getUserChallenge = new GetUserChallenge(
  challengeRepository,
  answerRepository
);
const checkChallenge = new CheckChallenge(hashingAlgorithm);
const answerQuestion = new AnswerQuestion(
  hashingAlgorithm,
  answerRepository,
  statisticsCollector
);

const getEmptyChallenge: (
  challengeIdentifier: ChallengeIdentifier,
  options?: { emptyChallengeGetter: EmptyChallengeGetter }
) => Promise<EmptyChallenge> = (challengeIdentifier, options) =>
  GetEmptyChallenge.execute(
    options?.emptyChallengeGetter || new RestChallengeRepository("").get,
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
