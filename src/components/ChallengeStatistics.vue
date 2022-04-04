<template>
  <h2 class="regular">
    {{ t("CHALLENGE_VIEW.CHALLENGE", { challengeNumber }) }}
  </h2>
  <p class="description">
    {{ challenge.description }}
  </p>
  <p>{{ t("CHALLENGE_VIEW.HOOK") }}</p>

  <hr />

  <h3 class="regular">
    {{ t("CHALLENGE_STATISTICS_VIEW.CHALLENGE_PROGRESS") }}
  </h3>

  <div style="margin-bottom: 40px">
    <BarChart
      v-if="chartData"
      :chartData="chartData"
      :options="chartOptions"
      :height="800"
    />
  </div>

  <div id="sticky-bar">
    <div>
      {{ t("CHALLENGE_VIEW.CORRECT_ANSWERS") }}:
      {{ countOfValidAnswers }}
      /
      {{ challenge.questions.length }}
    </div>
  </div>
</template>

<script lang="ts">
import useCheckedAnswers from "@/hooks/useCheckedAnswers.vue";
import useChallenge from "@/hooks/useChallenge.vue";
import { CountryCodes } from "@/models";
import { defineComponent, ref, Ref, toRefs, watch } from "vue";
import { useI18n } from "vue-i18n";
import { supabase } from "@/supabase";
import { BarChart } from "vue-chart-3";
import {
  Chart,
  BarController,
  ChartOptions,
  ChartData,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip);

export default defineComponent({
  props: {
    challengeNumber: { type: Number, required: true },
    countryCode: { type: String, required: true },
  },
  components: { BarChart },
  setup: (props) => {
    const { challengeNumber, countryCode } = toRefs(props);

    const chartData = ref<ChartData>();

    const { t } = useI18n();

    const { challenge } = useChallenge(
      challengeNumber,
      countryCode as Ref<CountryCodes>
    );

    const { checkedAnswers, countOfValidAnswers } = useCheckedAnswers(
      countryCode as Ref<CountryCodes>,
      challengeNumber,
      challenge
    );

    watch([challenge], async () => {
      const questionsCount = challenge.value.questions.length;

      const { data } = await supabase.rpc("challenge_statistics", {
        country_code_arg: countryCode.value,
        challenge_number_arg: challengeNumber.value,
      });

      //TODO if there is an error I should show a message

      chartData.value = {
        labels: Array.from({ length: questionsCount }, (_, i) => i + 1),
        datasets: [
          {
            data: data?.map((item) => item.percentage) || [],
          },
        ],
      };
    });

    const chartOptions: ChartOptions = {
      indexAxis: "y",
      elements: {
        bar: {
          backgroundColor: (ctx) => {
            return ctx.dataIndex + 1 === countOfValidAnswers.value
              ? "#ffa316"
              : "#4aab79";
          },
        },
      },
      scales: {
        y: {
          title: {
            display: true,
            text: t("CHALLENGE_STATISTICS_VIEW.COUNT_OF_CORRECT_ANSWERS"),
          },
        },
        x: {
          title: {
            display: true,
            text: t("CHALLENGE_STATISTICS_VIEW.USERS_PERCENTAGE"),
          },
          min: 0,
          max: 100,
          ticks: {
            callback: (value) => {
              return value + "%";
            },
          },
        },
      },
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          displayColors: false,
          callbacks: {
            title: (tooltipItem) =>
              t("CHALLENGE_STATISTICS_VIEW.X_CORRECT_ANSWERS", {
                count: tooltipItem[0].label,
              }),
            label: (tooltipItem) => tooltipItem.formattedValue + "%",
          },
        },
      },
    };

    return {
      challenge,
      checkedAnswers,
      countOfValidAnswers,
      t,
      chartData,
      chartOptions,
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

h2 {
  margin: 0;
  color: var(--primary-color);
  font-size: 24px;
}

h3 {
  color: var(--primary-color);
  font-size: 20px;
  text-align: center;
  margin-bottom: 0;
}

p {
  font-size: 18px;
}
</style>
