<script lang="ts">
import { onMounted, Ref, ref, watch } from "vue";
import { Challenge, CountryCodes } from "@/models";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useChallenge(
  challengeNumber: Ref<number>,
  countryCode: Ref<CountryCodes>
): { challenge: Ref<Challenge> } {
  const challenge = ref<Challenge>({
    description: "",
    questions: [],
    startingDate: "",
  });

  const router = useRouter();

  onMounted(() => {
    loadChallenge();
  });

  watch([challengeNumber, countryCode], () => {
    loadChallenge();
  });

  const loadChallenge = async () => {
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
