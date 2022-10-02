import React from "react";

import styles from "./SettingsHeader.module.scss";

const SettingsHeader = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Settings</h1>
      <p className={styles.text}>
        This information will be displayed publicly so be careful what you
        share.
      </p>
    </div>
  );
};

export default SettingsHeader;
