import React, { useEffect, useState } from 'react'
import './ScrollToTop.css'
import { FaArrowUp } from "react-icons/fa";


function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.pageYOffset > 300);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div className={`scroll-wrapper ${isVisible ? 'show' : 'hide'}`}>
        <button onClick={scrollToTop}><FaArrowUp /></button>
    </div>
    )
}

export default ScrollToTop