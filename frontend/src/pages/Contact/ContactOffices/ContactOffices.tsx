import { ContactData } from "data";
import { FunctionComponent } from "react";

import styles from "./ContactOffices.module.scss";

const ContactOffices: FunctionComponent = () => {
  return (
    <div>
      <h2 className={styles.title}>Our offices</h2>
      <p className={styles.text}>
        Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id
        malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.
      </p>
      <div className={styles.list}>
        {ContactData.offices.map(({ name, street, city }) => (
          <div key={name}>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.info}>
              <span className={styles.street}>{street}</span>
              <span className={styles.city}>{city}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactOffices;
