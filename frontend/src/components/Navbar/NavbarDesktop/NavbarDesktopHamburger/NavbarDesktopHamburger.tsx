import { FunctionComponent } from "react";

import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";

import styles from "./NavbarDesktopHamburger.module.scss";

const NavbarDesktopHamburger: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <Popover.Button className={styles.container}>
        <MenuIcon className={styles.icon} aria-hidden="true" />
      </Popover.Button>
    </div>
  );
};

export default NavbarDesktopHamburger;
