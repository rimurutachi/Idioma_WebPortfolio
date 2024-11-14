import React from "react";

import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';
import styles from "./Experience.module.css";
import appStyles from '../../App.module.css';
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";


export const Experience = () => {
    const ref = useFadeInOnScroll();
    return (
    <section className={`${styles.container} ${appStyles.hidden}`} ref={ref} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <p className={styles.titleDescription}>Proficient Programming Languages that I've been learned.</p>
        <div className={styles.content}>
            <div className={styles.skills}>{
                skills.map((skill, id) => {
                    return (
                    <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                        </div>
                        <p>{skill.title}</p>
                    </div>
                    );
                })}
            </div>
        </div>
    </section>
    );
};