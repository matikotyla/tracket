import { PricingTypes } from "types";

namespace PricingData {
  export const tiers: PricingTypes.Tier[] = [
    {
      name: "Hobby",
      to: "#",
      price: 12,
      description: "All the basics for starting a new business",
      features: [
        "Potenti felis, in cras at at ligula nunc.",
        "Orci neque eget pellentesque.",
      ],
    },
    {
      name: "Freelancer",
      to: "#",
      price: 24,
      description: "All the basics for starting a new business",
      features: [
        "Potenti felis, in cras at at ligula nunc. ",
        "Orci neque eget pellentesque.",
        "Donec mauris sit in eu tincidunt etiam.",
      ],
    },
    {
      name: "Startup",
      to: "#",
      price: 32,
      description: "All the basics for starting a new business",
      features: [
        "Potenti felis, in cras at at ligula nunc. ",
        "Orci neque eget pellentesque.",
        "Donec mauris sit in eu tincidunt etiam.",
        "Faucibus volutpat magna.",
      ],
    },
    {
      name: "Enterprise",
      to: "#",
      price: 48,
      description: "All the basics for starting a new business",
      features: [
        "Potenti felis, in cras at at ligula nunc. ",
        "Orci neque eget pellentesque.",
        "Donec mauris sit in eu tincidunt etiam.",
        "Faucibus volutpat magna.",
        "Id sed tellus in varius quisque.",
        "Risus egestas faucibus.",
        "Risus cursus ullamcorper.",
      ],
    },
  ];

  export const tabs: PricingTypes.Tab[] = [
    {
      name: "Monthly billing",
      mode: "month",
      value: 1,
    },
    {
      name: "Yearly billing",
      mode: "year",
      value: 12,
    },
  ];
}

export default PricingData;
