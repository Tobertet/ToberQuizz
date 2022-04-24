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
import { CountryCode } from "@/domain";
import AppBar from "@/components/AppBar.vue";
const ChallengeStatistics = () =>
  import("@/components/ChallengeStatistics.vue");
import { useRoute, useRouter } from "vue-router";
import { changeI18nLocale } from "@/i18n";

export default defineComponent({
  components: { AppBar, ChallengeStatistics },
  setup: () => {
    const countryCode = ref<CountryCode>();
    const challengeNumber = ref<number>();

    const router = useRouter();
    const route = useRoute();

    onMounted(() => {
      readAndSetUrlParams();
      changeI18nLocale(countryCode.value);
    });

    watch([route], () => {
      readAndSetUrlParams();
      changeI18nLocale(countryCode.value);
    });

    // TODO Take a look at router guards
    const readAndSetUrlParams = () => {
      if (!route.params.countryCode || !route.params.challengeNumber) return;

      const countryCodeParam = (
        (route.params.countryCode as string) || ""
      ).toUpperCase() as CountryCode;
      const challengeNumberParam = parseInt(
        route.params.challengeNumber as string
      );

      if (
        Object.values(CountryCode).includes(countryCodeParam) &&
        !isNaN(challengeNumberParam)
      ) {
        countryCode.value = countryCodeParam;
        challengeNumber.value = challengeNumberParam;
      } else {
        router.replace("/");
      }
    };

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
