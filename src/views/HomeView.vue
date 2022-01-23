<template>
  <div id="app-container">
    <Header />
    <main>
      <router-link
        :to="countryCode"
        v-for="countryCode of Object.keys(quizzData)"
        :key="countryCode"
      >
        {{ countryCode }}
      </router-link>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { QUIZZ_DATA } from "@/quizzData";

export default defineComponent({
  name: "Home",
  components: { Header, Footer },
  data: () => ({
    quizzData: QUIZZ_DATA,
  }),
});
</script>

<style lang="scss"></style>
