import { useRef, useEffect } from 'react';
import appStyles from '../App.module.css';

export const useFadeInOnScroll = () => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(appStyles.show); // Add 'show' class to trigger fade-in
                        observer.unobserve(entry.target); // Stop observing after element is shown
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the section is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return ref;
};