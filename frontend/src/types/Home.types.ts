import { CommonTypes } from "types";

namespace HomeTypes {
  export interface Logo {
    src: string;
    alt: string;
    className: string;
  }

  export interface Feature {
    name: string;
    description: string;
    icon: CommonTypes.Icon;
  }

  export interface Question {
    question: string;
    answer: string;
  }
}

export default HomeTypes;
