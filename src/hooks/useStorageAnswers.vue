<script lang="ts">
import { onMounted, Ref, ref, watch } from "vue";
import { Storage } from "@capacitor/storage";
import { CountryCodes } from "@/models";

export default function useStorageAnswers(
  challengeNumber: Ref<number>,
  countryCode: Ref<CountryCodes>
) {
  const storageAnswers = ref<string[]>([]);

  onMounted(() => {
    loadAnswers();
  });

  watch([challengeNumber, countryCode], () => {
    if (challengeNumber.value && countryCode.value) {
      loadAnswers();
    }
  });

  watch(storageAnswers, (newValue) => {
    if (newValue === undefined || newValue === []) {
      return;
    }
    storeAnswers(newValue);
  });

  const loadAnswers = async () => {
    const rawAnswers = (
      await Storage.get({
        key: `${countryCode.value}_${challengeNumber.value}`,
      })
    ).value;
    if (!rawAnswers) {
      storageAnswers.value = [];
      return;
    }
    storageAnswers.value = JSON.parse(rawAnswers);
  };

  const storeAnswers = (answers: string[]) => {
    Storage.set({
      key: `${countryCode.value}_${challengeNumber.value}`,
      value: JSON.stringify(answers),
    });
  };

  return {
    storageAnswers,
  };
}
</script>
