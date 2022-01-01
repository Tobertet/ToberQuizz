<template>
  <div class="question">
    <div class="image-container" v-bind:class="status">
      <img v-bind:src="question.imageUri" />
    </div>
    <div class="input-container">
      <label>{{ index + 1 }} - </label
      ><input v-bind:disabled="status === 'valid'" v-model="answer" />
      <button @click="checkAnswer">V</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import argon2 from "argon2-browser";

type Question = {
  solutions: string[];
  imageUri: string;
};

enum Status {
  Error = "error",
  Clean = "clean",
  Valid = "valid",
}

export default defineComponent({
  name: "Question",
  data: () => {
    return {
      answer: "",
      status: Status.Clean,
    };
  },
  props: {
    question: {
      type: Object as PropType<Question>,
    },
    index: Number,
  },
  methods: {
    checkAnswer: async function () {
      const hashedAnswer = await argon2.hash({
        pass: this.answer,
        salt: "Tobertet",
        hashLen: 32, // desired hash length
        type: argon2.ArgonType.Argon2id, // Argon2d, Argon2i, Argon2id
      });
      const isValid = !!this.question?.solutions.find(
        (solution) => solution === hashedAnswer.hashHex
      );
      this.status = isValid ? Status.Valid : Status.Error;
    },
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
    padding-bottom: 100%;
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
