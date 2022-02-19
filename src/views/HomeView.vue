<template>
  <div id="view-container">
    <div id="logo-container">
      <img alt="ToberQuizz logo" src="/logo256x256.png" />
      <div>
        <p v-html="t('HOME_VIEW.FREE_CHALLENGES')"></p>
        <p v-html="t('HOME_VIEW.ETHICAL_TECHNOLOGY')"></p>
      </div>
    </div>
    <div>
      <p class="regular list-heading">{{ t("HOME_VIEW.SELECT_A_COUNTRY") }}</p>
      <div
        class="list-item"
        v-for="countryCode of Object.keys(quizzData)"
        :key="countryCode"
        @click="goToChallengeListView(countryCode)"
      >
        <p>{{ t(`COUNTRY_LIST.${countryCode}`) }}</p>
        <ArrowRight />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { QUIZZ_DATA } from "@/quizzData";
import { useI18n } from "vue-i18n";
import { CountryCodes } from "@/models";
import { useRouter } from "vue-router";
import ArrowRight from "@/components/icons/ArrowRight.vue";

export default defineComponent({
  components: { ArrowRight },
  setup: () => {
    const quizzData = QUIZZ_DATA;
    const { t } = useI18n();
    const router = useRouter();

    const goToChallengeListView = (countryCode: CountryCodes) => {
      router.push({
        path: `/${countryCode}`,
      });
    };

    return {
      quizzData,
      t,
      goToChallengeListView,
    };
  },
});
</script>

<style scoped lang="scss">
#view-container {
  padding: 32px 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
  max-width: 512px;
  margin: auto;
  #logo-container {
    text-align: center;
    > div {
      margin-top: -50px;
    }
    img {
      max-width: 256px;
    }
    p {
      margin: 0;
      font-size: 20px;
    }
  }
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
