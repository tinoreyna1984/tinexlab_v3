const tags = [
    {
        slug: "wordpress",
        title: "WordPress"
    },
    {
        slug: "auth0",
        title: "auth0"
    },
    {
        slug: "cosmicjs",
        title: "CosmicJS"
    },
    {
        slug: "nextjs",
        title: "Next.js"
    },
    {
        slug: "react-native",
        title: "React Native"
    },
    {
        slug: "mern",
        title: "MERN"
    },
    {
        slug: "mongodb",
        title: "MongoDB"
    },
    {
        slug: "express",
        title: "Express"
    },
    {
        slug: "nodejs",
        title: "Node.js"
    },
    {
        slug: "redux-toolkit",
        title: "Redux Toolkit"
    },
    {
        slug: "react",
        title: "React"
    },
    {
        slug: "bootstrap",
        title: "Bootstrap"
    },
    {
        slug: "sass",
        title: "SASS"
    },
    {
        slug: "javascript",
        title: "JavaScript"
    },
    {
        slug: "css",
        title: "CSS"
    },
    {
        slug: "html",
        title: "HTML"
    }
];

const projects = [
    {
        title: "Landing page",
        slug: "landing-page",
        tagSlugs: [
            "html",
            "css",
            "javascript",
            "sass"
        ],
        tagTitle: [
            "HTML",
            "CSS",
            "JavaScript",
            "SASS"
        ],
        title_en: "Landing page",
        content: "Landing page hecha con HTML, SASS y una pizca de JavaScript para el botón de menú responsivo.",
        content_en: "Landing page made with HTML, SASS and a little bit of JavaScript for the responsive menu button.",
        repo: "https://github.com/tinoreyna1984/devchallenges-07",
        site: "https://tino-devchallenges-07.netlify.app/",
        year: "2023",
        imageUrl: "./portfolio/devchallenges-07-mobile.png"
    },
    {
        title: "Página de estado de compra",
        slug: "pagina-de-estado-de-compra",
        tagSlugs: [
            "html",
            "css"
        ],
        tagTitle: [
            "HTML",
            "CSS"
        ],
        title_en: "Checkout page",
        content: "Página diseñada con HTML y CSS.",
        content_en: "Page designed with HTML and CSS.",
        repo: "https://github.com/tinoreyna1984/devchallenges-06",
        site: "https://tino-devchallenges-06.netlify.app/",
        year: "2023",
        imageUrl: "./portfolio/devchallenges-06-tablet.png"
    },
    {
        title: "Página de galería",
        slug: "pagina-de-galeria",
        tagSlugs: [
            "html",
            "css"
        ],
        tagTitle: [
            "HTML",
            "CSS"
        ],
        title_en: "Gallery page",
        content: "Diseño hecho con HTML y CSS.",
        content_en: "Design made with HTML and CSS.",
        repo: "https://github.com/tinoreyna1984/devchallenges-05",
        site: "https://tino-devchallenges-05.netlify.app/",
        year: "2023",
        imageUrl: "./portfolio/devchallenges-05-mobile.png"
    },
    {
        title: "Página de la receta del cheescake clásico",
        slug: "pagina-de-la-receta-del-cheescake-clasico",
        tagSlugs: [
            "html",
            "css"
        ],
        tagTitle: [
            "HTML",
            "CSS"
        ],
        title_en: "Classic cheesecake recipe page",
        content: "Página desarrollada en HTML y CSS.",
        content_en: "Page developed in HTML and CSS.",
        repo: "https://github.com/tinoreyna1984/devchallenges-04",
        site: "https://tino-devchallenges-04.netlify.app/",
        year: "2023",
        imageUrl: "./portfolio/devchallenges-04-mobile.png"
    },
    {
        title: "Página de la consultora de interiores",
        slug: "pagina-de-la-consultora-de-interiores",
        tagSlugs: [
            "html",
            "css"
        ],
        tagTitle: [
            "HTML",
            "CSS"
        ],
        title_en: "Interior consultant page",
        content: "Diseño de la página de una consultora de interiores hecho con HTML y CSS.",
        content_en: "Design of the page of an interior consultant made with HTML and CSS.",
        repo: "https://github.com/tinoreyna1984/devchallenges-03",
        site: "https://tino-devchallenges-03.netlify.app/",
        year: "2023",
        imageUrl: "./portfolio/devchallenges-03-desktopXL.png"
    },
    {
        title: "Página del equipo creativo",
        slug: "pagina-del-equipo-creativo",
        tagSlugs: [
            "html",
            "css"
        ],
        tagTitle: [
            "HTML",
            "CSS"
        ],
        title_en: "The creative crew page",
        content: "Diseño hecho con HTML y CSS, con metodologías de colocación Flexbox y CSS Grid.",
        content_en: "Design made with HTML and CSS, with Flexbox and CSS Grid placement methodologies.",
        repo: "https://github.com/tinoreyna1984/devchallenges-02",
        site: "https://tino-devchallenges-02.netlify.app/",
        year: "2023",
        imageUrl: "./portfolio/devchallenges-02-desktopXL.png"
    },
    {
        title: "Diseño de página 404",
        slug: "diseno-de-pagina-404",
        tagSlugs: [
            "html",
            "css",
            "sass"
        ],
        tagTitle: [
            "HTML",
            "CSS",
            "SASS"
        ],
        title_en: "404 Page Layout",
        content: "Diseño hecho con HTML y SASS para una página 404 (no encontrado).",
        content_en: "Design made with HTML and SASS for a 404 (not found) page.",
        repo: "https://github.com/tinoreyna1984/devchallenges-01",
        site: "https://tino-devchallenges-01.netlify.app/",
        year: "2023",
        imageUrl: "./portfolio/devchallenges-01-desktopXL.png"
    },
    {
        title: "Calculadora (PWA)",
        slug: "calculadora-pwa",
        tagSlugs: [
            "react",
            "javascript",
            "bootstrap"
        ],
        tagTitle: [
            "React",
            "JavaScript",
            "Bootstrap"
        ],
        title_en: "Calculator (PWA)",
        content: "Calculadora simple hecha con React JS y Bootstrap 5.",
        content_en: "Simple calculator made with React JS and Bootstrap 5.",
        repo: "https://github.com/tinoreyna1984/calcu",
        site: "https://calcu-tr.vercel.app/",
        year: "2022",
        imageUrl: "./portfolio/calcu-tr-mobile.png"
    },
    {
        title: "Molde para rutas protegidas",
        slug: "molde-para-rutas-protegidas",
        tagSlugs: [
            "bootstrap",
            "redux-toolkit",
            "react",
            "javascript"
        ],
        tagTitle: [
            "Bootstrap",
            "Redux Toolkit",
            "React",
            "JavaScript"
        ],
        title_en: "Template for protected routes",
        content: "Molde que simula un sitio con rutas protegidas, que solo pueden ser visibles con una autenticación válida.",
        content_en: "Template that simulates a site with protected paths, which can only be viewable with valid authentication.",
        repo: "https://github.com/tinoreyna1984/molde-rutas-protegidas",
        site: "https://molde-rutas-protegidas.vercel.app/",
        year: "2022",
        imageUrl: "./portfolio/molde-rutas-protegidas-desktopXL.png"
    },
    {
        title: "Sitio basado en IT Book Store",
        slug: "sitio-basado-en-it-book-store",
        tagSlugs: [
            "bootstrap",
            "auth0",
            "redux-toolkit",
            "react",
            "javascript"
        ],
        tagTitle: [
            "Bootstrap",
            "auth0",
            "Redux Toolkit",
            "React",
            "JavaScript"
        ],
        title_en: "Site based on IT Book Store",
        content: "Sitio con autenticación con auth0 y Redux Toolkit, con páginas de búsqueda, perfil y otras utilidades.",
        content_en: "Site with authentication with auth0 and Redux Toolkit, with search pages, profile and other utilities.",
        repo: "https://github.com/tinoreyna1984/book-search",
        site: "https://book-search-tino.vercel.app/",
        year: "2022",
        imageUrl: "./portfolio/it-book-store-desktopXL.png"
    },
    {
        title: "Node.js webserver con páginas estáticas",
        slug: "nodejs-webserver-con-paginas-estaticas",
        tagSlugs: [
            "html",
            "css",
            "javascript",
            "nodejs",
            "express"
        ],
        tagTitle: [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Express"
        ],
        title_en: "Node.js webserver with static pages",
        content: "Sitio descriptivo con renderización desde el backend.",
        content_en: "Descriptive site with rendering from the backend.",
        repo: "https://github.com/tinoreyna1984/06-webserver",
        site: "https://zero6-webserver-tr.onrender.com/",
        year: "2022",
        imageUrl: "./portfolio/webserver-desktopXL.png"
    },
    {
        title: "Kiuti Cases",
        slug: "kiuti-cases",
        tagSlugs: [
            "bootstrap",
            "cosmicjs",
            "redux-toolkit",
            "nextjs",
            "react",
            "javascript",
            "css",
            "html"
        ],
        tagTitle: [
            "Bootstrap",
            "CosmicJS",
            "Redux Toolkit",
            "Next.js",
            "React",
            "JavaScript",
            "CSS",
            "HTML"
        ],
        title_en: "Kiuti Cases",
        content: "Catálogo de ventas de estuches para iPhone. Usa Cosmic CMS como backend.",
        content_en: "Sales catalog of cases for iPhone. Use Cosmic CMS as backend.",
        repo: "https://github.com/tinoreyna1984/kiuti-catalogo-next-js",
        site: "https://kiuti-catalogo.vercel.app/",
        year: "2022",
        imageUrl: "./portfolio/kiuti-cases-tablet.png"
    },
    {
        title: "Kiuti Cases (iOS)",
        slug: "kiuti-cases-ios",
        tagSlugs: [
            "react-native",
            "redux-toolkit",
            "cosmicjs",
            "react",
            "javascript"
        ],
        tagTitle: [
            "React Native",
            "Redux Toolkit",
            "CosmicJS",
            "React",
            "JavaScript"
        ],
        title_en: "Kiuti Cases Mobile",
        content: "Versión para iOS de Kiuti Cases. Solo visible en Snack.",
        content_en: "Kiuti Cases iOS version. Only visible in Snack.",
        repo: "https://github.com/tinoreyna1984/kiuti-ios",
        site: "https://snack.expo.dev/@tinoreyna1984/67e236?platform=ios",
        year: "2022",
        imageUrl: "./portfolio/kiuti-cases-ios.png"
    }
]

export const Loader = async () => {
    return {projects, tags};
}