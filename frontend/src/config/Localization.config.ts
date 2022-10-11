import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import LocalizationData from "data/Localization.data";
import {
  EnglishTranslations,
  GermanTranslations,
  FrenchTranslations,
  PolishTranslations,
} from "translations";

namespace LocalizationConfig {
  export const initialize = () => {
    i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .use(HttpApi)
      .init(
        {
          supportedLngs: LocalizationData.languages,
          fallbackLng: LocalizationData.languages[0],
          debug: false,
          react: {
            useSuspense: false,
          },
          interpolation: {
            escapeValue: false,
          },
          resources: {
            en: {
              translation: EnglishTranslations,
            },
            de: {
              translation: GermanTranslations,
            },
            fr: {
              translation: FrenchTranslations,
            },
            pl: {
              translation: PolishTranslations,
            },
          },
        },
        () => console.log("Locales initialized")
      );
  };
}

export default LocalizationConfig;
