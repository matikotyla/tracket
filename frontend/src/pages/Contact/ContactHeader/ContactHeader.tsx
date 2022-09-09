import { FunctionComponent } from "react";

import styles from "./ContactHeader.module.scss";

const ContactHeader: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span className={styles.subtitle}>Contact</span>
        <span className={styles.title}>Get in touch</span>
      </h1>
      <p className={styles.text}>
        Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
        arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
        feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
        Eleifend egestas fringilla sapien.
      </p>
    </div>
  );
};

export default ContactHeader;
