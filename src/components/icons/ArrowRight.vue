<template>
  <svg
    width="12"
    height="27"
    viewBox="0 0 10 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.3641 0.657318C1.17484 0.456231 0.858405 0.446642 0.657318
    0.6359C0.456231 0.825158 0.446642 1.1416 0.6359 1.34268L1.3641 0.657318ZM9
    9.5L9.3641 9.84268C9.5453 9.65016 9.5453 9.34984 9.3641 9.15732L9
    9.5ZM0.6359 17.6573C0.446642 17.8584 0.456231 18.1748 0.657318
    18.3641C0.858405 18.5534 1.17484 18.5438 1.3641 18.3427L0.6359
    17.6573ZM0.6359 1.34268L8.6359 9.84268L9.3641 9.15732L1.3641 0.657318L0.6359
    1.34268ZM8.6359 9.15732L0.6359 17.6573L1.3641 18.3427L9.3641 9.84268L8.6359
    9.15732Z"
      :fill="color"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    color: {
      type: String,
      required: false,
      default: "#170A09",
    },
  },
});
</script>
