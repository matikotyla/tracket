import { FunctionComponent } from "react";

import LoginHeader from "./LoginHeader/LoginHeader";
import LoginSocial from "./LoginSocial/LoginSocial";
import LoginDivider from "./LoginDivider/LoginDivider";
import LoginForm from "./LoginForm/LoginForm";

import { LoginImage } from "assets/images";

import styles from "./Login.module.scss";
import { withAnimation } from "hoc";
import { CommonAnimations } from "animations";

const Login: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.content}>
            <LoginHeader />
            <div className="space-y-6">
              <LoginSocial />
              <LoginDivider />
              <LoginForm />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.box}>
            <LoginImage className={styles.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAnimation(Login, CommonAnimations.page);
