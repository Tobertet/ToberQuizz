<script lang="ts">
import {
  StorageAnswerRepository,
  StorageApiQueueRepository,
  RestChallengeRepository,
} from "@/infrastructure";

const answerRepository = StorageAnswerRepository.create();
const challengeRepository = RestChallengeRepository.create(
  process.env.VUE_APP_QUIZZ_RESOURCES_BUCKET || ""
);
const storageApiQueueRepository = StorageApiQueueRepository.create();

export default function useDomainRepositories() {
  return {
    answerRepository,
    challengeRepository,
    storageApiQueueRepository,
  };
}
</script>
