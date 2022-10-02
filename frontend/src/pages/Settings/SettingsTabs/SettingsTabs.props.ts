import { SettingsTypes } from "types";

export interface SettingsTabsProps {
  selectedTab: SettingsTypes.Tab.Type;
  onSelectedTabChange: (t: SettingsTypes.Tab.Type) => void;
}
