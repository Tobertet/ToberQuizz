<template>
  <div class="columns-select">
    <label for="numColumns">Imágenes por fila: </label>
    <select v-model="tableColumns" name="numColumns" id="numColumns">
      <option
        v-for="columns in availableColumns"
        :key="columns"
        :value="columns"
      >
        {{ columns }}
      </option>
    </select>
  </div>
  <div
    id="questions-table"
    data-testid="questions-table"
    :style="{ 'grid-template-columns': `repeat(${tableColumns}, 1fr)` }"
  >
    <Question
      v-for="(question, index) in challenge.questions"
      :key="index"
      :question="question"
      :questionNumber="index + 1"
      :checkedAnswer="checkedAnswers[index]"
      :challengeNumber="challengeNumber"
      :countryCode="countryCode"
      @answer="emitAnswer"
    >
    </Question>
  </div>
  <div class="columns-select">
    <label for="numColumns">Imágenes por fila: </label>
    <select v-model="tableColumns" name="numColumns" id="numColumns">
      <option
        v-for="columns in availableColumns"
        :key="columns"
        :value="columns"
      >
        {{ columns }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import Question from "../components/Question.vue";
import { Challenge, CheckedAnswer } from "../models";

export default defineComponent({
  components: { Question },
  emits: ["answer"],
  props: {
    checkedAnswers: {
      type: Object as PropType<CheckedAnswer[]>,
      required: true,
    },
    challenge: {
      type: Object as PropType<Challenge>,
      required: true,
    },
    challengeNumber: { type: Number, required: true },
    countryCode: { type: String, required: true },
  },
  setup: function (props, context) {
    const availableColumns = ref(
      window.innerWidth > 992 ? [3, 4, 5, 6] : [1, 2]
    );
    const tableColumns = ref(window.innerWidth > 992 ? 4 : 1);

    const emitAnswer = (answer: string, questionNumber: number) => {
      context.emit("answer", answer, questionNumber);
    };

    return { tableColumns, availableColumns, emitAnswer };
  },
});
</script>

<style lang="scss">
#questions-table {
  display: grid;
  gap: 24px;
  row-gap: 36px;
}
.columns-select {
  text-align: end;
  margin-block: 24px;
}
label {
  font-size: 14px;
  font-weight: 300;
}
</style>
