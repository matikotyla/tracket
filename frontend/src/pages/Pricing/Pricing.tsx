import { FunctionComponent, useState } from "react";

import { PricingData } from "data";
import { PricingTypes } from "types";
import { withAnimation } from "hoc";
import { CommonAnimations } from "animations";

import PricingHeader from "./PricingHeader/PricingHeader";
import PricingTier from "./PricingTier/PricingTier";

import styles from "./Pricing.module.scss";

const Pricing: FunctionComponent = () => {
  const [mode, setMode] = useState<PricingTypes.Mode>("month");

  const handleModeChange = (mode: PricingTypes.Mode): void => {
    setMode(mode);
  };

  return (
    <div className={styles.root}>
      <PricingHeader mode={mode} onModeChange={handleModeChange} />
      <div className={styles.container}>
        {PricingData.tiers.map((tier) => (
          <PricingTier
            key={tier.name}
            name={tier.name}
            description={tier.description}
            price={tier.price}
            to={tier.to}
            features={tier.features}
          />
        ))}
      </div>
    </div>
  );
};

export default withAnimation(Pricing, CommonAnimations.page);
