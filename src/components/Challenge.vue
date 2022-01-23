<template>
  <h2>Desafío nº {{ challengeNumber }}</h2>
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
  name: "Challenge",
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
  right: 10%;
  background: lightgray;
  padding: 4px;
  font-size: 1.2rem;
  border: 1px solid lightgray;
}
</style>
