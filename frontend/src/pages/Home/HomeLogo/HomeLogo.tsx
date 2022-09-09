import { FunctionComponent } from "react";

import { HomeData } from "data";

import styles from "./HomeLogo.module.scss";

const HomeLogo: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.content}>
          {HomeData.logos.map((logo, index) => (
            <div key={index} className={logo.className}>
              <img className={styles.image} src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeLogo;
