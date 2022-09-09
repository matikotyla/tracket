import React, { FunctionComponent } from "react";
import { CheckIcon } from "@heroicons/react/solid";

import { PricingTierProps } from "./PricingTier.props";

const PricingTier: FunctionComponent<PricingTierProps> = ({
  name,
  description,
  price,
  to,
  features,
}) => {
  return (
    <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
      <div className="p-6">
        <h2 className="text-lg font-medium leading-6 text-gray-900">{name}</h2>
        <p className="mt-4 text-sm text-gray-500">{description}</p>
        <p className="mt-8">
          <span className="text-4xl font-bold tracking-tight text-gray-900">
            ${price}
          </span>{" "}
          <span className="text-base font-medium text-gray-500">/mo</span>
        </p>
        <a
          href={to}
          className="mt-8 block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900"
        >
          Buy {name}
        </a>
      </div>
      <div className="px-6 pt-6 pb-8">
        <h3 className="text-sm font-medium text-gray-900">
          What&apos;s included
        </h3>
        <ul role="list" className="mt-6 space-y-4">
          {features.map((feature) => (
            <li key={feature} className="flex space-x-3">
              <CheckIcon
                className="h-5 w-5 flex-shrink-0 text-green-500"
                aria-hidden="true"
              />
              <span className="text-sm text-gray-500">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingTier;
