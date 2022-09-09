import { FunctionComponent } from "react";
import { Popover } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

import styles from "./NavbarMobileClose.module.scss";

const NavbarMobileClose: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <Popover.Button className={styles.button}>
        <XIcon className={styles.icon} aria-hidden="true" />
      </Popover.Button>
    </div>
  );
};

export default NavbarMobileClose;
