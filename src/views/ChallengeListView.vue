<template>
  <div id="app-container">
    <Header />
    <main>
      <button
        :to="$route.params.countryCode"
        v-for="challengeIndex of Object.keys(challenges)"
        :key="challengeIndex"
        @click="goToChallenge(parseInt(challengeIndex) + 1)"
      >
        Challenge {{ parseInt(challengeIndex) + 1 }}
      </button>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { QUIZZ_DATA } from "@/quizzData";
import { Challenge, CountryCodes } from "@/models";

export default defineComponent({
  name: "ChallengeList",
  components: { Header, Footer },
  data: function () {
    return {
      challenges: new Array<Challenge>(),
    };
  },
  methods: {
    goToChallenge: function (challengeNumber: number) {
      this.$router.push({
        path: `/${this.$route.params.countryCode}/${challengeNumber}`,
      });
    },
  },
  mounted: function () {
    const countryCode = this.$route.params.countryCode as CountryCodes;
    if (!Object.values(CountryCodes).includes(countryCode)) {
      this.$router.replace("/");
    } else {
      this.challenges = QUIZZ_DATA[countryCode];
    }
  },
});
</script>

<style lang="scss"></style>
