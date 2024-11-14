import React from "react";
import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import appStyles from '../../App.module.css';

export const Contact = () => {
    const ref = useFadeInOnScroll();
    const email = "jimmaridioma20@gmail.com";
    const subject = "Hello! I would like to connect";
    const body = "Hi Jimmar,\n\nI came across your portfolio and would like to get in touch.";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    return <footer id="contact" className={`${styles.container} ${appStyles.hidden}`} ref={ref}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Contact for Inquiries!</p>
            <p>© Idioma, Jimmar D.</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon."/>
                <a href={gmailUrl} target="_blank" rel="noopener noreferrer">jimmaridioma20@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon."/>
                <a href="https://www.linkedin.com/in/jimmar-idioma-aa2614245/">linkedin.com/jimmar-idioma</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon."/>
                <a href="https://github.com/rimurutachi">github.com/rimurutachi</a>
            </li>
        </ul>
    </footer>;
};