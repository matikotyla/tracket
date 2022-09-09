import { ComponentType, FunctionComponent } from "react";
import { motion, Variants } from "framer-motion";

export default function withAnimation<T extends JSX.IntrinsicAttributes>(
  Component: ComponentType<T>,
  animation: Variants
) {
  const AnimatedComponent: FunctionComponent<T> = (props) => {
    return (
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={animation}
      >
        <Component {...(props as T)} />
      </motion.div>
    );
  };

  return AnimatedComponent;
}
