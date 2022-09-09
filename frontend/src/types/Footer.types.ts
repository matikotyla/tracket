import CommonTypes from "./Common.types";

namespace FooterTypes {
  export interface Link {
    to: string;
    name: string;
  }

  export interface List {
    title: string;
    items: Link[];
  }

  export interface Icon {
    name: string;
    to: string;
    icon: CommonTypes.Icon;
  }
}

export default FooterTypes;
