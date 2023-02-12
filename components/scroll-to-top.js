import { scrollToTop } from '../helpers/scroll-to-top-event';
import Link from 'next/link'
import { useState, useEffect } from "react";

export default function ScrollToTop() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Link href="/" legacyBehavior scroll={false}>
          <a id="scroll-to-top" onClick={scrollToTop} className="scroll-to-top">
            <span className="material-symbols-outlined">arrow_upward</span>
          </a>
        </Link>
      )}
    </>
  );
}
