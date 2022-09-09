import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { FooterLinkProps } from "./FooterLink.props";

import styles from "./FooterLink.module.scss";

const FooterLink: FunctionComponent<FooterLinkProps> = ({ to, name }) => {
  return (
    <Link to={to} className={styles.root}>
      {name}
    </Link>
  );
};

export default FooterLink;
