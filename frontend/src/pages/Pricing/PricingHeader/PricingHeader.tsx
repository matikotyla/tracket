import React, { FunctionComponent } from "react";

import { PricingImage } from "assets/images";

import styles from "./PricingHeader.module.scss";
import clsx from "clsx";
import { PricingData } from "data";
import { PricingHeaderProps } from "./PricingHeader.props";

const PricingHeader: FunctionComponent<PricingHeaderProps> = ({
  mode,
  onModeChange,
}) => {
  return (
    <div className={styles.root}>
      <h1>
        <span className={styles.subtitle}>Pricing</span>
        <span className={styles.title}>The right price for you</span>
      </h1>
      <p className={styles.text}>
        Start building for free, then add a site plan to go live. Account plans
        unlock additional features.
      </p>
      <PricingImage className={styles.image} />
      <div className={styles.actions}>
        {PricingData.tabs.map((tab) => (
          <button
            key={tab.name}
            type="button"
            className={clsx(
              styles.button,
              styles.buttonActive,
              mode === tab.mode
                ? "border-gray-200 bg-white text-gray-900 shadow-sm"
                : "border-transparent text-gray-700"
            )}
            onClick={() => onModeChange(tab.mode)}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PricingHeader;
