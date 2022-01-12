<template>
  <header>
    <Banner />
    <hr />
  </header>
  <main>
    <router-link
      v-bind:to="countryCode"
      v-for="countryCode of Object.keys(quizzData)"
      v-bind:key="countryCode"
    >
      {{ countryCode }}
    </router-link>
  </main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";
import { QUIZZ_DATA } from "@/quizzData";

export default defineComponent({
  name: "Home",
  components: { Banner, Footer },
  data: () => ({
    quizzData: QUIZZ_DATA,
  }),
});
</script>

<style lang="scss"></style>
