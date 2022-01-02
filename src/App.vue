<template>
  <div id="app">
    <div>
      <button
        v-for="index in [...Array(3).keys()]"
        v-on:click="setColumns(index + 3)"
        v-bind:key="index"
      >
        {{ index + 3 }}
      </button>
    </div>
    <div
      id="questions-table"
      v-bind:style="{ 'grid-template-columns': tableColumns }"
    >
      <Question
        v-for="(question, index) in questions"
        v-bind:key="index"
        v-bind:question="question"
        v-bind:index="index"
      >
      </Question>
    </div>
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
      tableColumns: "repeat(4, 1fr)",
    };
  },
  methods: {
    setColumns: function (numberOfColumns: number) {
      this.tableColumns = `repeat(${numberOfColumns}, 1fr)`;
    },
  },
});
</script>

<style lang="scss">
#questions-table {
  display: grid;
  gap: 24px;
  row-gap: 36px;
  width: 80%;
  margin: auto;
  @media (max-width: 500px) {
    width: 100%;
  }
}
</style>
