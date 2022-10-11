import clsx from "clsx";

import { TaskImage } from "assets/images";

import styles from "./HomeHero.module.scss";
import { useTranslation } from "react-i18next";

const HomeHero = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.first}>
          <div className={styles.title}>
            <span>{t("home.hero.titleFirst")}</span>
            <span>{t("home.hero.titleSecond")}</span>
            {/* <span>Organize your</span>
            <span>work and life</span> */}
          </div>
          <div className={styles.text}>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua ad ad non deserunt sunt.
          </div>
          <div className={styles.links}>
            <div>
              <a href="#" className={clsx(styles.link, styles.linkPrimary)}>
                Get started
              </a>
            </div>
            <div>
              <a href="#" className={clsx(styles.link, styles.linkSecondary)}>
                Live demo
              </a>
            </div>
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.image}>
            <TaskImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
