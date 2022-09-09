import { FunctionComponent } from "react";

import { Logo } from "assets/images";

import styles from "./NavbarMobileLogo.module.scss";

const NavbarMobileLogo: FunctionComponent = () => {
  return (
    <div>
      <Logo className={styles.icon} />
    </div>
  );
};

export default NavbarMobileLogo;
