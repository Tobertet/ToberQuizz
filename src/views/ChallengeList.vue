<template>
  <header>
    <Banner />
    <hr />
  </header>
  <main>
    <button
      :to="$route.params.countryCode"
      v-for="challenge of Object.keys(challenges)"
      :key="challenge"
      @click="goToChallenge(challenge)"
    >
      Challenge {{ parseInt(challenge) + 1 }}
    </button>
  </main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";
import { QUIZZ_DATA } from "@/quizzData";
import { Challenge, CountryCodes } from "@/models";

export default defineComponent({
  name: "ChallengeList",
  components: { Banner, Footer },
  data: function () {
    return {
      challenges: new Array<Challenge>(),
    };
  },
  methods: {
    goToChallenge: function (challengeIndex: number) {
      this.$router.push({
        path: `/${this.$route.params.countryCode}/${challengeIndex}`,
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
