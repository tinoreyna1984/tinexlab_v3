import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

export default function Social() {

    const t = useTranslations('contact');

    return (
        <div className="social">
            <div className="social-block">
                <h3>{t('followMe')}</h3>
                <div className="links-list">
                    <a href="https://www.linkedin.com/in/tinoreyna1984" target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/tinoreyna1984" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://twitter.com/tinoreyna1984" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://www.facebook.com/tinoreyna1984" target="_blank">
                        <FontAwesomeIcon icon={faFacebookF} size="2x" />
                    </a>
                    <a href="https://github.com/tinoreyna1984" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://wa.link/o4xl2a" target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    );
}