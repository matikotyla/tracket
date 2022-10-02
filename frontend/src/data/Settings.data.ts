import {
  SettingsAccount,
  SettingsBilling,
  SettingsProfile,
  SettingsTeam,
} from "pages";
import { SettingsTypes } from "types";

namespace SettingsData {
  export const tabs: SettingsTypes.Tab.Data[] = [
    {
      type: SettingsTypes.Tab.Type.Profile,
      name: "Profile",
      element: SettingsProfile,
    },
    {
      type: SettingsTypes.Tab.Type.Account,
      name: "Account",
      element: SettingsAccount,
    },
    {
      type: SettingsTypes.Tab.Type.Team,
      name: "Team Members",
      element: SettingsTeam,
    },
    {
      type: SettingsTypes.Tab.Type.Billing,
      name: "Billing",
      element: SettingsBilling,
    },
  ];

  export namespace Tab {
    export const names: SettingsTypes.Tab.Name = {
      [SettingsTypes.Tab.Type.Profile]: "Profile",
      [SettingsTypes.Tab.Type.Account]: "Account",
      [SettingsTypes.Tab.Type.Team]: "Team Members",
      [SettingsTypes.Tab.Type.Billing]: "Billing",
    };

    export const elements: SettingsTypes.Tab.Element = {
      [SettingsTypes.Tab.Type.Profile]: SettingsProfile,
      [SettingsTypes.Tab.Type.Account]: SettingsAccount,
      [SettingsTypes.Tab.Type.Team]: SettingsTeam,
      [SettingsTypes.Tab.Type.Billing]: SettingsBilling,
    };
  }
}

export default SettingsData;
