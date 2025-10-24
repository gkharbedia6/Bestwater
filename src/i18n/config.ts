import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en.json";
import ge from "./ge.json";

i18n
  .use(LanguageDetector) // 🧠 add this plugin
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ge: { translation: ge },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: {
      // 👇 where to look for the language preference
      order: ["localStorage", "navigator", "htmlTag"],
      // 👇 where to store it when user switches language
      caches: ["localStorage"],
    },
  });

export default i18n;
