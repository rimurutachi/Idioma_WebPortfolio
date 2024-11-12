import React, { useState, useEffect } from 'react';
import './Loader.css';
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out of loader
      setTimeout(() => {
        setLoading(false);
        setShowContent(true); // Show main content with fade-in
      }, 500); // Loader fade-out duration
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className={`loader-wrapper ${fadeOut ? 'fade-out' : ''}`}>
          <div className="loader" />
        </div>
      ) : (
        <div className={`${styles.App} fade-in ${showContent ? 'show' : ''}`}>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;


