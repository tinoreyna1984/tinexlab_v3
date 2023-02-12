import { useRouter } from "next/router";

export default function Project({project}) {

    const {title, slug, metadata} = project;
    const {tags, info, image} = metadata;
    const {title_en, content, content_en, repo, site} = info;
    const {url: imageUrl} = image;
    const arrTags = tags.map(tag => tag.title);
    //console.log({slug, imageUrl, title, title_en, content, content_en, repo, site, arrTags});

    const router = useRouter();
    const lang = router.locale;
    let project_title = "", description = "";
    if(lang == 'es'){
        project_title = title;
        description = content;
    }
    else if(lang == 'en'){
        project_title = title_en;
        description = content_en;
    }

    const maximizeImage = (imageUrl) => {
        const amplifiedImg = document.createElement('picture');
        amplifiedImg.innerHTML = `<img src="${imageUrl}" class="fade-in-project" alt="project" loading="lazy" />`;

        // overlay
        const overlay = document.createElement("div");
        overlay.appendChild(amplifiedImg);
        overlay.classList.add('overlay');
        overlay.onclick = () => { // evento para cerrar el modal
            const body = document.querySelector("body");
            body.classList.remove('fixed-body');
            overlay.remove()
        };

        // button for closing overlay modal
        const cerrarModal = document.createElement('p');
        cerrarModal.textContent = "X";
        cerrarModal.classList.add("close-button");
        overlay.appendChild(cerrarModal);
        cerrarModal.onclick = () => { // evento para cerrar el modal
            const body = document.querySelector("body");
            body.classList.remove('fixed-body');
            overlay.remove()
        };

        // add image within the overlay created on body
        const body = document.querySelector("body");
        body.appendChild(overlay);
        body.classList.add('fixed-body');
    }

    return (
        <div className="project">
            <img id="inicio" onClick={() => maximizeImage(imageUrl)} src={imageUrl} alt="project" />
            <h3>{project_title}</h3>
            <p>{description}</p>
            <div className="external-links">
                <a className="demo" href={site} target="_blank">Demo</a>
                <a className="repo" href={repo} target="_blank">Repo</a>
            </div>
            <p>Tags: {arrTags.join(", ")}</p>
        </div>
    );
}