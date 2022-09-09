import { FunctionComponent } from "react";

import NavbarMobileLogo from "../NavbarMobileLogo/NavbarMobileLogo";
import NavbarMobileClose from "../NavbarMobileClose/NavbarMobileClose";

import styles from "./NavbarMobileHeader.module.scss";

const NavbarMobileHeader: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <NavbarMobileLogo />
        <NavbarMobileClose />
      </div>
    </div>
  );
};

export default NavbarMobileHeader;
