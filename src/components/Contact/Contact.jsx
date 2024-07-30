

import styles from "./Contact.module.css";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
     
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="../src/assets/contact/emailIcon.png" alt="Email icon" />
       
          <a href="mailto:nithisha.revathy@gmail.com">nithisha.revathy@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="../src/assets/contact/link.png"
            alt="LinkedIn icon"
            className="link"
          />
          <a href="www.linkedin.com/in/nithisha1234">linkedin.com/nithisha</a>
        </li>
        <li className={styles.link}>
          <img src="../src/assets/contact/git.png"  alt="Github icon" />
          <a href="https://github.com/nithisha12cse">github.com/nithisha</a>
        </li>
      </ul>
    </footer>
  );
};