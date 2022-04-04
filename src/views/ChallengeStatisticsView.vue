<template>
  <AppBar />
  <div id="view-container">
    <ChallengeStatistics
      v-if="challengeNumber && countryCode"
      :challengeNumber="challengeNumber"
      :countryCode="countryCode"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { CountryCodes } from "../models";
import AppBar from "@/components/AppBar.vue";
import ChallengeStatistics from "@/components/ChallengeStatistics.vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  components: { AppBar, ChallengeStatistics },
  setup: () => {
    const countryCode = ref<CountryCodes>();
    const challengeNumber = ref<number>();

    const router = useRouter();
    const route = useRoute();

    const getUrlParams = () => {
      if (route.params.countryCode && route.params.challengeNumber) {
        countryCode.value = (
          route.params.countryCode as string
        ).toUpperCase() as CountryCodes;
        challengeNumber.value = parseInt(
          route.params.challengeNumber as string
        );
      }
    };

    onMounted(() => {
      getUrlParams();
      if (
        countryCode.value &&
        !Object.values(CountryCodes).includes(countryCode.value)
      ) {
        router.replace("/");
        return;
      }
    });

    watch([route], () => {
      getUrlParams();
      if (
        countryCode.value &&
        !Object.values(CountryCodes).includes(countryCode.value)
      ) {
        router.replace("/");
        return;
      }
    });

    return {
      countryCode,
      challengeNumber,
    };
  },
});
</script>

<style lang="scss">
#view-container {
  padding: 32px;
  max-width: 512px;
  margin: auto;
  @media (min-width: 992px) {
    max-width: 992px;
  }
}
</style>
