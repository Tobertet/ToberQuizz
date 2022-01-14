<template>
  <div id="app-container">
    <Header
      v-bind:title="
        'Desafío nº ' + (parseInt($route.params.challengeIndex) + 1)
      "
      v-bind:description="challenge.description"
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
      <QuestionComponent
        v-for="(question, index) in challenge.questions"
        v-bind:key="index"
        v-bind:question="question"
        v-bind:index="index"
        v-bind:answer="answers[index]"
        v-bind:challengeIndex="challengeIndex"
        v-bind:countryCode="countryCode"
        @answer="checkAndSave"
      >
      </QuestionComponent>
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
      {{ challenge.questions.length }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import QuestionComponent from "../components/Question.vue";
import { Answer, Challenge, CountryCodes } from "../models";
import { Argon2Utils } from "../Argon2Utils";
import { Storage } from "@capacitor/storage";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import { QUIZZ_DATA } from "@/quizzData";

export default defineComponent({
  name: "Challenge",
  components: { QuestionComponent, Footer, Header },
  data: function () {
    return {
      countryCode: CountryCodes.Spain,
      challengeIndex: 0,
      challenge: {
        description: "",
        questions: [],
        startingDate: "",
      } as Challenge,
      answers: new Array<Answer | undefined>(),
      tableColumns: window.innerWidth > 500 ? 4 : 1,
      availableColumns: window.innerWidth > 500 ? [3, 4, 5, 6] : [1, 2],
    };
  },
  methods: {
    checkAndSave: async function (answerText: string, index: number) {
      const countryCode = this.$route.params.countryCode as CountryCodes;
      const challengeIndex = this.$route.params.challengeIndex as string;

      const fullAnswer: Answer = {
        text: answerText,
        isValid: await Argon2Utils.isAnswerValid(
          answerText,
          this.challenge.questions[index]
        ),
      };
      this.answers[index] = fullAnswer;
      Storage.set({
        key: `${countryCode}_${challengeIndex}`,
        value: JSON.stringify(this.answers.map((answer) => answer?.text)),
      });
    },
    loadLegacyAnswers: async function () {
      const rawAnswers = (await Storage.get({ key: "ESP_001" })).value;
      if (!rawAnswers) return;
      await Storage.set({
        key: "ES_0",
        value: rawAnswers,
      });
      return Storage.remove({ key: "ESP_001" });
    },
    loadAnswers: async function (
      countryCode: CountryCodes,
      challengeIndex: number
    ) {
      const rawAnswers = (
        await Storage.get({ key: `${countryCode}_${challengeIndex}` })
      ).value;
      if (!rawAnswers) return;

      (JSON.parse(rawAnswers) as string[]).forEach(async (rawAnswer, index) => {
        if (!rawAnswer) return;
        const isValid = await Argon2Utils.isAnswerValid(
          rawAnswer,
          this.challenge.questions[index]
        );
        this.answers[index] = {
          text: rawAnswer,
          isValid,
        };
      });
    },
    loadChallenge: function (
      countryCode: CountryCodes,
      challengeIndex: number
    ) {
      const challenge = QUIZZ_DATA[countryCode][challengeIndex];

      if (!challenge || !challenge.questions) {
        this.$router.replace("/");
      } else {
        this.challenge = challenge;
      }
    },
  },
  mounted: async function () {
    this.countryCode = this.$route.params.countryCode as CountryCodes;
    this.challengeIndex = parseInt(this.$route.params.challengeIndex as string);

    if (!Object.values(CountryCodes).includes(this.countryCode)) {
      this.$router.replace("/");
      return;
    }

    if (this.countryCode === CountryCodes.Spain && this.challengeIndex === 0) {
      await this.loadLegacyAnswers();
    }
    this.loadChallenge(this.countryCode, this.challengeIndex);
    this.loadAnswers(this.countryCode, this.challengeIndex);
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
