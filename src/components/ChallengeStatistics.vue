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

  <div class="info-box" v-if="optedIn === false">
    <p>
      {{ t("CHALLENGE_STATISTICS_VIEW.OPT_IN_BOX.TEXT_1") }}
    </p>
    <p>
      {{ t("CHALLENGE_STATISTICS_VIEW.OPT_IN_BOX.TEXT_2") }}
    </p>
    <p>
      <a role="button" class="button" @click="optIn">
        {{ t("CHALLENGE_STATISTICS_VIEW.OPT_IN_BOX.BUTTON") }}
      </a>
    </p>
  </div>

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
      {{ correctAnswersCount }}
      /
      {{ challenge.questions.length }}
    </div>
  </div>
</template>

<script lang="ts">
import { useCheckedUserChallenge } from "@/hooks";
import { CountryCode } from "@/domain";
import { defineComponent, onMounted, ref, Ref, toRefs, watch } from "vue";
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
import useApplicationPorts from "@/hooks/useApplicationPorts.vue";
import { useRouter } from "vue-router";

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
    const optedIn = ref<boolean>();

    const { t } = useI18n();

    const { challenge, correctAnswersCount } = useCheckedUserChallenge(
      countryCode as Ref<CountryCode>,
      challengeNumber
    );

    const router = useRouter();

    const { statisticsCollector } = useApplicationPorts();

    const optIn = async () => {
      await statisticsCollector.setEnabled(true);
      await statisticsCollector.flush();
      router.go(0);
    };

    onMounted(async () => {
      optedIn.value = await statisticsCollector.isEnabled();
    });

    watch([challenge], async () => {
      const questionsCount = challenge.value.questions.length;

      const { data } = await supabase.rpc("challenge_statistics", {
        country_code_arg: countryCode.value,
        challenge_number_arg: challengeNumber.value,
      });

      const processedData = data?.map((item, index, array) => {
        if (index === 0) return item;
        const processedItem = {
          percentage:
            array[index - 1].percentage < item.percentage
              ? array[index - 1].percentage
              : item.percentage,
        };
        return processedItem;
      });

      //TODO if there is an error I should show a message

      chartData.value = {
        labels: Array.from({ length: questionsCount }, (_, i) => i + 1),
        datasets: [
          {
            data: processedData?.map((item) => item.percentage) || [],
          },
        ],
      };
    });

    const chartOptions: ChartOptions = {
      indexAxis: "y",
      elements: {
        bar: {
          backgroundColor: (ctx) => {
            return optedIn.value &&
              ctx.dataIndex + 1 === correctAnswersCount.value
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
      correctAnswersCount,
      t,
      chartData,
      chartOptions,
      optedIn,
      optIn,
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

.info-box {
  border-left: 5px solid var(--info-color);
  background-color: rgba(#1366c9, 0.1);
  text-align: left;
  border-radius: 5px;
  padding: 4px 20px;
  margin: 1em 0;
  p {
    color: var(--info-color);
  }
  .button {
    padding: 8px 16px;
    background-color: var(--info-color);
    color: white;
    border-radius: 8px;
    display: inline-block;
    font-size: 18px;
    font-weight: 300;
    font-family: "Roboto";
  }
}
</style>
