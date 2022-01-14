<template>
  <div class="question">
    <div class="image-container" v-bind:class="status">
      <img
        v-bind:src="`/pictures/${countryCode}/${challengeIndex + 1}/${
          index + 1
        }.png`"
      />
    </div>
    <div class="input-container">
      <label>{{ index + 1 }} - </label
      ><input v-bind:disabled="status === 'valid'" v-model="inputText" />
      <button v-bind:disabled="status === 'valid'" @click="answerQuestion">
        V
      </button>
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
    },
    answer: {
      type: (Object as PropType<Answer>) || undefined,
    },
    index: Number,
    challengeIndex: Number,
    countryCode: { type: String },
  },
  watch: {
    answer: function (newValue: Answer | undefined) {
      this.setAnswer(newValue);
    },
  },
  methods: {
    answerQuestion: function () {
      this.$emit("answer", this.inputText, this.index);
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
      width: 75%;
      @media (max-width: 500px) {
        width: 70%;
      }
    }
  }
}
</style>
