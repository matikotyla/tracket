import { useTranslation } from "react-i18next";
import { LocalizationTypes } from "types";

const useLocalization = (): LocalizationTypes.Hook => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: LocalizationTypes.Language) => {
    i18n.changeLanguage(language);
  };

  return {
    language: i18n.language as LocalizationTypes.Language,
    changeLanguage,
  };
};

export default useLocalization;
