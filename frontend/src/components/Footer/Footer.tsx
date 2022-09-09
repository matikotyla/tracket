import { FooterData } from "data";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import FooterList from "./FooterList/FooterList";

import styles from "./Footer.module.scss";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.lists}>
              {FooterData.lists.map((list) => (
                <div key={list.title}>
                  <FooterList title={list.title} items={list.items} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <h3 className={styles.title}>Subscribe to our newsletter</h3>
            <p className={styles.text}>
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form className={styles.form}>
              <label htmlFor="email" className={styles.formLabel}>
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div className={styles.formBox}>
                <button
                  type="submit"
                  className="w-full bg-teal-600 flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-teal-700 focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.links}>
            {FooterData.icons.map((icon) => (
              <Link key={icon.name} to={icon.to} className={styles.link}>
                <icon.icon className={styles.icon} />
              </Link>
            ))}
          </div>
          <p className={styles.info}>
            &copy; 2022 Workflow, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
