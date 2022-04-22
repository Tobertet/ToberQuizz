<template>
  <AppBar />
  <div id="view-container">
    <h2>
      {{ t("CHALLENGE_LIST_VIEW.CHALLENGES_IN") }}
      <span class="regular">{{
        t(`COUNTRY_LIST.${countryCode}`) +
        " (" +
        t(`LANGUAGE_LIST.${countryCode}`) +
        ")"
      }}</span>
    </h2>
    <p id="why-toberquizz">
      <a
        class="regular"
        rel="noopener noreferrer"
        target="_blank"
        href="https://robertmengual.com/projects;project=toberquizz"
        >{{ t("CHALLENGE_LIST_VIEW.WHY_TOBERQUIZZ") }}</a
      >
    </p>
    <div>
      <p class="regular list-heading">
        {{ t("CHALLENGE_LIST_VIEW.SELECT_A_CHALLENGE") }}
      </p>
      <div class="list-item not-allowed">
        <p class="gray">
          {{
            t("CHALLENGE_LIST_VIEW.CHALLENGE", {
              challengeNumber: challenges.length + 1,
            })
          }}
          <span class="danger">({{ t("MONTHS.MAY") }})</span>
        </p>
        <ArrowRight :color="'#a0a0a0'" />
      </div>
      <div
        class="list-item pointer"
        v-for="challengeIndex of Object.keys(challenges).reverse()"
        :key="challengeIndex"
        @click="goToChallengeView(parseInt(challengeIndex) + 1)"
      >
        <p>
          {{
            t("CHALLENGE_LIST_VIEW.CHALLENGE", {
              challengeNumber: parseInt(challengeIndex) + 1,
            })
          }}
        </p>
        <div class="end-icons">
          <StatisticsIcon
            @click.stop="
              goToChallengeStatisticsView(parseInt(challengeIndex) + 1)
            "
          />
          <ArrowRight />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { CountryCode } from "@/domain";
import { useRoute, useRouter } from "vue-router";
import ArrowRight from "@/components/icons/ArrowRight.vue";
import StatisticsIcon from "@/components/icons/StatisticsIcon.vue";
import AppBar from "@/components/AppBar.vue";
import { useI18n } from "vue-i18n";
import axios from "axios";
import { changeI18nLocale } from "@/i18n";

export default defineComponent({
  components: { ArrowRight, AppBar, StatisticsIcon },
  setup: () => {
    const router = useRouter();
    const route = useRoute();
    const { t } = useI18n();

    const challenges = ref(new Array<number>());
    const countryCode = ref<CountryCode>(CountryCode.WorldWide);

    const goToChallengeView = (challengeNumber: number) => {
      router.push({
        path: `/${route.params.countryCode}/${challengeNumber}`,
      });
    };

    const goToChallengeStatisticsView = (challengeNumber: number) => {
      router.push({
        path: `/stats/${route.params.countryCode}/${challengeNumber}`,
      });
    };

    onMounted(() => {
      readAndSetUrlParams();
      changeI18nLocale(countryCode.value);
      loadChallenges();
    });

    watch([route], () => {
      readAndSetUrlParams();
      changeI18nLocale(countryCode.value);
      loadChallenges();
    });

    // TODO Take a look at router guards
    const readAndSetUrlParams = () => {
      const rawCountryCodeParam = (route.params.countryCode as string) || "";
      if (!rawCountryCodeParam) return;

      if (rawCountryCodeParam.toUpperCase() != rawCountryCodeParam) {
        router.replace(`/${rawCountryCodeParam.toUpperCase()}`);
        return;
      }
      const countryCodeParam = rawCountryCodeParam as CountryCode;

      if (Object.values(CountryCode).includes(countryCodeParam)) {
        countryCode.value = countryCodeParam;
      } else {
        router.replace("/");
      }
    };

    const loadChallenges = async () => {
      const challengeURL = `${process.env.VUE_APP_QUIZZ_RESOURCES_BUCKET}/${countryCode.value}/challenges.json`;
      const data = await (await axios.get(challengeURL)).data;
      challenges.value = data;
    };

    return {
      goToChallengeView,
      challenges,
      t,
      countryCode,
      goToChallengeStatisticsView,
    };
  },
});
</script>

<style scoped lang="scss">
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

.end-icons {
  display: flex;
  flex-direction: row;
  svg {
    padding: 4px;
  }
}
</style>
