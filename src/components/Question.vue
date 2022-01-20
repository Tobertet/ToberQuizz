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
      <button :disabled="status === 'valid'" @click="answerQuestion">✔️</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Answer, Question } from "../models";

enum Status {
  Error = "error",
  Clean = "clean",
  Valid = "valid",
}

export default defineComponent({
  name: "Question",
  data: () => {
    return {
      inputText: "",
      status: Status.Clean,
    };
  },
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
  watch: {
    answer: function (newValue: Answer | undefined) {
      this.setAnswer(newValue);
    },
  },
  methods: {
    answerQuestion: function () {
      this.$emit("answer", {
        text: this.inputText,
        questionNumber: this.questionNumber,
      });
    },
    setAnswer: function (answer?: Answer) {
      this.inputText = answer?.text || "";
      this.status = !answer
        ? Status.Clean
        : answer.isValid
        ? Status.Valid
        : Status.Error;
    },
  },
  mounted: function () {
    this.setAnswer(this.answer);
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
