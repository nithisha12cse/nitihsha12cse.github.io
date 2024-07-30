

import styles from "./Experience.module.css";




export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
        
           
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  
                  <img src="../src/assets/skills/java.png"></img>
                  
                </div>
                <p>Java</p>
              </div>
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  
                  <img src="../src/assets/skills/python.png"></img>
                  
                </div>
                <p>Python</p>
              </div>
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  
                  <img src="../src/assets/skills/c.png"></img>
                  
                </div>
                <p>C</p>
              </div>
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  
                  <img src="../src/assets/skills/html.png"></img>
                  
                </div>
                <p>HTML</p>
              </div>
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  
                  <img src="../src/assets/skills/css.png"></img>
                  
                </div>
                <p>CSS</p>
              </div>
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  
                  <img src="../src/assets/skills/javascr.png"></img>
                  
                </div>
                <p>Javascript</p>
              </div>
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  
                  <img src="../src/assets/skills/react.png"></img>
                  
                </div>
                <p>React</p>
              </div>
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  
                  <img src="../src/assets/skills/sql.png"></img>
                  
                </div>
                <p>MySQL</p>
              </div>
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  
                  <img src="../src/assets/skills/NODE.png"></img>
                  
                </div>
                <p>Node</p>
              </div>
       
       </div>
      </div>
    </section>
  );
};
