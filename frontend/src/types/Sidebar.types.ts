import CommonTypes from "./Common.types";

namespace SidebarTypes {
  export interface Link {
    name: string;
    to: string;
    icon: CommonTypes.Icon;
  }

  export interface Item {
    name: string;
    to: string;
  }
}

export default SidebarTypes;
