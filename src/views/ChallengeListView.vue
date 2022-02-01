<template>
  <div id="app-bar">
    <img alt="ToberQuizz logo" src="/secondary-logo.png" />
  </div>
  <div id="view-container">
    <h2>Desafíos en <span class="regular">España</span></h2>
    <p id="why-toberquizz"><a class="regular">¿Por qué ToberQuizz?</a></p>
    <div>
      <p class="regular list-heading">Selecciona un desafío</p>
      <div
        class="list-item"
        v-for="challengeIndex of Object.keys(challenges)"
        :key="challengeIndex"
        @click="goToChallenge(parseInt(challengeIndex) + 1)"
      >
        <p>Desafío {{ parseInt(challengeIndex) + 1 }}</p>
        <ArrowRight />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { QUIZZ_DATA } from "@/quizzData";
import { Challenge, CountryCodes } from "@/models";
import { useRoute, useRouter } from "vue-router";
import ArrowRight from "@/components/icons/ArrowRight.vue";

export default defineComponent({
  components: { ArrowRight },
  setup: () => {
    const quizzData = QUIZZ_DATA;
    const router = useRouter();
    const route = useRoute();

    const challenges = ref(new Array<Challenge>());

    const goToChallenge = (challengeNumber: number) => {
      router.push({
        path: `${route.params.countryCode}/${challengeNumber}`,
      });
    };

    onMounted(() => {
      const countryCode = route.params.countryCode as CountryCodes;
      if (!Object.values(CountryCodes).includes(countryCode)) {
        router.replace("/");
      } else {
        challenges.value = quizzData[countryCode];
      }
    });

    return {
      goToChallenge,
      challenges,
    };
  },
});
</script>

<style scoped lang="scss">
#app-bar {
  height: 64px;
  border-bottom: 1px solid var(--primary-color);
  padding: 0 10%;
  display: flex;
  align-items: center;
}

#why-toberquizz {
  margin-bottom: 32px;
  margin-top: 8px;
  a {
    margin-bottom: 8px;
    color: var(--warning-color);
    font-size: 14px;
    cursor: pointer;
  }
}

h2 {
  font-weight: 300;
  margin: 0;
  color: var(--primary-color);
  font-size: 20px;
}

#view-container {
  padding: 32px;
  max-width: 512px;
  margin: auto;
}

.list-heading {
  border-bottom: 1px solid var(--primary-color);
  padding-bottom: 8px;
  margin: 0;
}

.list-item {
  border-bottom: 1px solid var(--gray-color);
  padding-left: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 18px;
  }
}
</style>
