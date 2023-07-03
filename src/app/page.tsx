import React from 'react';
import styles from './page.module.css';

const HomePage = () => {
  return (
    <>
      <div className={styles.formContainer}>
        <p className={styles.formHeading}>
          Choose this option below, if you&apos;d like to get additional information just about{' '}
          <span className={styles.span}>one business</span>. We will perform a Google Lighthouse analysis on the chosen
          business too!
        </p>
        <form id={styles.form1}>
          <label className={styles.label} id="business-name-label" htmlFor="business-name-input">
            Enter the name of the business you&apos;re interested in:
          </label>
          <input className={styles.input} type="text" id="business-name-input" required></input>
          <label className={styles.label} id="business-link-label" htmlFor="business-link-input">
            Enter the website link of the business you&apos;re interested in:
          </label>
          <input className={styles.input} type="text" id="business-link-input" required></input>
          <button type="submit" className={styles.analyzeButton}>
            ANALYZE
          </button>
        </form>
        <p className={styles.formHeading}>
          Choose this option below, if you&apos;d like to get additional information about{' '}
          <span className={styles.span}>many businesses</span>. We will perform a Google Lighthouse analysis on chosen
          businesses too!
        </p>
        <form id={styles.form2}>
          <label className={styles.label} id="business-file-label" htmlFor="business-file-input">
            Choose a .csv file that contains names and website links of the businesses you are interested in:
          </label>
          <input className={styles.input} type="file" id="business-file-input" accept=".csv" required></input>
          <button type="submit" className={styles.analyzeButton}>
            ANALYZE
          </button>
        </form>
      </div>
    </>
  );
};

export default HomePage;
