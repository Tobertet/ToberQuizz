<script lang="ts">
import { Ref, ref, watch } from "vue";
import { Challenge, CheckedAnswer, CountryCodes } from "@/models";
import { Argon2Utils } from "@/utils/Argon2Utils";
import useStorageAnswers from "./useStorageAnswers.vue";

export default function useCheckedAnswers(
  countryCode: Ref<CountryCodes>,
  challengeNumber: Ref<number>,
  challenge: Ref<Challenge>
) {
  const checkedAnswers = ref<Array<CheckedAnswer | undefined>>([]);

  const { storageAnswers } = useStorageAnswers(challengeNumber, countryCode);

  watch([storageAnswers, challenge], async () => {
    if (challenge.value.questions.length > 0) {
      checkedAnswers.value = await Argon2Utils.checkAnswers(
        storageAnswers.value,
        challenge.value.questions
      );
    }
  });

  const checkAnswer = (answer: string, questionNumber: number) => {
    const newStorageAnswers = [...storageAnswers.value];
    newStorageAnswers[questionNumber - 1] = answer;
    storageAnswers.value = newStorageAnswers;
  };

  return {
    checkedAnswers,
    checkAnswer,
  };
}
</script>
