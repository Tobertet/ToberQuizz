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
      <div
        class="list-item not-allowed"
        v-for="upcomingChallenge of upcomingChallenges"
        :key="upcomingChallenge.challengeNumber"
      >
        <p class="gray">
          {{
            t("CHALLENGE_LIST_VIEW.CHALLENGE", {
              challengeNumber: upcomingChallenge.challengeNumber,
            })
          }}
          <span class="danger"
            >({{ t(getMonthLiteral(upcomingChallenge.startingDate)) }})</span
          >
        </p>
        <div class="end-icons">
          <span class="danger">{{ upcomingChallenge.remainingTime }}</span>
          <ArrowRight :color="'#a0a0a0'" />
        </div>
      </div>
      <div
        class="list-item pointer"
        v-for="availableChallenge of availableChallenges"
        :key="availableChallenge.challengeNumber"
        @click="goToChallengeView(availableChallenge.challengeNumber)"
      >
        <p>
          {{
            t("CHALLENGE_LIST_VIEW.CHALLENGE", {
              challengeNumber: availableChallenge.challengeNumber,
            })
          }}
        </p>
        <div class="end-icons">
          <StatisticsIcon
            @click.stop="
              goToChallengeStatisticsView(availableChallenge.challengeNumber)
            "
          />
          <ArrowRight />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, watch } from "vue";
import { CountryCode } from "@/domain";
import { useRoute, useRouter } from "vue-router";
import ArrowRight from "@/components/icons/ArrowRight.vue";
import StatisticsIcon from "@/components/icons/StatisticsIcon.vue";
import AppBar from "@/components/AppBar.vue";
import { useI18n } from "vue-i18n";
import axios from "axios";
import { changeI18nLocale } from "@/i18n";

type ChallengeData = {
  challengeNumber: number;
  startingDate: string;
  remainingTime?: string;
};

const zeroPad = (number: number) => {
  return String(number).padStart(2, "0");
};

const getRemainingTimeCounter = (date: Date): string => {
  const now = Date.now();
  let delta = Math.abs(date.getTime() - now) / 1000;
  const days = Math.floor(delta / 86400);
  delta -= days * 86400;
  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;
  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;
  const seconds = Math.round(delta % 60); // in theory the modulus is not required

  return `${zeroPad(days)}:${zeroPad(hours)}:${zeroPad(minutes)}:${zeroPad(
    seconds
  )}`;
};

const months = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

const getMonthLiteral = (time: string) => {
  const monthIndex = new Date(time).getMonth();
  return `MONTHS.${months[monthIndex]}`;
};

export default defineComponent({
  components: { ArrowRight, AppBar, StatisticsIcon },
  setup: () => {
    const router = useRouter();
    const route = useRoute();
    const { t } = useI18n();
    let intervalID: NodeJS.Timer;

    const challenges = ref(new Array<ChallengeData>());
    const availableChallenges = ref(new Array<ChallengeData>());
    const upcomingChallenges = ref(new Array<ChallengeData>());
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
      intervalID = setInterval(() => {
        updateChallenges();
      }, 1000);
    });

    watch([route], () => {
      readAndSetUrlParams();
      changeI18nLocale(countryCode.value);
      loadChallenges();
    });

    onUnmounted(() => {
      clearInterval(intervalID);
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
      const data = (await axios.get<Array<ChallengeData>>(challengeURL)).data;
      challenges.value = data;
      updateChallenges();
    };

    const updateChallenges = () => {
      const now = Date.now();
      availableChallenges.value = challenges.value
        .filter(
          (challenge) => new Date(challenge.startingDate).getTime() <= now
        )
        .reverse();
      upcomingChallenges.value = challenges.value
        .filter((challenge) => new Date(challenge.startingDate).getTime() > now)
        .reverse()
        .map((upcomingChallenge) => ({
          ...upcomingChallenge,
          remainingTime: getRemainingTimeCounter(
            new Date(upcomingChallenge.startingDate)
          ),
        }));
    };

    return {
      goToChallengeView,
      availableChallenges,
      upcomingChallenges,
      t,
      countryCode,
      goToChallengeStatisticsView,
      getMonthLiteral,
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
  align-items: center;
  svg {
    padding: 4px;
  }
}
</style>
