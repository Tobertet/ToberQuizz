<template>
  <div id="app">
    <div>
      <button
        v-for="index in [...Array(5).keys()]"
        v-on:click="setColumns(index + 1)"
        v-bind:key="index"
      >
        {{ index + 1 }}
      </button>
    </div>

    <div
      id="questions-table"
      v-bind:style="{ 'grid-template-columns': tableColumns }"
    >
      <div
        class="question"
        v-for="(question, index) in questions"
        v-bind:key="index"
      >
        <div class="image">
          <img v-bind:src="question.imageUri" />
        </div>
        <div class="input">
          <label>{{ index + 1 }} - </label><input />
          <button v-on:click="checkAnswer('', index)">V</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { questions } from "./questions";
import JSEncrypt from "jsencrypt";

export default defineComponent({
  name: "App",
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
}

@media (max-width: 500px) {
  #questions-table {
    width: 100%;
  }
}

.question {
  max-width: 100%;
  text-align: center;
}
.question > .image {
  max-width: 100%;
  height: 0;
  padding-bottom: 100%;
  border: 1px solid gray;
}

.question img {
  max-width: 100%;
}

.question > .input {
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
}

.input input {
  width: 75%;
}
</style>
