import React from "react";
import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';
import styles from "./Projects.module.css";
import appStyles from '../../App.module.css';
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    const ref = useFadeInOnScroll();
    return (
        <section className={`${styles.container} ${appStyles.hidden}`} ref={ref} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <p className={styles.titleDescription}>Projects that I've been contributed and created since the start of my journey.</p>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                    return <ProjectCard key={id} project={project} />;
                    })}
            </div>
        </section>
    );
};