import { ReactElement } from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

import clsx from "clsx";

import { SelectOptionProps } from "./SelectOption.props";

const SelectOption: <T>(props: SelectOptionProps<T>) => ReactElement = ({
  value,
  selected,
  children,
}) => {
  return (
    <Listbox.Option
      className={({ active }) =>
        clsx(
          active ? "text-white bg-teal-600" : "text-gray-900",
          "relative cursor-default select-none py-2 pl-3 pr-9"
        )
      }
      value={value}
    >
      {({ active }) => (
        <>
          <span
            className={clsx(
              selected ? "font-semibold" : "font-normal",
              "block truncate"
            )}
          >
            {children}
          </span>

          {selected ? (
            <span
              className={clsx(
                active ? "text-white" : "text-teal-600",
                "absolute inset-y-0 right-0 flex items-center pr-4"
              )}
            >
              <CheckIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          ) : null}
        </>
      )}
    </Listbox.Option>
  );
};

export default SelectOption;
