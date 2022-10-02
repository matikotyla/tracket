import { FunctionComponent } from "react";

namespace SettingsTypes {
  export namespace Tab {
    export enum Type {
      Profile = "profile",
      Account = "account",
      Team = "team",
      Billing = "billing",
    }

    export type Name = {
      [key in Type]: string;
    };

    export type Element = {
      [key in Type]: FunctionComponent;
    };

    export type Data = {
      type: SettingsTypes.Tab.Type;
      name: string;
      element: FunctionComponent;
    };
  }
}

export default SettingsTypes;
