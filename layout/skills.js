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
                    <SkillBar skill="HTML + CSS" percentage="90%" skillId="html-css-bar" />
                    <SkillBar skill="SASS" percentage="70%" skillId="scss-bar" />
                    <SkillBar skill="React (16+) + Redux Toolkit + Next.js" percentage="90%" skillId="react-bar" />
                    <SkillBar skill="JavaScript (ES6+) + TypeScript" percentage="85%" skillId="js-bar" />
                    <SkillBar skill="Bootstrap (5+) + TailwindCSS" percentage="80%" skillId="frontend-frameworks-bar" />
                    <SkillBar skill="Angular" percentage="85%" skillId="angular-bar" />
                </div>
                <div className="backend">
                    <h3>Backend</h3>
                    <SkillBar skill="Java (17+)" percentage="85%" skillId="java-bar" />
                    <SkillBar skill="Spring Boot (+ Security + Data JPA)" percentage="85%" skillId="springboot-bar" />
                    <SkillBar skill="Node.js + Express" percentage="75%" skillId="nodejs-bar" />
                    <SkillBar skill="PHP + Laravel" percentage="70%" skillId="laravel-bar" />
                    <SkillBar skill="Docker" percentage="30%" skillId="docker-bar" />
                </div>
                <div className="management-tools">
                    <h3>{t("managementTools.title")}</h3>
                    <SkillBar skill="Git" percentage="60%" skillId="git-bar" />
                    <SkillBar skill={t("managementTools.scrum")} percentage="50%" skillId="scrum-bar" />
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
                    <SkillBar skill="Linux/WSL" percentage="90%" skillId="linux-bar" />
                    <SkillBar skill="WordPress" percentage="90%" skillId="wp-bar" />
                    <SkillBar skill={t("others.cLang")} percentage="85%" skillId="c-bar" />
                    <SkillBar skill={t("others.sql")} percentage="85%" skillId="sql-bar" />
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