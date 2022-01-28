<template>
  <div id="app-container">
    <Header />
    <main>
      <router-link
        :to="countryCode"
        v-for="countryCode of Object.keys(quizzData)"
        :key="countryCode"
      >
        {{ t(`COUNTRY_LIST.${countryCode}`) }}
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
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Home",
  components: { Header, Footer },
  setup: () => {
    const quizzData = QUIZZ_DATA;
    const { t } = useI18n();
    return {
      quizzData,
      t,
    };
  },
});
</script>

<style lang="scss"></style>
