import React from "react";
import { InboxIcon, PhoneIcon } from "@heroicons/react/outline";

import styles from "./ContactSupportTechnical.module.scss";

const ContactSupportTechnical = () => {
  return (
    <div className="mt-12 sm:mt-16 md:mt-0">
      <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
        Technical Support
      </h2>
      <div className="mt-3">
        <p className="text-lg text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
          repellat error corporis doloribus similique, voluptatibus numquam
          quam, quae officiis facilis.
        </p>
      </div>
      <div className="mt-9">
        <div className="flex">
          <div className="flex-shrink-0">
            <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
          </div>
          <div className="ml-3 text-base text-gray-500">
            <p>+1 (555) 123 4567</p>
            <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
          </div>
        </div>
        <div className="mt-6 flex">
          <div className="flex-shrink-0">
            <InboxIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
          </div>
          <div className="ml-3 text-base text-gray-500">
            <p>support@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupportTechnical;
