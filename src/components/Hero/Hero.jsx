

import styles from "./Hero.module.css";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Nithisha</h1>
        <p className={styles.description}>
          I am a Software Engineering Graduate with a passion for coding and problem solving.
          I am well acquainted with full stack web development using both frontend and backend technologies.
        </p>
        <a href="mailto:nithisha.revathy@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="../src/assets/hero/nithisha.jpeg"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};