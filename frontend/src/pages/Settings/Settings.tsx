import { CommonAnimations } from "animations";
import clsx from "clsx";
import { Input, Select, SelectOption } from "components";
import { SettingsData } from "data";
import { AnimatePresence } from "framer-motion";
import { withAnimation } from "hoc";
import React, { FunctionComponent, useState } from "react";
import { SettingsTypes } from "types";

import styles from "./Settings.module.scss";
import SettingsHeader from "./SettingsHeader/SettingsHeader";
import SettingsTabs from "./SettingsTabs/SettingsTabs";

const Settings: FunctionComponent = () => {
  const [tab, setTab] = useState<SettingsTypes.Tab.Type>(
    SettingsTypes.Tab.Type.Profile
  );

  const Element = withAnimation(
    SettingsData.Tab.elements[tab],
    CommonAnimations.page
  );

  return (
    <main className={styles.root}>
      <SettingsHeader />
      <SettingsTabs selectedTab={tab} onSelectedTabChange={(t) => setTab(t)} />
      <AnimatePresence mode="wait">
        <Element key={tab} />
      </AnimatePresence>
    </main>
  );
};

export default withAnimation(Settings, CommonAnimations.page);
