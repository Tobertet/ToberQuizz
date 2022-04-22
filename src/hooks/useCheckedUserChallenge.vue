<script lang="ts">
import { computed, ComputedRef, onMounted, Ref, ref, watch } from "vue";
import { useApplicationServices } from "@/hooks";
import { CountryCode, Challenge, isCorrectlyAnsweredQuestion } from "@/domain";

export function useCheckedUserChallenge(
  countryCode: Ref<CountryCode>,
  challengeNumber: Ref<number>
) {
  const challenge = ref<Challenge>({
    description: "",
    questions: [],
  });

  const { getUserChallenge, checkChallenge } = useApplicationServices();

  onMounted(async () => {
    const userChallenge = await getUserChallenge({
      countryCode: countryCode.value,
      challengeNumber: challengeNumber.value,
    });
    challenge.value = await checkChallenge(userChallenge);
    console.log(challenge.value);
  });

  watch([challengeNumber, countryCode], async () => {
    const userChallenge = await getUserChallenge({
      countryCode: countryCode.value,
      challengeNumber: challengeNumber.value,
    });
    challenge.value = await checkChallenge(userChallenge);
  });

  const correctAnswersCount: ComputedRef<number> = computed(
    () => challenge.value.questions.filter(isCorrectlyAnsweredQuestion).length
  );

  return {
    challenge,
    correctAnswersCount,
  };
}
</script>
