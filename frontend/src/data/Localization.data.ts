import { LocalizationTypes } from "types";

namespace LocalizationData {
  export const languages = ["en", "de", "fr", "pl"] as const;
  export const flags = ["gb", "de", "fr", "pl"] as const;

  export const options: LocalizationTypes.Option[] = [
    {
      id: 1,
      name: "English",
      code: "en",
      flag: "gb",
    },
    {
      id: 2,
      name: "Deutsch",
      code: "de",
      flag: "de",
    },
    {
      id: 3,
      name: "Français",
      code: "fr",
      flag: "fr",
    },
    {
      id: 4,
      name: "Polski",
      code: "pl",
      flag: "pl",
    },
  ];
}

export default LocalizationData;
