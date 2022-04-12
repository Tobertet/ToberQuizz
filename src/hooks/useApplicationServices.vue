<script lang="ts">
import { GetUserChallenge, CheckChallenge } from "@/application/services";
import {
  StorageAnswerRepository,
  RestChallengeRepository,
  Argon2HashingAlgorithm,
} from "@/infrastructure";

const answerRepository = new StorageAnswerRepository();
const challengeRepository = new RestChallengeRepository(
  process.env.VUE_APP_QUIZZ_RESOURCES_BUCKET || ""
);

const hashingAlgorithm = new Argon2HashingAlgorithm();

const getUserChallenge = new GetUserChallenge(
  challengeRepository,
  answerRepository
);

const checkChallenge = new CheckChallenge(hashingAlgorithm);

export default function useApplicationServices() {
  return {
    getUserChallenge,
    checkChallenge,
  };
}
</script>
