import React from 'react';

import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';
import styles from "./Hero.module.css";
import appStyles from '../../App.module.css';
import { getImageUrl } from "../../utils";

export const Hero = () => {
    const ref = useFadeInOnScroll();
    const handleClick = () => {
        const link = document.createElement('a');
        link.href = '/Idioma_Resume.pdf';
        link.download = 'Idioma_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    
    return ( 
    <section className={`${styles.container} ${appStyles.hidden}`} ref={ref}>
        <div className= {styles.content}>
            <h1 className= {styles.title}> Hi, Jimmar Idioma Here! </h1>
            <p className= {styles.description}>A Computer Science student based in Philippines learning and exploring set of skills in this field. Achieving of what's impossible. </p>
            <a onClick={handleClick} className={styles.contactBtn}>Download Resume</a>
        </div>
        <img src={getImageUrl("hero/heroImage1.png")} alt="Hero image of me" className= {styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
    </section>
    );
}