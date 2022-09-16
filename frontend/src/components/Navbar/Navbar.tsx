import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { Popover } from "@headlessui/react";

import { NavbarProps } from "./Navbar.props";

import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import NavbarMobile from "./NavbarMobile/NavbarMobile";

import styles from "./Navbar.module.scss";
import { useAuth } from "hooks";
import { AnimatePresence } from "framer-motion";
import { AnimationData } from "data";
import { CommonAnimations } from "animations";

const Navbar: FunctionComponent<NavbarProps> = () => {
  const { authenticated } = useAuth();

  return (
    <AnimatePresence mode="wait">
      {!authenticated ? (
        <motion.div
          className={styles.navbar}
          {...AnimationData.animation}
          key={1}
          variants={CommonAnimations.navbar}
        >
          <Popover>
            <NavbarDesktop />
            <NavbarMobile />
          </Popover>
        </motion.div>
      ) : (
        <motion.div
          {...AnimationData.animation}
          key={2}
          variants={CommonAnimations.navbar}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
