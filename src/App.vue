<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import { App } from "@capacitor/app";
import { sendPreviousRightAnswersCount } from "./initialLoadCheck";

export default defineComponent({
  setup: () => {
    const router = useRouter();

    onMounted(() => {
      // This will be removed in the future
      sendPreviousRightAnswersCount();
    });

    App.addListener("backButton", () => {
      if (router.currentRoute.value.fullPath === "/") {
        App.exitApp();
      } else {
        router.back();
      }
    });
  },
});
</script>
