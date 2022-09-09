import { FunctionComponent } from "react";

import ContactHeader from "./ContactHeader/ContactHeader";
import ContactOffices from "./ContactOffices/ContactOffices";
import ContactSupport from "./ContactSupport/ContactSupport";

import styles from "./Contact.module.scss";
import { withAnimation } from "hoc";
import { CommonAnimations } from "animations";

const Contact: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <ContactHeader />
      <ContactSupport />
      <ContactOffices />
    </div>
  );
};

export default withAnimation(Contact, CommonAnimations.page);
