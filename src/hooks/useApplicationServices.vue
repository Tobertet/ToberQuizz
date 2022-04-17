<script lang="ts">
import {
  GetUserChallenge,
  CheckChallenge,
  AnswerQuestion,
} from "@/application/services";
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

export default function useApplicationServices() {
  return {
    getUserChallenge,
    checkChallenge,
    answerQuestion,
  };
}
</script>
