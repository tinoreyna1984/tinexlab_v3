import { useRouter } from "next/router";
import { useEffect } from "react";

export default function LanguageSelector() {
    const router = useRouter()

    useEffect(() => {
        let es = document.querySelector("#spanish");
        let en = document.querySelector("#english");
        if (router.locale === 'es') {
            es.selected = true;
        }
        else if (router.locale === 'en') {
            en.selected = true;
        }
        router.push(router.pathname, router.asPath, {locale: router.locale})
            .then(console.log("locale: ", router.locale))
            .catch(e => console.log("Error: ", e.message))
    }, [])

    const changeLanguage = (e) => {
        const lang = e.target.value;
        router.push(router.pathname, router.asPath, {locale: lang})
    };

    return (
        <div className="language-selector">
            <span className="material-symbols-outlined">language</span>
            <select id="lang" name="lang" onChange={changeLanguage}>
                <option value="es" id="spanish">
                    Español
                </option>
                <option value="en" id="english">
                    English
                </option>
            </select>
        </div>
    );
}