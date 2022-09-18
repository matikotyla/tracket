import React, { Fragment, FunctionComponent } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Bars3BottomLeftIcon, BellIcon } from "@heroicons/react/24/outline";
import { SidebarAnimations } from "animations";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { SidebarData } from "data";
import { useAuth, useUser } from "hooks";

import styles from "./SidebarNavigationDropdown.module.scss";

const SidebarNavigationDropdown = () => {
  const { signOut } = useAuth();
  const { user } = useUser();

  return (
    <Menu as="div" className={styles.root}>
      <div>
        <Menu.Button className={styles.button}>
          <div className={styles.avatar}>{user?.firstName.charAt(0)}</div>
          {/* <img
          className="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        /> */}
        </Menu.Button>
      </div>
      <Transition as={Fragment} {...SidebarAnimations.dropdownTransition}>
        <Menu.Items className={styles.list}>
          {SidebarData.items.map((item) => (
            <Menu.Item key={item.name}>
              <Link to={item.to} className={clsx(styles.item)}>
                {item.name}
              </Link>
            </Menu.Item>
          ))}
          <Menu.Item>
            <button className={styles.item} onClick={signOut}>
              Sign out
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default SidebarNavigationDropdown;
