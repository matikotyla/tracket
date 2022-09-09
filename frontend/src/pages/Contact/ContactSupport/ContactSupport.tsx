import { FunctionComponent } from "react";

import ContactSupportSales from "./ContactSupportSales/ContactSupportSales";
import ContactSupportTechnical from "./ContactSupportTechnical/ContactSupportTechnical";

import styles from "./ContactSupport.module.scss";

const ContactSupport: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <ContactSupportSales />
      <ContactSupportTechnical />
    </div>
  );
};

export default ContactSupport;
