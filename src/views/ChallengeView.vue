<template>
  <AppBar />
  <div id="view-container">
    <Challenge
      v-if="countryCode && challengeNumber"
      :countryCode="countryCode"
      :challengeNumber="challengeNumber"
    />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import Challenge from "../components/Challenge.vue";
import Footer from "../components/Footer.vue";
import AppBar from "@/components/AppBar.vue";
import { changeI18nLocale } from "@/i18n";
import { CountryCode } from "@/domain";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  components: { Challenge, Footer, AppBar },
  setup: () => {
    const countryCode = ref<CountryCode>();
    const challengeNumber = ref<number>();

    const route = useRoute();
    const router = useRouter();

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
