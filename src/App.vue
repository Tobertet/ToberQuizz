<template>
  <div id="app-container">
    <header>
      <pre id="ascii-title">
 _______    _                ____        _         
|__   __|  | |              / __ \      (_)        
   | | ___ | |__   ___ _ __| |  | |_   _ _ ________
   | |/ _ \| '_ \ / _ \ '__| |  | | | | | |_  /_  /
   | | (_) | |_) |  __/ |  | |__| | |_| | |/ / / / 
   |_|\___/|_.__/ \___|_|   \___\_\\__,_|_/___/___|
    </pre
      >
      <p>
        Te doy la bienvenida a ToberQuizz, la aplicación tecnológicamente ética
        donde encontrarás desafíos originales y gratuitos que pondrán en jaque
        tu imaginación.
      </p>
      <h2>Desafío nº 1</h2>
      <p>
        Este primer desafío contiene imágenes que representan de alguna forma
        grupos o artistas de la música española desde los 60 hasta los 2000.
      </p>
      <p>¿Eres capaz de adivinar todos?</p>
      <hr />
    </header>
    <div
      id="questions-table"
      v-bind:style="{ 'grid-template-columns': tableColumns }"
    >
      <Question
        v-for="(question, index) in questions"
        v-bind:key="index"
        v-bind:question="question"
        v-bind:index="index"
        @valid="addValidAnswer"
      >
      </Question>
    </div>
    <footer>
      <hr />
      <p>
        Esta aplicación es tecnológicamente ética y no contiene ni anuncios ni
        trackers ni cookies, respetando así totalmente tu privacidad. Además, es
        open-source y puedes encontrar su código
        <a
          alt="link to the source code in Github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Tobertet/ToberQuizz"
          >aquí</a
        >.
      </p>
      <p>
        Si te ha gustado, no dudes en compartirlo libremente con quien quieras.
        Si, además quieres ayudarme a hacer más contenido tecnológicamente ético
        como este, puedes
        <a
          alt="link to donation page"
          target="_blank"
          rel="noopener noreferrer"
          href="https://Ko-fi.com/robertmengual"
          >invitarme a un café</a
        >.
      </p>
      <p>Hecho para ti con mucho ❤️ por Robert Mengual.</p>
    </footer>
  </div>
  <div id="sticky-bar">
    <div>
      Columnas:
      <button
        v-for="index in [...Array(4).keys()]"
        v-on:click="setColumns(index + 1)"
        v-bind:key="index"
      >
        {{ index + 1 }}
      </button>
    </div>
    <div>Aciertos: {{ validAnswers }} / {{ questions.length }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Question from "./components/Question.vue";
import { questions } from "./questions";

export default defineComponent({
  name: "App",
  components: { Question },
  data: () => {
    return {
      questions,
      validAnswers: 0,
      tableColumns: "repeat(4, 1fr)",
    };
  },
  methods: {
    setColumns: function (numberOfColumns: number) {
      this.tableColumns = `repeat(${numberOfColumns}, 1fr)`;
    },
    addValidAnswer: function () {
      this.validAnswers = this.validAnswers + 1;
    },
  },
});
</script>

<style lang="scss">
#ascii-title {
  text-align: center;
  font-size: 2vw;
  @media (min-width: 1024px) {
    font-size: 200%;
  }
}
#app-container {
  width: 80%;
  margin-inline: auto;
  @media (max-width: 500px) {
    width: 100%;
  }
}
h2,
p {
}
p {
  font-size: 1.2rem;
}
#questions-table {
  display: grid;
  gap: 24px;
  row-gap: 36px;
}
header {
  margin-top: 24px;
  margin-bottom: 24px;
}
footer {
  margin-top: 24px;
  margin-bottom: 48px;
}
#sticky-bar {
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 10%;
  background: lightgray;
  padding: 4px;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
</style>
