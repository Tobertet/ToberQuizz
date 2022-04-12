<script lang="ts">
import { GetUserChallenge, CheckChallenge } from "@/application/services";
import { AnswerQuestion } from "@/application/services/AnswerQuestion";
import {
  StorageAnswerRepository,
  RestChallengeRepository,
  Argon2HashingAlgorithm,
  SupabaseChallengeProgressRepository,
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
const challengeProgressRepository = new SupabaseChallengeProgressRepository(
  supabaseClient
);

const hashingAlgorithm = new Argon2HashingAlgorithm();

const getUserChallenge = new GetUserChallenge(
  challengeRepository,
  answerRepository
);
const checkChallenge = new CheckChallenge(hashingAlgorithm);
const answerQuestion = new AnswerQuestion(
  hashingAlgorithm,
  challengeProgressRepository,
  answerRepository
);

export default function useApplicationServices() {
  return {
    getUserChallenge,
    checkChallenge,
    answerQuestion,
  };
}
</script>
