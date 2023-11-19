import { useTranslations } from "next-intl";

export default function Cv() {

    const t = useTranslations('cv');

    return (
        <section id="cv" className="cv">
            <div className="basic-data">
                <h2>CV</h2>
                <p className="personal-data-resume">{t("resume")}</p>
            </div>
            <div className="general-timeline">
                <h3 className="gt-title">{t("experience.title")}</h3>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <span className="material-symbols-outlined">work</span>
                        </div>
                        <div className="timeline-content right">
                            <h2>{t("experience.experience04.company")}</h2>
                            <h3>{t("experience.experience04.role")}</h3>
                            <h4>{t("experience.experience04.city")}</h4>
                            <h4>{t("experience.experience04.years")}</h4>
                            <p>
                                {t("experience.experience04.description")}
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <span className="material-symbols-outlined">work</span>
                        </div>
                        <div className="timeline-content">
                            <h2>{t("experience.experience03.company")}</h2>
                            <h3>{t("experience.experience03.role")}</h3>
                            <h4>{t("experience.experience03.city")}</h4>
                            <h4>{t("experience.experience03.years")}</h4>
                            <p>
                                {t("experience.experience03.description")}
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <span className="material-symbols-outlined">work</span>
                        </div>
                        <div className="timeline-content right">
                            <h2>{t("experience.experience02.company")}</h2>
                            <h3>{t("experience.experience02.role")}</h3>
                            <h4>{t("experience.experience02.city")}</h4>
                            <h4>{t("experience.experience02.years")}</h4>
                            <p>
                                {t("experience.experience02.description")}
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <span className="material-symbols-outlined">work</span>
                        </div>
                        <div className="timeline-content">
                            <h2>{t("experience.experience01.company")}</h2>
                            <h3>{t("experience.experience01.role")}</h3>
                            <h4>{t("experience.experience01.city")}</h4>
                            <h4>{t("experience.experience01.years")}</h4>
                            <p>
                                {t("experience.experience01.description")}
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <span className="material-symbols-outlined">school</span>
                        </div>
                        <div className="timeline-content right">
                            <h2>{t("education.education03.school")}</h2>
                            <h3>{t("education.education03.achievement")}</h3>
                            <h4>{t("education.education03.city")}</h4>
                            <h4>{t("education.education03.years")}</h4>
                            <p>
                                {t("education.education03.description")}
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <span className="material-symbols-outlined">school</span>
                        </div>
                        <div className="timeline-content">
                            <h2>{t("education.education02.school")}</h2>
                            <h3>{t("education.education02.achievement")}</h3>
                            <h4>{t("education.education02.city")}</h4>
                            <h4>{t("education.education02.years")}</h4>
                            <p>
                                {t("education.education02.description")}
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <span className="material-symbols-outlined">school</span>
                        </div>
                        <div className="timeline-content right">
                            <h2>{t("education.education01.school")}</h2>
                            <h3>{t("education.education01.achievement")}</h3>
                            <h4>{t("education.education01.city")}</h4>
                            <h4>{t("education.education01.years")}</h4>
                            <p>
                                {t("education.education01.description")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}