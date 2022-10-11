import { LocalizationData } from "data";

namespace LocalizationTypes {
  export type Language = typeof LocalizationData.languages[number];
  export type Flag = typeof LocalizationData.flags[number];

  export type Option = {
    id: number;
    name: string;
    code: Language;
    flag: Flag;
  };

  export interface State {
    language: Language;
  }

  export interface Hook extends State {
    changeLanguage: (l: Language) => void;
  }
}

export default LocalizationTypes;
