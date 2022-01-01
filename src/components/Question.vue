<template>
  <div class="question">
    <div class="image-container" v-bind:class="status">
      <img v-bind:src="question.imageUri" />
    </div>
    <div class="input-container">
      <label>{{ index + 1 }} - </label><input v-model="answer" />
      <button @click="checkAnswer">V</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Encryption } from "@/encryption";
import { defineComponent, PropType } from "vue";

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
    checkAnswer: function () {
      const asd = !!this.question?.solutions.find(
        (solution) => solution === Encryption.encrypt(this.answer)
      );
      this.status = asd ? Status.Valid : Status.Error;
      console.log(asd);
      return asd;
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
