<template>
  <div id="app-container">
    <Header />
    <main>
      <Challenge
        v-if="challengeAvailable"
        :countryCode="countryCode"
        :challengeNumber="challengeNumber"
      />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CountryCodes } from "../models";
import Challenge from "../components/Challenge.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import { QUIZZ_DATA } from "@/quizzData";

export default defineComponent({
  components: { Challenge, Footer, Header },
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
#app-container {
  width: 80%;
  margin-inline: auto;
  @media (max-width: 500px) {
    width: 100%;
  }
}
</style>
