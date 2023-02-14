import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ScrollToTop from "../components/scroll-to-top";
import Bio from "../layout/bio";
import Contact from "../layout/contact";
import Cv from "../layout/cv";
import Hobbies from "../layout/hobbies";
import Portfolio from "../layout/portfolio";
import Skills from "../layout/skills";
import { initState } from "../redux/projectsSlice";
import { Loader } from "./api/cosmic-load";

// internationalization
export async function getStaticProps({ locale }) {
  
  const { projects, tags } = await Loader();
  
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
      projects,
      tags
    }
  };
}

export default function Home(props) {
  const {projects, tags} = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initState({projects}));
  }, [])
  

  return (
    <>
      <Bio />
      <Cv />
      <Skills />
      <Portfolio tags={tags} />
      <Hobbies />
      <Contact />
      <ScrollToTop />
    </>
  )
}
