<template>
  <header>
    <pre id="ascii-title">
 _______    _                ____        _         
|__   __|  | |              / __ \      (_)        
   | | ___ | |__   ___ _ __| |  | |_   _ _ ________
   | |/ _ \| '_ \ / _ \ '__| |  | | | | | |_  /_  /
   | | (_) | |_) |  __/ |  | |__| | |_| | |/ / / / 
   |_|\___/|_.__/ \___|_|   \___\_\\__,_|_/___/___|
    </pre>
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

export default defineComponent({
  name: "Header",
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
  #ascii-title {
    text-align: center;
    font-size: 2vw;
    @media (min-width: 1024px) {
      font-size: 200%;
    }
  }
  p {
    font-size: 1.2rem;
  }
}
</style>
