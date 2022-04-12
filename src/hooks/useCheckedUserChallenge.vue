<script lang="ts">
import { computed, ComputedRef, onMounted, Ref, ref, watch } from "vue";
import useApplicationServices from "./useApplicationServices.vue";
import { CountryCode, Challenge } from "@/domain";

export default function useCheckedUserChallenge(
  countryCode: Ref<CountryCode>,
  challengeNumber: Ref<number>
) {
  const challenge = ref<Challenge>(new Challenge());

  const { getUserChallenge, checkChallenge } = useApplicationServices();

  onMounted(async () => {
    const userChallenge = await getUserChallenge.execute(
      countryCode.value,
      challengeNumber.value
    );
    challenge.value = await checkChallenge.execute(userChallenge);
  });

  watch([challengeNumber, countryCode], async () => {
    const userChallenge = await getUserChallenge.execute(
      countryCode.value,
      challengeNumber.value
    );
    challenge.value = await checkChallenge.execute(userChallenge);
  });

  const correctAnswersCount: ComputedRef<number> = computed(
    () =>
      challenge.value.questions.filter((question) => question.isCorrect).length
  );

  return {
    challenge,
    correctAnswersCount,
  };
}
</script>
