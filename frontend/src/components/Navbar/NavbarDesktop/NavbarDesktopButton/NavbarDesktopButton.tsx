import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { NavbarDesktopButtonProps } from "./NavbarDesktopButton.props";

import styles from "./NavbarDesktopButton.module.scss";

const NavbarDesktopButton: FunctionComponent<NavbarDesktopButtonProps> = ({
  to,
  text,
}) => {
  return (
    <Link to={to} className={styles.button}>
      {text}
    </Link>
  );
};

export default NavbarDesktopButton;
