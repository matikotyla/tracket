import { FunctionComponent } from "react";

import NavbarDesktopLogo from "./NavbarDesktopLogo/NavbarDesktopLogo";
import NavbarDesktopHamburger from "./NavbarDesktopHamburger/NavbarDesktopHamburger";
import NavbarDesktopMenu from "./NavbarDesktopMenu/NavbarDesktopMenu";

import styles from "./NavbarDesktop.module.scss";

const NavbarDesktop: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <NavbarDesktopLogo />
        <NavbarDesktopHamburger />
        <NavbarDesktopMenu />
      </div>
    </div>
  );
};

export default NavbarDesktop;
