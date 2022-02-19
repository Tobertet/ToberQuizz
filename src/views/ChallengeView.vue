<template>
  <AppBar />
  <div id="view-container">
    <Challenge
      v-if="challengeAvailable"
      :countryCode="countryCode"
      :challengeNumber="challengeNumber"
    />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CountryCodes } from "../models";
import Challenge from "../components/Challenge.vue";
import Footer from "../components/Footer.vue";
import { QUIZZ_DATA } from "@/quizzData";
import AppBar from "@/components/AppBar.vue";

export default defineComponent({
  components: { Challenge, Footer, AppBar },
  data: function () {
    return {
      countryCode: CountryCodes.Spain,
      challengeNumber: 1,
      challengeAvailable: false,
    };
  },
  mounted: function () {
    this.getUrlParams();
    if (!Object.values(CountryCodes).includes(this.countryCode)) {
      this.$router.replace("/");
      return;
    }
    if (!QUIZZ_DATA[this.countryCode][this.challengeNumber - 1]) {
      this.$router.replace("/");
      return;
    }
    this.challengeAvailable = true;
  },
  methods: {
    getUrlParams: function () {
      this.countryCode = (
        this.$route.params.countryCode as string
      ).toUpperCase() as CountryCodes;
      this.challengeNumber = parseInt(
        this.$route.params.challengeNumber as string
      );
    },
  },
  watch: {
    $route() {
      // this.getUrlParams();
    },
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