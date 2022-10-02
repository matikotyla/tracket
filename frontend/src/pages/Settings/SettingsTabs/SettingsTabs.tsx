import clsx from "clsx";
import { Select, SelectOption } from "components";
import { SettingsData } from "data";
import React, { FunctionComponent } from "react";
import { SettingsTabsProps } from "./SettingsTabs.props";

const SettingsTabs: FunctionComponent<SettingsTabsProps> = ({
  selectedTab,
  onSelectedTabChange,
}) => {
  return (
    <>
      <div className="sm:hidden">
        <Select
          text={SettingsData.Tab.names[selectedTab]}
          value={selectedTab}
          onChange={(t) => onSelectedTabChange(t)}
        >
          {SettingsData.Tab.tabs.map((tab) => (
            <SelectOption
              key={tab.name}
              value={tab.type}
              selected={selectedTab === tab.type}
            >
              {tab.name}
            </SelectOption>
          ))}
        </Select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {SettingsData.Tab.tabs.map((tab) => (
              <button
                key={tab.type}
                className={clsx(
                  selectedTab === tab.type
                    ? "border-teal-500 text-teal-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                  "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                )}
                onClick={() => onSelectedTabChange(tab.type)}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default SettingsTabs;
