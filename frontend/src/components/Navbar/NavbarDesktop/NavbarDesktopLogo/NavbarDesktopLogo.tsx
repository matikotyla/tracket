import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { Logo } from "assets/images";

import styles from "./NavbarDesktopLogo.module.scss";

const NavbarDesktopLogo: FunctionComponent = () => {
  return (
    <div>
      <Link to="/" className={styles.logo}>
        <Logo className={styles.icon} />
        <h4 className={styles.text}>Tracket</h4>
      </Link>
    </div>
  );
};

export default NavbarDesktopLogo;
