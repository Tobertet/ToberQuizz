<script lang="ts">
import { onMounted, Ref, ref, watch } from "vue";
import { Challenge, CountryCodes } from "@/models";
import axios from "axios";
import { useRouter } from "vue-router";

const EMPTY_CHALLENGE = {
  description: "",
  questions: [],
  startingDate: "",
};

export default function useChallenge(
  challengeNumber: Ref<number>,
  countryCode: Ref<CountryCodes>
): { challenge: Ref<Challenge> } {
  const challenge = ref<Challenge>(EMPTY_CHALLENGE);

  const router = useRouter();

  onMounted(() => {
    if (!challengeNumber.value || !countryCode.value) {
      return;
    }
    loadChallenge();
  });

  watch([challengeNumber, countryCode], () => {
    if (!challengeNumber.value || !countryCode.value) {
      return;
    }
    loadChallenge();
  });

  const loadChallenge = async () => {
    challenge.value = EMPTY_CHALLENGE;
    const challengeURL = `${process.env.VUE_APP_QUIZZ_RESOURCES_BUCKET}/${countryCode.value}/${challengeNumber.value}/challenge.json`;
    try {
      const data = await (await axios.get(challengeURL)).data;
      challenge.value = data;
    } catch (e) {
      router.replace("/");
    }
  };

  return {
    challenge,
  };
}
</script>
