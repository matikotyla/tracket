import { PricingTypes } from "types";

export interface PricingHeaderProps {
  mode: PricingTypes.Mode;
  onModeChange: (mode: PricingTypes.Mode) => void;
}
