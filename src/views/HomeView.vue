<template>
  <div id="view-container">
    <div id="logo-container">
      <img alt="ToberQuizz logo" src="/logo256x256.png" />
      <div>
        <p v-html="t('HOME_VIEW.FREE_CHALLENGES')"></p>
        <p v-html="t('HOME_VIEW.ETHICAL_TECHNOLOGY')"></p>
      </div>
    </div>

    <p id="contribute-button">
      <a
        href="https://github.com/Tobertet/ToberQuizz/wiki/Proposing-a-new-challenge"
        rel="noopener noreferrer"
        target="_blank"
      >
        {{ t("HOME_VIEW.CONTRIBUTE") }}
      </a>
    </p>

    <div>
      <p class="regular list-heading">{{ t("HOME_VIEW.SELECT_A_COUNTRY") }}</p>
      <div
        class="list-item"
        v-for="countryCode of quizzCountries"
        :key="countryCode"
        @click="goToChallengeListView(countryCode)"
      >
        <p>
          {{
            t(`COUNTRY_LIST.${countryCode}`) +
            " (" +
            t(`LANGUAGE_LIST.${countryCode}`) +
            ")"
          }}
        </p>
        <ArrowRight />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { CountryCode } from "@/domain";
import { useRouter } from "vue-router";
import ArrowRight from "@/components/icons/ArrowRight.vue";
import { changeI18nLocale } from "@/i18n";

export default defineComponent({
  components: { ArrowRight },
  setup: () => {
    const quizzCountries = Object.values(CountryCode);
    const { t } = useI18n();
    const router = useRouter();

    const goToChallengeListView = (countryCode: CountryCode) => {
      router.push({
        path: `/${countryCode}`,
      });
    };

    onMounted(() => {
      changeI18nLocale();
    });

    return {
      quizzCountries,
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

#contribute-button {
  a {
    text-align: center;
    font-size: 20px;
    color: var(--warning-color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
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
  svg {
    padding: 4px;
  }
  p {
    font-size: 18px;
  }
}
</style>
