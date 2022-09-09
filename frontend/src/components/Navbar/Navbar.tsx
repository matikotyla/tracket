import { FunctionComponent } from "react";
import { Popover } from "@headlessui/react";

import { NavbarProps } from "./Navbar.props";

import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import NavbarMobile from "./NavbarMobile/NavbarMobile";

import styles from "./Navbar.module.scss";

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <Popover className={styles.navbar}>
      <NavbarDesktop />
      <NavbarMobile />
    </Popover>
  );
};

export default Navbar;
