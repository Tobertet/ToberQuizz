<template>
  <div id="app-bar">
    <img
      class="pointer"
      alt="ToberQuizz logo"
      @click="goToHomeView"
      src="/secondary-logo.png"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup: () => {
    const router = useRouter();

    const goToHomeView = () => {
      router.push({
        path: `/`,
      });
    };

    return {
      goToHomeView,
    };
  },
});
</script>

<style scoped lang="scss">
#app-bar {
  height: 64px;
  border-bottom: 1px solid var(--primary-color);
  padding: 0 32px;
  display: flex;
  align-items: center;
}
</style>
