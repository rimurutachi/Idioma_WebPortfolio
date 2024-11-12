import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
        <h2 className={styles.title}>About Me!</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/idioma_1x1.png")} alt="about image" className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/website.png")} alt="frontend icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>Became a frontend developer with an experience in building responsive, functional, and user-friendly websites and systems.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/backend.png")} alt="server icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>Gaining experience by developing functional features, security, and connecting databases in websites and systems.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}> 
                    <img src={getImageUrl("about/database.png")} alt="database icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Database Administrator</h3>
                        <p>Handling vast databases using MySQL in websites and systems.</p>
                    </div>
                </li>
            </ul>
        </div>
        </section>
    );
};