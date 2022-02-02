<template>
  <h2 class="regular">Desafío nº {{ challengeNumber }}</h2>
  <p>
    {{ challenge.description }}
  </p>
  <p>¿Eres capaz de adivinar todos?</p>

  <hr />
  <QuestionsTable
    :challengeNumber="challengeNumber"
    :countryCode="countryCode"
    :challenge="challenge"
    :checkedAnswers="checkedAnswers"
    @answer="onAnswer"
  />

  <div id="sticky-bar">
    <div>
      Aciertos:
      {{ countOfValidAnswers }}
      /
      {{ challenge.questions.length }}
    </div>
  </div>
</template>

<script lang="ts">
import useAnswers from "@/hooks/useAnswers.vue";
import useCheckedAnswers from "@/hooks/useCheckedAnswers.vue";
import useChallenge from "@/hooks/useChallenge.vue";
import QuestionsTable from "@/components/QuestionsTable.vue";
import { CountryCodes } from "@/models";
import { computed, defineComponent, Ref, toRefs } from "vue";

export default defineComponent({
  props: {
    challengeNumber: { type: Number, required: true },
    countryCode: { type: String, required: true },
  },
  components: { QuestionsTable },
  setup: (props) => {
    const { challengeNumber, countryCode } = toRefs(props);

    const { answers, updateAnswers } = useAnswers(
      challengeNumber,
      countryCode as Ref<CountryCodes>
    );

    const { challenge } = useChallenge(
      challengeNumber,
      countryCode as Ref<CountryCodes>
    );

    const { checkedAnswers } = useCheckedAnswers(answers, challenge);

    const countOfValidAnswers = computed(
      () =>
        checkedAnswers.value.filter(
          (checkedAnswer) => checkedAnswer && checkedAnswer.isValid
        ).length
    );

    const onAnswer = (answer: string, questionNumber: number) => {
      const newAnswers = [...answers.value];
      newAnswers[questionNumber - 1] = answer;
      updateAnswers(newAnswers);
    };

    return { challenge, checkedAnswers, countOfValidAnswers, onAnswer };
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

h2 {
  margin: 0;
  color: var(--primary-color);
  font-size: 24px;
}

p {
  font-size: 18px;
}
</style>
