import { FunctionComponent } from "react";

import { HomeData } from "data";

import styles from "./HomeFeature.module.scss";

const HomeFeature: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.headerInfo}>Transactions</h2>
          <h1 className={styles.headerTitle}>A better way to send money</h1>
          <p className={styles.headerText}>
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <div className={styles.content}>
          <dl className={styles.list}>
            {HomeData.features.map((feature) => (
              <div key={feature.name} className={styles.item}>
                <dt className={styles.itemTitle}>
                  <div className={styles.itemBox}>
                    <feature.icon className={styles.itemIcon} />
                  </div>
                  <p className={styles.itemName}>{feature.name}</p>
                </dt>
                <dd className={styles.itemDescription}>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default HomeFeature;
