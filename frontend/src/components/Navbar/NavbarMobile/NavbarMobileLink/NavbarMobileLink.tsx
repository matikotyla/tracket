import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { NavbarMobileLinkProps } from "./NavbarMobileLink.props";

import styles from "./NavbarMobileLink.module.scss";

const NavbarMobileLink: FunctionComponent<NavbarMobileLinkProps> = ({
  to,
  text,
}) => {
  return (
    <Link to={to} className={styles.root}>
      {text}
    </Link>
  );
};

export default NavbarMobileLink;
