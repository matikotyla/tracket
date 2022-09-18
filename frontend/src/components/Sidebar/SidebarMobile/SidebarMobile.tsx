import { Fragment, FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import clsx from "clsx";

import { SidebarData } from "data";
import { Logo } from "assets/images";
import { SidebarAnimations } from "animations";
import { SidebarMobileProps } from "./SidebarMobile.props";

import styles from "./SidebarMobile.module.scss";
import SidebarList from "../SidebarList/SidebarList";

const secondaryNavigation = [
  { name: "Website redesign", href: "#" },
  { name: "GraphQL API", href: "#" },
  { name: "Customer migration guides", href: "#" },
  { name: "Profit sharing program", href: "#" },
];

const teams = [
  { name: "Engineering", href: "#", bgColorClass: "bg-indigo-500" },
  { name: "Human Resources", href: "#", bgColorClass: "bg-green-500" },
  { name: "Customer Success", href: "#", bgColorClass: "bg-yellow-500" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const SidebarMobile: FunctionComponent<SidebarMobileProps> = ({
  open,
  onClick,
}) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className={styles.root} onClose={onClick}>
        <Transition.Child as={Fragment} {...SidebarAnimations.coverTransition}>
          <div className={styles.cover} />
        </Transition.Child>
        <div className={styles.container}>
          <Transition.Child
            as={Fragment}
            {...SidebarAnimations.containerTransition}
          >
            <Dialog.Panel className={styles.panel}>
              <Transition.Child
                as={Fragment}
                {...SidebarAnimations.panelTransition}
              >
                <div className={styles.closeContainer}>
                  <button
                    type="button"
                    className={styles.closeButton}
                    onClick={() => onClick(false)}
                  >
                    <XMarkIcon
                      className={styles.closeIcon}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              <div className={styles.logoContainer}>
                <Logo className={styles.logo} />
              </div>
              <div className={styles.content}>
                <SidebarList />
              </div>
            </Dialog.Panel>
          </Transition.Child>
          <div className={styles.shring} aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SidebarMobile;
