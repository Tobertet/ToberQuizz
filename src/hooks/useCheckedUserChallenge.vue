<script lang="ts">
import { computed, ComputedRef, onMounted, Ref, ref, watch } from "vue";
import { useApplicationServices } from "@/hooks";
import { CountryCode, Challenge, QuestionService } from "@/domain";

export default function useCheckedUserChallenge(
  countryCode: Ref<CountryCode>,
  challengeNumber: Ref<number>
) {
  const challenge = ref<Challenge>({
    countryCode: CountryCode.WorldWide,
    challengeNumber: 1,
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
  });

  watch([challengeNumber, countryCode], async () => {
    const userChallenge = await getUserChallenge({
      countryCode: countryCode.value,
      challengeNumber: challengeNumber.value,
    });
    challenge.value = await checkChallenge(userChallenge);
  });

  const correctAnswersCount: ComputedRef<number> = computed(
    () =>
      challenge.value.questions.filter(QuestionService.isCorrectlyAnswered)
        .length
  );

  return {
    challenge,
    correctAnswersCount,
  };
}
</script>
