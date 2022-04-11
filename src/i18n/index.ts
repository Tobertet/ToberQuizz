import { CountryCodes } from "@/models";
import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import es from "./locales/es.json";

type MessageSchema = typeof en;

const getNavigatorLocale = () =>
  ["ca", "gl", "eu"].includes(navigator.language.split("-")[0])
    ? "es"
    : navigator.language.split("-")[0];

export const changeI18nLocale = (countryCode?: CountryCodes) => {
  if (!countryCode) {
    i18n.global.locale = getNavigatorLocale();
  } else if (countryCode === CountryCodes.WorldWide) {
    i18n.global.locale = "en";
  } else {
    i18n.global.locale = countryCode.toLowerCase();
  }
};

export const i18n = createI18n<[MessageSchema], "en" | "es">({
  messages: {
    en,
    es,
  },
  locale: getNavigatorLocale(),
  fallbackLocale: "en",
});
