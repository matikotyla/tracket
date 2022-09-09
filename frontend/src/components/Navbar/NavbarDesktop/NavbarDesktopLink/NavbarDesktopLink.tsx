import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { NavbarDesktopLinkProps } from "./NavbarDesktopLink.props";

import styles from "./NavbarDesktopLink.module.scss";

const NavbarDesktopLink: FunctionComponent<NavbarDesktopLinkProps> = ({
  to,
  text,
}) => {
  return (
    <Link to={to} className={styles.link}>
      {text}
    </Link>
  );
};

export default NavbarDesktopLink;
