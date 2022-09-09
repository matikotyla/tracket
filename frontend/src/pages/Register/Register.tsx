import { FunctionComponent } from "react";

import RegisterHeader from "./RegisterHeader/RegisterHeader";
import RegisterForm from "./RegisterForm/RegisterForm";

import { RegisterImage } from "assets/images";

import styles from "./Register.module.scss";
import { withAnimation } from "hoc";
import { CommonAnimations } from "animations";

const Register: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.content}>
            <RegisterHeader />
            <RegisterForm />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.box}>
            <RegisterImage className={styles.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAnimation(Register, CommonAnimations.page);
