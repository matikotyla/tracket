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

  export const navbar: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      // transition: { duration: 0.5 },
    },
  };
}

export default CommonAnimations;
