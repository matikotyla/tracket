import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { SparklesIcon } from "@heroicons/react/24/outline";

import { SearchImage } from "assets/images";

import styles from "./HomeAbout.module.scss";

const HomeAbout: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.first}>
          <div>
            <div className={styles.box}>
              <SparklesIcon className={styles.icon} />
            </div>
            <h2 className={styles.title}>Boost results</h2>
            <p className={styles.text}>
              Whether you’re sharing one link or millions, Bitly lets you
              personalize, share, and track your content links, while capturing
              data with every click. On top of better deliverability and
              click-through, rich link-level data gives you crucial insight into
              your link engagement so your team can make smarter decisions
              around its content and communications.
            </p>
            <Link to="/" className={styles.link}>
              Get started
            </Link>
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.image}>
            <SearchImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
