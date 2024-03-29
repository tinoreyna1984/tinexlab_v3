import { useTranslations } from "next-intl";
import SkillBar from "../components/skill-bar";

export default function Skills() {

    const t = useTranslations('skills');

    return (
        <section id="skills" className="skills">
            <h2 className="skills-title">Skills</h2>
            <div className="skill-group">
                <div className="frontend">
                    <h3>Frontend</h3>
                    <ul>
                        <li>HTML + CSS</li>
                        <li>SASS</li>
                        <li>JavaScript (ES6+) + TypeScript</li>
                        <li>Bootstrap (5+) + TailwindCSS</li>
                        <li>React (16+) + Redux Toolkit + Next.js</li>
                        <li>Angular (15+)</li>
                    </ul>
                </div>
                <div className="backend">
                    <h3>Backend</h3>
                    <ul>
                        <li>Java (17+)</li>
                        <li>Spring Boot (+ Security + Data JPA)</li>
                        <li>Node.js + Express</li>
                        <li>PHP + Laravel</li>
                        <li>Docker</li>
                        <li>{t("backend.microservices")}</li>
                    </ul>
                </div>
                <div className="management-tools">
                    <h3>{t("managementTools.title")}</h3>
                    <ul>
                        <li>Git</li>
                        <li>Atlassian (Jira + Bitbucket + Confluence)</li>
                        <li>{t("managementTools.scrum")}</li>
                    </ul>
                </div>
                <div className="work-tools">
                    <h3>{t("preferredTools.title")}</h3>
                    <ul>
                        <li>Visual Studio Code</li>
                        <li>IntelliJ IDEA</li>
                        <li>Notepad++</li>
                        <li>Brave Web Browser</li>
                        <li>PuTTY</li>
                        <li>Postman</li>
                    </ul>
                </div>
                <div className="preferred-stack">
                    <h3>{t("preferredStack.title")}</h3>
                    <p>{t("preferredStack.desc")}</p>
                </div>
                <div className="others">
                    <h3>{t("others.title")}</h3>
                    <ul>
                        <li>Linux/WSL</li>
                        <li>WordPress</li>
                        <li>{t("others.cLang")}</li>
                        <li>{t("others.sql")}</li>
                    </ul>
                </div>
                <div className="languages">
                    <h3>{t("languages.title")}</h3>
                    <SkillBar skill={t("languages.spanish.title")} percentage={t("languages.spanish.level")} skillId="spanish-bar" />
                    <SkillBar skill={t("languages.english.title")} percentage={t("languages.english.level")} skillId="english-bar" />
                    <SkillBar skill={t("languages.portuguese.title")} percentage={t("languages.portuguese.level")} skillId="portuguese-bar" />
                </div>
            </div>
        </section>
    );
}