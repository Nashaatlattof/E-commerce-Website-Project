/* // src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./en";
import arTranslation from "./ar";

const resources = {
  en: {
    translation: enTranslation,
  },
  ar: {
    translation: arTranslation,
  },
};

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export { i18n, changeLanguage };
 */