import { TransitionClasses } from "@headlessui/react";

namespace SidebarAnimations {
  export const coverTransition: TransitionClasses = {
    enter: "transition-opacity ease-linear duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "transition-opacity ease-linear duration-300",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
  };

  export const containerTransition: TransitionClasses = {
    enter: "transition ease-in-out duration-300 transform",
    enterFrom: "-translate-x-full",
    enterTo: "translate-x-0",
    leave: "transition ease-in-out duration-300 transform",
    leaveFrom: "translate-x-0",
    leaveTo: "-translate-x-full",
  };

  export const panelTransition: TransitionClasses = {
    enter: "ease-in-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in-out duration-300",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
  };

  export const dropdownTransition: TransitionClasses = {
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95",
  };
}

export default SidebarAnimations;
