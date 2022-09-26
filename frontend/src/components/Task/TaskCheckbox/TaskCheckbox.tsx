import { FunctionComponent, useEffect, useRef, useState } from "react";
import Lottie, { AnimationDirection, AnimationItem } from "lottie-web";

import { CheckboxData } from "assets/json";

import styles from "./TaskCheckbox.module.scss";
import { TaskCheckboxProps } from "./TaskCheckbox.props";

const TaskCheckbox: FunctionComponent<TaskCheckboxProps> = ({
  value,
  onChange,
}) => {
  const [animation, setAnimation] = useState<AnimationItem | null>(null);
  const [direction, setDirection] = useState<AnimationDirection>(-1);
  const element = useRef(null);

  useEffect(() => {
    let animationItem: AnimationItem | null = null;

    if (element.current) {
      animationItem = Lottie.loadAnimation({
        container: element.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: CheckboxData,
      });
      setAnimation(animationItem);
      // animationItem.addEventListener("complete", () =>
      //   console.log("completed")
      // );
    }

    return () => animationItem?.destroy();
  }, []);

  useEffect(() => {
    if (animation) {
      animation.setDirection(value ? 1 : -1);
      animation.play();
    }
  }, [value, animation]);

  return (
    <button
      ref={element}
      className={styles.root}
      onClick={() => {
        onChange(!value);
      }}
    ></button>
  );
};

export default TaskCheckbox;
