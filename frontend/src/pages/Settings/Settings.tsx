import { CommonAnimations } from "animations";
import { Input } from "components";
import { SettingsData } from "data";
import { AnimatePresence } from "framer-motion";
import { withAnimation } from "hoc";
import React, { FunctionComponent, useState } from "react";
import { SettingsTypes } from "types";

import styles from "./Settings.module.scss";
import SettingsAccount from "./SettingsAccount/SettingsAccount";
import SettingsProfile from "./SettingsProfile/SettingsProfile";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Settings: FunctionComponent = () => {
  const [selectedTab, setSelectedTab] = useState<SettingsTypes.Tab.Type>(
    SettingsTypes.Tab.Type.Profile
  );

  const Element = withAnimation(
    SettingsData.Tab.elements[selectedTab],
    CommonAnimations.page
  );

  return (
    <main className="flex-1">
      {/* <h1 className="text-2xl font-semibold text-gray-900">Settings</h1> */}
      <div className="sm:flex-auto">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-500">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>
      <div className="py-2">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
            defaultValue={SettingsData.tabs[0].type}
          >
            {SettingsData.tabs.map((tab) => (
              <option key={tab.type}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {SettingsData.tabs.map((tab) => (
                <button
                  key={tab.type}
                  className={classNames(
                    selectedTab === tab.type
                      ? "border-teal-500 text-teal-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                    "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  )}
                  onClick={() => setSelectedTab(tab.type)}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <Element key={selectedTab} />
      </AnimatePresence>
    </main>
  );
};

export default withAnimation(Settings, CommonAnimations.page);
