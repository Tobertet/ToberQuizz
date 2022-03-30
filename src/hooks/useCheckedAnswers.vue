<script lang="ts">
import { computed, Ref, ref, watch } from "vue";
import { Challenge, CheckedAnswer, CountryCodes } from "@/models";
import { Argon2Utils } from "@/utils/Argon2Utils";
import useStorageAnswers from "./useStorageAnswers.vue";
import useApiQueue from "./useApiQueue.vue";

export default function useCheckedAnswers(
  countryCode: Ref<CountryCodes>,
  challengeNumber: Ref<number>,
  challenge: Ref<Challenge>
) {
  const checkedAnswers = ref<Array<CheckedAnswer | undefined>>([]);

  const { storageAnswers } = useStorageAnswers(challengeNumber, countryCode);

  const { pushTicsCountEvent } = useApiQueue();

  watch([storageAnswers, challenge], async () => {
    if (challenge.value.questions.length > 0) {
      checkedAnswers.value = await Argon2Utils.checkAnswers(
        storageAnswers.value,
        challenge.value.questions
      );
    }
  });

  const checkAnswer = async (answer: string, questionNumber: number) => {
    const isValid = await Argon2Utils.isAnswerValid(
      answer,
      challenge.value.questions[questionNumber - 1]
    );
    if (isValid) {
      pushTicsCountEvent({
        countryCode: countryCode.value,
        challengeNumber: challengeNumber.value,
        ticsCount: countOfValidAnswers.value + 1,
      });
    }

    const newStorageAnswers = [...storageAnswers.value];
    newStorageAnswers[questionNumber - 1] = answer;
    storageAnswers.value = newStorageAnswers;
  };

  const countOfValidAnswers = computed(
    () =>
      checkedAnswers.value.filter(
        (checkedAnswer) => checkedAnswer && checkedAnswer.isValid
      ).length
  );

  return {
    checkedAnswers,
    checkAnswer,
    countOfValidAnswers,
  };
}
</script>
