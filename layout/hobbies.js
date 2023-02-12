import { useTranslations } from "next-intl";

export default function Hobbies() {

    const t = useTranslations('hobbies');

    return (
        <section id="hobbies" className="hobbies">
            <h2>Hobbies</h2>
            <div className="hobbies-list">
                <div className="hobby">
                    {/* <img src="/assets/music.png" /> */}
                    <picture>
                        <source srcSet="./avif/music.avif" type="image/avif" />
                        <source srcSet="./webp/music.webp" type="image/webp" />
                        <img src="./minified/music.png" alt="Inicio" loading="lazy" />
                    </picture>
                    <h3>{t('music.title')}</h3>
                    <p>{t('music.paragraph')}</p>
                </div>
                <div className="hobby">
                    {/* <img src="/assets/reading.jpg" /> */}
                    <picture>
                        <source srcSet="./avif/reading.avif" type="image/avif" />
                        <source srcSet="./webp/reading.webp" type="image/webp" />
                        <img src="./minified/reading.png" alt="Inicio" loading="lazy" />
                    </picture>
                    <h3>{t('reading.title')}</h3>
                    <p>{t('reading.paragraph')}</p>
                </div>
            </div>
        </section>
    );
}