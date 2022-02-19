<template>
  <footer>
    <hr />
    <p>
      {{ t("FOOTER.MISSION") }}
      <a
        class="regular"
        rel="noopener noreferrer"
        target="_blank"
        href="https://robertmengual.com/projects;project=toberquizz"
        >{{ t("FOOTER.CONTRIBUTE") }}</a
      >
    </p>
    <p>
      {{ t("FOOTER.MADE_BY") }}
      <span class="regular">Robert Mengual</span>.
    </p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup: () => {
    const { t } = useI18n();
    return { t };
  },
});
</script>

<style lang="scss">
footer {
  margin-top: 24px;
  margin-bottom: 24px;
  p {
    font-size: 18px;
  }
  a {
    color: var(--warning-color);
    font-size: 18px;
    cursor: pointer;
  }
}
</style>
