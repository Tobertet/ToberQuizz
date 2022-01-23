<template>
  <header>
    <Banner />
    <h3>Desafíos creativos y gratuitos. Tecnología ética.</h3>
    <hr />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Banner from "./Banner.vue";

export default defineComponent({
  name: "Header",
  components: { Banner },
});
</script>

<style lang="scss">
header {
  margin-top: 24px;
  margin-bottom: 24px;
  h3 {
    font-weight: normal;
    font-size: 1.4rem;
    text-align: center;
  }
}
</style>
