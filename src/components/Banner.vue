<template>
  <pre data-testid="banner-title" id="ascii-title" @click="goToHomePage">
 _______    _                ____        _         
|__   __|  | |              / __ \      (_)        
   | | ___ | |__   ___ _ __| |  | |_   _ _ ________
   | |/ _ \| '_ \ / _ \ '__| |  | | | | | |_  /_  /
   | | (_) | |_) |  __/ |  | |__| | |_| | |/ / / / 
   |_|\___/|_.__/ \___|_|   \___\_\\__,_|_/___/___|
    </pre
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Banner",
  methods: {
    goToHomePage: function () {
      this.$router.push("/");
    },
  },
});
</script>

<style lang="scss">
#ascii-title {
  cursor: pointer;
  text-align: center;
  font-size: 2vw;
  @media (min-width: 1024px) {
    font-size: 200%;
  }
}
</style>
