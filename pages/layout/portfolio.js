import { useTranslations } from "next-intl";
import Project from "../components/project";

export default function Portfolio({projects}) {

    //console.log(projects)

    const t = useTranslations('portfolio');

    return (
        <section id="portfolio" className="portfolio">
            <h2 className="portfolio-title">{t("title")}</h2>
            <div className="projects">
                {/* <Project /> */}
                {projects.map(project => <Project key={project.slug} project={project} />)}
            </div>
        </section>
    );
}