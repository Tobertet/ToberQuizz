<script lang="ts">
import { onMounted, Ref, ref, watch } from "vue";
import { Challenge, CountryCodes } from "@/models";
import axios from "axios";

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

  const loadChallenge = async () => {
    const challengeURL = `${process.env.VUE_APP_QUIZZ_RESOURCES_BUCKET}/${countryCode.value}/${challengeNumber.value}/challenge.json`;
    const data = await (await axios.get(challengeURL)).data;
    challenge.value = data;
  };

  return {
    challenge,
  };
}
</script>
