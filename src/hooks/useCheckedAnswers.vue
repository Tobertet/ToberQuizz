<script lang="ts">
import { onMounted, Ref, ref, watch } from "vue";
import { Challenge, CheckedAnswer } from "@/models";
import { Argon2Utils } from "@/utils/Argon2Utils";

export default function useCheckedAnswers(
  answers: Ref<string[]>,
  challenge: Ref<Challenge>
): { checkedAnswers: Ref<Array<CheckedAnswer | undefined>> } {
  const checkedAnswers = ref<Array<CheckedAnswer | undefined>>([]);

  onMounted(async () => {
    checkedAnswers.value = await Argon2Utils.checkAnswers(
      answers.value,
      challenge.value.questions
    );
  });

  watch([answers, challenge], async () => {
    checkedAnswers.value = await Argon2Utils.checkAnswers(
      answers.value,
      challenge.value.questions
    );
  });

  return {
    checkedAnswers,
  };
}
</script>
