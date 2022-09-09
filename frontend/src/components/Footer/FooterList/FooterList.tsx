import { FunctionComponent } from "react";
import { FooterListProps } from "./FooterList.props";

import FooterLink from "../FooterLink/FooterLink";

import styles from "./FooterList.module.scss";

const FooterList: FunctionComponent<FooterListProps> = ({ title, items }) => {
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.items}>
        {items.map((item) => (
          <li key={item.name} className={styles.item}>
            <FooterLink to={item.to} name={item.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
