import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LanguageSelector from "./lang-selector";
import ToggleDarkMode from "./toggle-dark-mode";

export default function Navigation() {

    const t = useTranslations('nav');

    /* Menu with navlinks and a dark mode toggle button */

    // checks dark mode status on every refresh
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("theme")) || "light";
        document.querySelector("#dark-mode-switch").checked = (stored === "light") ? false : true;
        if (stored === "light") document.body.classList.remove("dark");
        else document.body.classList.add("dark");
    }, []);

    const router = useRouter();

    return (
        <nav className="nav">
            <Link href="/#bio" locale={router.locale} scroll={false}>
                Bio
            </Link>
            <Link href="/#cv" locale={router.locale} scroll={false}>
                CV
            </Link>
            <Link href="/#skills" locale={router.locale} scroll={false}>
                Skills
            </Link>
            <Link href="/#portfolio" locale={router.locale} scroll={false}>
                {t('portfolio')}
            </Link>
            <Link href="/#hobbies" locale={router.locale} scroll={false}>
                Hobbies
            </Link>
            <Link href="/#contact" locale={router.locale} scroll={false}>
                {t('contact')}
            </Link>
            <LanguageSelector />
            <ToggleDarkMode />
        </nav>
    );
}