import { CountryCode } from "@/domain";
import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import es from "./locales/es.json";
import de from "./locales/de.json";

type MessageSchema = typeof en;

const getNavigatorLocale = () =>
  ["ca", "gl", "eu"].includes(navigator.language.split("-")[0])
    ? "es"
    : navigator.language.split("-")[0];

export const changeI18nLocale = (countryCode?: CountryCode) => {
  if (!countryCode) {
    i18n.global.locale = getNavigatorLocale();
  } else if (countryCode === CountryCode.WorldWide) {
    i18n.global.locale = "en";
  } else {
    i18n.global.locale = countryCode.toLowerCase();
  }
};

export const i18n = createI18n<[MessageSchema], "en" | "es" | "de">({
  messages: {
    en,
    es,
    de,
  },
  locale: getNavigatorLocale(),
  fallbackLocale: "en",
});
