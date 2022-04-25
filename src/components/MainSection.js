import "./MainSection.scss";
import TechnologiesContainer from "./SkillsContainer/SkillsContainer";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectsContainer from "./Projects/ProjectsContainer";
import { useEffect } from "react";
import Portada from "./Portada";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Huellitas from "./Huellitas";

const MainSection = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="">
            <section className="section__main">
                <Portada />
            </section>
            <section className="section__main">
                <ProjectsContainer />
                <Huellitas />
            </section>
            <section className="section__main">
                <About />
                <Huellitas />
            </section>
            <section className="section__main">
                <TechnologiesContainer />
                <Huellitas />
            </section>
            <section className="section__main">
                <Contact />
            </section>
        </div>
    );
};

export default MainSection;
