import { useRouter } from "next/router";
import { maximizeImage } from "../helpers/maximize-image";

export default function Project({ project }) {

    const { title, title_en, content, content_en, repo, site, imageUrl, tagTitle } = project;

    const router = useRouter();
    const lang = router.locale;
    let project_title = "", description = "";
    if (lang == 'es') {
        project_title = title;
        description = content;
    }
    else if (lang == 'en') {
        project_title = title_en;
        description = content_en;
    }
    
    return (
        <div className="project">
            <img id="inicio" onClick={() => maximizeImage(imageUrl)} src={imageUrl} alt="project" loading="lazy" />
            <h3>{project_title}</h3>
            <p>{description}</p>
            <div className="external-links">
                {(site !== "#") && <a className="site" href={site} target="_blank">Site</a>}
                {(repo !== "#") && <a className="repo" href={repo} target="_blank">Repo</a>}
            </div>
            <p>Tags: {tagTitle.join(", ")}</p>
        </div>
    );
}