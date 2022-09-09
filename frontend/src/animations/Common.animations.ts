import { Variants } from "framer-motion";

namespace CommonAnimations {
  export const page: Variants = {
    initial: {
      opacity: 0,
      y: -10,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 10,
    },
  };
}

export default CommonAnimations;
