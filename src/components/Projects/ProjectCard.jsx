

import styles from "./ProjectCard.module.css";


export const ProjectCard = ({
  // eslint-disable-next-line react/prop-types
  project : { title,description,skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
     
      {// eslint-disable-next-line react/prop-types
      skills.map((skill,id) => {
          return (
            <li key={id}className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};