import { useState } from "react";

export default function LeftSection() {

    /* Logo and mobile menu button section */

    const [opened, setOpened] = useState(false);

    const handleMenu = () => {
        let hamburgerButton = document.querySelector('#menu');
        let nav = document.querySelector('nav');
        let transition = "all 0.6s ease-in-out";

        if (!window.matchMedia("(max-width: 991.50px)").matches) return; /* only for mobile devices */

        if (!opened) { /* open menu */
            setOpened(!opened);
            nav.classList.add("show-mobile");
            hamburgerButton.textContent = " close ";
            nav.style.transition = transition;
        }
        else { /* close menu */
            setOpened(!opened);
            nav.style.transition = "none";
            nav.classList.remove("show-mobile");
            hamburgerButton.textContent = " menu ";
        }
    }

    return (
        <div className="left-section">
            <a href="/"> {/* Logo */}
                <img src="/tinexlab-logo.png" alt="logo" loading="lazy" />
                <h1 className="site-title">TinexLab</h1>
            </a>
            <span id="menu" className="material-symbols-outlined" onClick={handleMenu}> menu </span> {/* Mobile menu button */}
        </div>
    );
}