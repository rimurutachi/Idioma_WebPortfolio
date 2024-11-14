import React, { useRef } from 'react';
import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import appStyles from '../../App.module.css';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const ref = useFadeInOnScroll();
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hf5e8es', 'template_wsu38gx', form.current, {
        publicKey: 'HAc1o6iIqfmC0Diy_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    
    return <footer id="contact" className={`${styles.container} ${appStyles.hidden}`} ref={ref}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Contact for Inquiries!</p>
            <p>© Idioma, Jimmar D.</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
            <label>Name</label>
            <input type="text" name="user_name" placeholder="Name" required />
            <label>Email</label>
            <input type="email" name="user_email" placeholder="Email" required />
            <label>Message</label>
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit"> Send </button>
        </form>
        <ul className={styles.links}>
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