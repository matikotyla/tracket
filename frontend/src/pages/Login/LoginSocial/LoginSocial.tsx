import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import LoginData from "data/Login.data";

import styles from "./LoginSocial.module.scss";

const LoginSocial: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <p className={styles.title}>Sign in with</p>
      <div className={styles.list}>
        <div>
          <Link to="/" className={styles.link}>
            <LoginData.FacebookIcon className={styles.icon} />
          </Link>
        </div>
        <div>
          <Link to="/" className={styles.link}>
            <LoginData.TwitterIcon className={styles.icon} />
          </Link>
        </div>
        <div>
          <Link to="/" className={styles.link}>
            <LoginData.GithubIcon className={styles.icon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginSocial;
