<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="24"
    height="27"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    enable-background="new 0 0 512 512"
  >
    <g>
      <g>
        <path
          d="m108.5,400.3l77.2-112.8 81.7,78.8c13.7,11.6 27.3,3.1 30.9-3l135.6-194.3 4.9,65c0.8,10.7 9.8,18.9 20.3,18.9 12,0 21.2-10.7 20.4-22l-8.6-114.3c-0.9-11.2-10.6-19.7-21.9-18.8l-114.3,8.6c-11.2,0.8-19.7,10.6-18.8,21.9 0.8,11.2 10.6,19.6 21.9,18.8l65-4.9-124.2,178-81.9-78.9c-5-5.7-20-10.8-31,3.2l-73,106.6v57.9c6.1-0.3 12.1-3.3 15.8-8.7z"
        />
        <path
          d="M480.6,460.2H51.8V31.4c0-11.3-9.1-20.4-20.4-20.4C20.1,11,11,20.1,11,31.4v449.2c0,11.3,9.1,20.4,20.4,20.4h449.2    c11.3,0,20.4-9.1,20.4-20.4C501,469.3,491.9,460.2,480.6,460.2z"
        />
      </g>
    </g>
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
