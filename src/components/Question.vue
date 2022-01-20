<template>
  <div class="question">
    <div class="image-container" data-testid="image-container" :class="status">
      <img
        :alt="question.altText"
        :src="`/resources/${countryCode}/${challengeNumber}/${questionNumber}.png`"
      />
    </div>
    <div class="input-container">
      <label>{{ questionNumber }} - </label
      ><input :disabled="status === 'valid'" v-model="inputText" />
      <button :disabled="status === 'valid'" @click="emitAnswer">✔️</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, onMounted, ref, watch, toRefs } from "vue";
import { Answer, Question } from "../models";

enum Status {
  Error = "error",
  Clean = "clean",
  Valid = "valid",
}

export default defineComponent({
  name: "Question",
  props: {
    question: {
      type: Object as PropType<Question>,
      required: true,
    },
    answer: {
      type: Object as PropType<Answer>,
    },
    questionNumber: { type: Number, required: true },
    challengeNumber: { type: Number, required: true },
    countryCode: { type: String, required: true },
  },
  setup: (props, context) => {
    const { answer, questionNumber } = toRefs(props);

    const inputText = ref("");
    const status = ref(Status.Clean);

    const emitAnswer = () => {
      context.emit("answer", inputText.value, questionNumber.value);
    };

    const setAnswer = (answer?: Answer) => {
      inputText.value = answer?.text || "";
      status.value = !answer
        ? Status.Clean
        : answer.isValid
        ? Status.Valid
        : Status.Error;
    };

    onMounted(() => setAnswer(answer.value));

    watch(answer, () => setAnswer(answer.value));

    return {
      inputText,
      status,
      emitAnswer,
    };
  },
});
</script>

<style scoped lang="scss">
.question {
  max-width: 100%;
  text-align: center;
  > .image-container {
    max-width: 100%;
    height: 0;
    padding-bottom: calc(100% - 12px);
    border: 6px solid darkgray;
    &.valid {
      border-color: green;
    }
    &.error {
      border-color: red;
    }
    img {
      max-width: 100%;
    }
  }
  > .input-container {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    input {
      width: 70%;
      @media (max-width: 500px) {
        width: 65%;
      }
    }
  }
}
</style>
