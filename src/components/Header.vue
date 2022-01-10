<template>
  <header>
    <Banner />
    <p>
      Te doy la bienvenida a ToberQuizz, la aplicación tecnológicamente ética
      donde encontrarás desafíos originales y gratuitos que pondrán en jaque tu
      imaginación.
    </p>
    <h2>{{ title }}</h2>
    <p>
      {{ description }}
    </p>
    <p>¿Eres capaz de adivinar todos?</p>
    <hr />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Banner from "./Banner.vue";

export default defineComponent({
  name: "Header",
  components: { Banner },
  props: {
    title: String,
    description: String,
  },
});
</script>

<style lang="scss">
header {
  margin-top: 24px;
  margin-bottom: 24px;
  p {
    font-size: 1.2rem;
  }
}
</style>
