<script lang="ts">
import { onMounted, Ref, ref, watch } from "vue";
import { Storage } from "@capacitor/storage";
import { CountryCodes } from "@/models";

export default function useAnswers(
  challengeNumber: Ref<number>,
  countryCode: Ref<CountryCodes>
): { answers: Ref<string[]>; updateAnswers: (newAnswers: string[]) => void } {
  const answers = ref(new Array<string>());

  onMounted(async () => {
    loadAnswers();
  });

  watch([challengeNumber, countryCode], async () => {
    loadAnswers();
  });

  const loadAnswers = async () => {
    const rawAnswers = (
      await Storage.get({
        key: `${countryCode.value}_${challengeNumber.value}`,
      })
    ).value;
    if (!rawAnswers) return;
    answers.value = JSON.parse(rawAnswers);
  };

  const updateAnswers = (newAnswers: string[]) => {
    answers.value = newAnswers;
    Storage.set({
      key: `${countryCode.value}_${challengeNumber.value}`,
      value: JSON.stringify(newAnswers),
    });
  };

  return {
    answers,
    updateAnswers,
  };
}
</script>
