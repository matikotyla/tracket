import { FunctionComponent } from "react";

import { Logo } from "assets/images";

import styles from "./SidebarDesktopLogo.module.scss";

const SidebarDesktopLogo: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <Logo className={styles.icon} />
      <h4 className={styles.text}>Tracket</h4>
    </div>
  );
};

export default SidebarDesktopLogo;
