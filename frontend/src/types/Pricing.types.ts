namespace PricingTypes {
  export interface Tier {
    name: string;
    to: string;
    price: number;
    description: string;
    features: string[];
  }

  export type Mode = "month" | "year";

  export interface Tab {
    name: string;
    mode: Mode;
    value: number;
  }
}

export default PricingTypes;
