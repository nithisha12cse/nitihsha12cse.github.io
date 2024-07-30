

import styles from "./About.module.css";
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
       
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="../src/assets/about/cursorIcon.png" alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
              I am proficient in HTML, CSS, and JavaScript, with experience in 
              developing efficient, responsive web applications. Additionally,
               I have strong expertise in using React to build dynamic user interfaces
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="../src/assets/about/serverIcon.png" alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
              I possess foundational knowledge and hands-on experience with Node.js, as well as expertise in API integration.
                </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="../src/assets/about/uiIcon.png" alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Database Management</h3>
              <p>
              I have a strong proficiency in SQL and some experience working with MongoDB.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};