import React from 'react';
import styles from './page.module.css';

const AboutPage = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.textContainer}>
        <p>
          <span className={styles.span}>Business Analyzer</span> helps you get a better and more detailed overview of
          different businesses and their websites. The analyzer is divided into two main parts:
        </p>
        <ul>
          <li className={styles.li}>
            we collect and display all the important bits of information related to a chosen company or companies
            &#40;information that can also be found in the Estonian Business Registry&#41;, so that you get the best
            overview of company&apos;s &#40;or companies&apos;&#41; current status and activities;
          </li>
          <li className={styles.li}>
            we perform a Google Lighthouse analysis on a chosen company or companies &#40;it has audits for performance,
            accessibility, progressive web apps, SEO, and more&#41;, so that you get the best overview of all the
            different aspects of company&apos;s &#40;or companies&apos;&#41; website status, especially those related to
            user experience.
          </li>
        </ul>
        <p>
          Both parts of the analyzer are important, if you have a goal of improving users&apos; experience during their
          visit of your website. We hope you get at least something valuable out of the results provided. If you&apos;re
          having trouble understanding how the analyzer works, definately check out the &quot;How To Use&quot; page!
        </p>
        <p>
          <span className={styles.span}>Good luck!</span>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
