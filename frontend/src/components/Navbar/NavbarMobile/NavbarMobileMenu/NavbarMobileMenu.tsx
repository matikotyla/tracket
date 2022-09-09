import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import NavbarMobileLink from "../NavbarMobileLink/NavbarMobileLink";

import styles from "./NavbarMobileMenu.module.scss";

const NavbarMobileMenu: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.list}>
        <NavbarMobileLink to="/" text="Home" />
        <NavbarMobileLink to="/" text="About" />
        <NavbarMobileLink to="/" text="Pricing" />
        <NavbarMobileLink to="/" text="Contact" />
      </div>
      <div className={styles.box}>
        <Link to="/" className={styles.button}>
          Sign up
        </Link>
        <p className={styles.text}>
          Existing customer?{" "}
          <Link to="/" className={styles.link}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NavbarMobileMenu;
