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
    if (
      countryCode.value === CountryCodes.Spain &&
      challengeNumber.value === 1
    ) {
      await migrateLegacyAnswers();
    }
    loadAnswers();
  });

  watch([challengeNumber, countryCode], async (to, from) => {
    if (
      countryCode.value === CountryCodes.Spain &&
      challengeNumber.value === 1
    ) {
      await migrateLegacyAnswers();
    }
    loadAnswers();
  });

  const migrateLegacyAnswers = async () => {
    const rawAnswers = (await Storage.get({ key: "ESP_001" })).value;
    if (!rawAnswers) return;
    await Storage.set({
      key: "ES_1",
      value: rawAnswers,
    });
    return Storage.remove({ key: "ESP_001" });
  };

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
