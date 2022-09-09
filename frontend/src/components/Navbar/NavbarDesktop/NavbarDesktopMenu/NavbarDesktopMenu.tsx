import { FunctionComponent } from "react";

import NavbarDesktopLink from "../NavbarDesktopLink/NavbarDesktopLink";
import NavbarDesktopButton from "../NavbarDesktopButton/NavbarDesktopButton";

import styles from "./NavbarDesktopMenu.module.scss";

const NavbarDesktopMenu: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.list}>
        <NavbarDesktopLink to="/" text="Home" />
        <NavbarDesktopLink to="/about" text="About" />
        <NavbarDesktopLink to="/pricing" text="Pricing" />
        <NavbarDesktopLink to="/contact" text="Contact" />
      </div>
      <div className={styles.list}>
        <NavbarDesktopLink to="/login" text="Sign in" />
        <NavbarDesktopButton to="/register" text="Sign up" />
      </div>
    </div>
  );
};

export default NavbarDesktopMenu;
