import { FunctionComponent } from "react";
import { Popover } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import styles from "./NavbarMobileClose.module.scss";

const NavbarMobileClose: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <Popover.Button className={styles.button}>
        <XMarkIcon className={styles.icon} aria-hidden="true" />
      </Popover.Button>
    </div>
  );
};

export default NavbarMobileClose;
