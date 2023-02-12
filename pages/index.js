import { bucket } from "./api/cosmic-api";
import ScrollToTop from "./components/scroll-to-top";
import Bio from "./layout/bio";
import Contact from "./layout/contact";
import Cv from "./layout/cv";
import Hobbies from "./layout/hobbies";
import Portfolio from "./layout/portfolio";
import Skills from "./layout/skills";

// internationalization
export async function getStaticProps({ locale }) {
  const data = await bucket.objects
    .find({
      type: "projects", // Object Type slug
    })
    .props("title,slug,metadata"); // response properties

  const projects = await data.objects;
  
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
      projects
    }
  };
}

export default function Home(props) {
  const {projects} = props;
  return (
    <>
      <Bio />
      <Cv />
      <Skills />
      <Portfolio projects={projects} />
      <Hobbies />
      <Contact />
      <ScrollToTop />
    </>
  )
}
