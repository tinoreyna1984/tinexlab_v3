import { useTranslations } from "next-intl";

export default function Bio() {

    const t = useTranslations('bio');

    return (
        <section id="bio" className="bio">
            <div className="img">
                {/* <img src="/assets/bio.jpg" alt="Tino" loading="lazy" /> */}
                <picture>
                    <source srcSet="./avif/bio.avif" type="image/avif" />
                    <source srcSet="./webp/bio.webp" type="image/webp" />
                    <img src="./minified/bio.png" alt="Inicio" loading="lazy" />
                </picture>
            </div>
            <div className="name-and-title">
                <h2>Tino Reyna</h2>
                <p>Web Developer</p>
            </div>
            <div className="contact-info">
                <p><span className="material-symbols-outlined"> mail </span>: tinoreyna1984@gmail.com</p>
                <p><span className="material-symbols-outlined"> call </span>: +51 960992996</p>
            </div>
            <p className="about-me">{t("aboutMe")}</p>
        </section>
    );
}