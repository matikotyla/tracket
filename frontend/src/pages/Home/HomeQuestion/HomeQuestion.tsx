import React from "react";
import { Link } from "react-router-dom";

import { HomeData } from "data";

import styles from "./HomeQuestion.module.scss";

const HomeQuestion = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently asked questions</h2>
          <p className={styles.text}>
            Can’t find the answer you’re looking for? Reach out to our{" "}
            <Link to="/" className={styles.link}>
              customer support
            </Link>{" "}
            team.
          </p>
        </div>
        <div className={styles.column}>
          <dl className={styles.list}>
            {HomeData.questions[0].map((question, index) => (
              <div key={index} className={styles.item}>
                <dt className={styles.itemTitle}>{question.question}</dt>
                <dd className={styles.itemDescription}>{question.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className={styles.column}>
          <dl className={styles.list}>
            {HomeData.questions[1].map((question, index) => (
              <div key={index} className={styles.item}>
                <dt className={styles.itemTitle}>{question.question}</dt>
                <dd className={styles.itemDescription}>{question.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default HomeQuestion;
