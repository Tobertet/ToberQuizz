<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { App } from "@capacitor/app";

export default defineComponent({
  setup: () => {
    const router = useRouter();

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
