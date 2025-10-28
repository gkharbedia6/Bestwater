import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en.json";
import ge from "./ge.json";
import ru from "./ru.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ge: { translation: ge },
      ru: { translation: ru },
    },
    lng: localStorage.getItem("i18nextLng") || "ge",
    fallbackLng: "ge",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
