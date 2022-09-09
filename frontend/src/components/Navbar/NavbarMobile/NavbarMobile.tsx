import { Fragment, FunctionComponent } from "react";
import { Popover, Transition } from "@headlessui/react";

import NavbarMobileMenu from "./NavbarMobileMenu/NavbarMobileMenu";
import NavbarMobileHeader from "./NavbarMobileHeader/NavbarMobileHeader";

import styles from "./NavbarMobile.module.scss";

const NavbarMobile: FunctionComponent = () => {
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel focus className={styles.panel}>
        <div className={styles.container}>
          <NavbarMobileHeader />
          <NavbarMobileMenu />
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export default NavbarMobile;
