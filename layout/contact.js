import { useTranslations } from "next-intl";
import ContactForm from "../components/contact-form";
import Social from "../components/social";


export default function Contact() {

    const t = useTranslations('contact');

    return (
        <section id="contact" className="contact">
            <h2>{t("title")}</h2>
            <div className="contact-container">
                <ContactForm />
                <Social />
                <p className="copyright">TinexLab &copy; {new Date().getFullYear()}. All rights reserved.</p>
            </div>
        </section>
    );
}