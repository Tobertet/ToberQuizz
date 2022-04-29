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
  UncheckedAnswer,
} from "@/domain";
import useApplicationPorts from "./useApplicationPorts.vue";
import useDomainRepositories from "./useDomainRepositories.vue";

export default function useApplicationServices() {
  const { answerRepository, challengeRepository } = useDomainRepositories();
  const { hashingAlgorithm, statisticsCollector } = useApplicationPorts();

  const checkChallenge: (
    challenge: UncheckedChallenge
  ) => Promise<CheckedChallenge> = (challenge) =>
    CheckChallenge.execute(challenge, hashingAlgorithm.check);

  const answerQuestion: (
    challenge: Challenge,
    questionNumber: number,
    answer: UncheckedAnswer
  ) => Promise<Challenge> = (challenge, questionNumber, answer) =>
    AnswerQuestion.execute(
      hashingAlgorithm.check,
      statisticsCollector,
      answerRepository,
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

  return {
    getEmptyChallenge,
    getUserChallenge,
    checkChallenge,
    answerQuestion,
  };
}
</script>
