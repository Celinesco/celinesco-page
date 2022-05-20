import "./MainSection.scss";
import SkillsContainer from "../SkillsContainer/SkillsContainer";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectsContainer from "../Projects/ProjectsContainer";
import { useEffect } from "react";
import Portada from "../Portada";
import About from "../About/About";
import Contact from "../Contact/Contact";


const MainSection = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);



    return (
        <>
            <Portada />
            <ProjectsContainer />
            <div className="separador"></div>
            <About />
            <div className="separador"></div>
            <SkillsContainer indication={true} />
            <div className="separador"></div>
            <Contact indication={true} />
        </>
    );
};

export default MainSection;
