import { FunctionComponent } from "react";

import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

import styles from "./NavbarDesktopHamburger.module.scss";

const NavbarDesktopHamburger: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <Popover.Button className={styles.container}>
        <Bars3Icon className={styles.icon} aria-hidden="true" />
      </Popover.Button>
    </div>
  );
};

export default NavbarDesktopHamburger;
