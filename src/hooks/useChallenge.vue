<script lang="ts">
import { onMounted, Ref, ref, watch } from "vue";
import { Challenge, CountryCodes } from "@/models";
import { QUIZZ_DATA } from "@/quizzData";

export default function useChallenge(
  challengeNumber: Ref<number>,
  countryCode: Ref<CountryCodes>
): { challenge: Ref<Challenge> } {
  const challenge = ref<Challenge>({
    description: "",
    questions: [],
    startingDate: "",
  });

  onMounted(() => {
    loadChallenge();
  });

  watch([challengeNumber, countryCode], () => {
    loadChallenge();
  });

  const loadChallenge = () => {
    challenge.value = QUIZZ_DATA[countryCode.value][challengeNumber.value - 1];
  };

  return {
    challenge,
  };
}
</script>
