<template>
  <h2 class="regular">
    {{ t("CHALLENGE_VIEW.CHALLENGE", { challengeNumber }) }}
  </h2>

  <div class="info-box">
    <p>
      {{ t("CHALLENGE_VIEW.SHARE_HOOK") }}
    </p>
    <p>
      <a
        :href="
          'whatsapp://send?text=' +
          t('CHALLENGE_VIEW.SHARE_MESSAGE', {
            countryCode,
            countryName: t(`COUNTRY_LIST.${countryCode}`),
            challengeNumber,
          })
        "
        data-action="share/whatsapp/share"
        target="_blank"
      >
        {{ t("HOME_VIEW.SHARE") }} <ShareIcon :color="'#1366c9'"
      /></a>
    </p>
  </div>

  <p class="description">
    {{ challenge.description }}
  </p>
  <p>{{ t("CHALLENGE_VIEW.HOOK") }}</p>

  <!-- <p v-if="!hasBeenCompleted" class="danger-box">
    {{ t("CHALLENGE_VIEW.CHALLENGE_NOT_RESOLVED") }}
  </p> -->

  <hr />
  <QuestionsTable
    :challengeNumber="challengeNumber"
    :countryCode="countryCode"
    :challenge="challenge"
    @answer="onAnswer"
  />

  <div id="sticky-bar">
    <div>
      {{ t("CHALLENGE_VIEW.CORRECT_ANSWERS") }}:
      {{ correctAnswersCount }}
      /
      {{ challenge.questions.length }}
    </div>
  </div>
</template>

<script lang="ts">
import useChallenge from "@/hooks/useCheckedUserChallenge.vue";
import QuestionsTable from "@/components/QuestionsTable.vue";
import ShareIcon from "@/components/icons/ShareIcon.vue";
import { defineComponent, Ref, toRefs } from "vue";
import { useI18n } from "vue-i18n";
import { CountryCode } from "@/domain";

export default defineComponent({
  props: {
    challengeNumber: { type: Number, required: true },
    countryCode: { type: String, required: true },
  },
  components: { QuestionsTable, ShareIcon },
  setup: (props) => {
    const { challengeNumber, countryCode } = toRefs(props);

    const { t } = useI18n();

    const { challenge, correctAnswersCount } = useChallenge(
      countryCode as Ref<CountryCode>,
      challengeNumber
    );

    const onAnswer = (answer: string, questionNumber: number) => {
      console.log("onAnswer");
    };

    return {
      challenge,
      correctAnswersCount,
      onAnswer,
      t,
    };
  },
});
</script>

<style scoped lang="scss">
#sticky-bar {
  position: fixed;
  bottom: 0%;
  right: 32px;
  background: var(--primary-color);
  padding: 8px;
  font-size: 20px;
  color: #fff;
}

.description {
  white-space: pre-wrap;
}

.info-box {
  @media (min-width: 500px) {
    display: none;
  }
  border-left: 5px solid var(--info-color);
  background-color: rgba(#1366c9, 0.1);
  text-align: left;
  border-radius: 5px;
  padding: 4px 20px;
  margin: 1em 0;
  p {
    color: var(--info-color);
    a {
      font-size: 20px;
      color: var(--info-color);
      display: flex;
      align-items: center;
    }
  }
}

.danger-box {
  border-left: 5px solid var(--danger-color);
  color: var(--danger-color);
  background-color: rgba(#c91b13, 0.1);
  padding: 20px;
  text-align: left;
  border-radius: 5px;
}

h2 {
  margin: 0;
  color: var(--primary-color);
  font-size: 24px;
}

p {
  font-size: 18px;
}
</style>
