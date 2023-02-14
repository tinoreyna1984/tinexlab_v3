import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Project from "../components/project";
import TechFilter from "../components/tech-filter";
import { filterProjectsByTag } from "../redux/projectsSlice";

export default function Portfolio({ tags }) {

    const t = useTranslations('portfolio');

    const dispatch = useDispatch();
    const { filterTagsArray, filterCount, filteredProjects, projects } = useSelector(state => state.projects)

    // we need to use this hook on every interaction with the GUI
    useEffect(() => {
        if (filterCount > 0) {
            dispatch(filterProjectsByTag({ filterTagsArray, projects }))
        }
    }, [filterCount])

    // if filterCount > 0, filter projects by tag
    // if no project matches the filter array, notify that no projects are found with the filters selected
    // otherwise, render the original projects array

    return (
        <section id="portfolio" className="portfolio">
            <h2 className="portfolio-title">{t("title")}</h2>
            <div className="tech-filter">
                <p>{t("filterByTag")}</p>
                {tags.map(tag => (
                    <TechFilter key={tag.slug} title={tag.title} slug={tag.slug} />
                ))}
            </div>
            <div className="projects">
                {filterCount > 0 ?
                    (filteredProjects?.length > 0
                        ? filteredProjects?.map(project => <Project key={project.slug} project={project} />) :
                        <p>{t("noProjectsFound")}</p>)
                    : projects?.map(project => <Project key={project.slug} project={project} />
                    )
                }
            </div>
        </section>
    );
}