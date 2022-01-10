<template>
  <div id="app-container">
    <Header
      v-bind:title="'Desafío nº 1'"
      v-bind:description="'Este primer desafío contiene imágenes que representan de alguna forma grupos o artistas de la música española desde los 60 hasta los 2000.'"
    />
    <div class="columns-select">
      <label for="numColumns">Imágenes por fila: </label>
      <select v-model="tableColumns" name="numColumns" id="numColumns">
        <option
          v-for="columns in availableColumns"
          v-bind:key="columns"
          v-bind:value="columns"
        >
          {{ columns }}
        </option>
      </select>
    </div>
    <div
      id="questions-table"
      v-bind:style="{ 'grid-template-columns': `repeat(${tableColumns}, 1fr)` }"
    >
      <Question
        v-for="(question, index) in questions"
        v-bind:key="index"
        v-bind:question="question"
        v-bind:index="index"
        v-bind:answer="answers[index]"
        @answer="checkAndSave"
      >
      </Question>
    </div>
    <div class="columns-select">
      <label for="numColumns">Imágenes por fila: </label>
      <select v-model="tableColumns" name="numColumns" id="numColumns">
        <option
          v-for="columns in availableColumns"
          v-bind:key="columns"
          v-bind:value="columns"
        >
          {{ columns }}
        </option>
      </select>
    </div>
    <Footer />
  </div>
  <div id="sticky-bar">
    <div>
      Aciertos:
      {{ answers.filter((answer) => answer && answer.isValid).length }} /
      {{ questions.length }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Question from "./Question.vue";
import { Answer } from "../models";
import { questions } from "../questions";
import { Argon2Utils } from "../Argon2Utils";
import { Storage } from "@capacitor/storage";
import Footer from "./Footer.vue";
import Header from "./Header.vue";

export default defineComponent({
  name: "Challenge",
  components: { Question, Footer, Header },
  data: () => {
    return {
      questions,
      answers: new Array<Answer | undefined>(),
      tableColumns: window.innerWidth > 500 ? 4 : 1,
      availableColumns: window.innerWidth > 500 ? [3, 4, 5, 6] : [1, 2],
    };
  },
  methods: {
    checkAndSave: async function (answerText: string, index: number) {
      const fullAnswer: Answer = {
        text: answerText,
        isValid: await Argon2Utils.isAnswerValid(answerText, questions[index]),
      };
      this.answers[index] = fullAnswer;
      Storage.set({
        key: "ESP_001",
        value: JSON.stringify(this.answers.map((answer) => answer?.text)),
      });
    },
  },
  mounted: async function () {
    const rawAnswers = (await Storage.get({ key: "ESP_001" })).value;
    if (!rawAnswers) return;

    (JSON.parse(rawAnswers) as string[]).forEach(async (rawAnswer, index) => {
      if (!rawAnswer) return;
      const isValid = await Argon2Utils.isAnswerValid(
        rawAnswer,
        questions[index]
      );
      this.answers[index] = {
        text: rawAnswer,
        isValid,
      };
    });
  },
});
</script>

<style lang="scss">
#app-container {
  width: 80%;
  margin-inline: auto;
  @media (max-width: 500px) {
    width: 100%;
  }
  #questions-table {
    display: grid;
    gap: 24px;
    row-gap: 36px;
  }
  .columns-select {
    text-align: end;
    margin-block: 24px;
  }
}
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
