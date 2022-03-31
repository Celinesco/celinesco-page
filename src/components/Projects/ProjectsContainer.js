import ProjectCard from "./ProjectCard";
import "./ProjectsContainer.scss";
import { projectDetails } from "../datos_proyectos";
import AOS from 'aos';
import Context from "../../Context/Context";
import { useContext, useEffect } from "react";
import { htmlTitles } from "../datos_proyectos";


const ProjectsContainer = () => {

    const context = useContext(Context)
    useEffect(()=> {
        AOS.init();
        AOS.refresh();
    }, [])
    
    return (
        <section className="section__projects">
            <h2 className="title__section" data-aos="flip-down" data-aos-duration="1000">{htmlTitles[context.language].title_projects}</h2>
            <div className="container__cards-projects">
                {projectDetails.map((project) => (
                    <ProjectCard key={project.id}
                        data_aos="zoom-in"
                        duration_aos="1000"
                        id={project.id}
                        img={!context.lightTheme ? project.img_dark_theme : project.img_white_theme}
                        alt={project[context.language].alt}
                        title={project[context.language].title} />
                ))}
            </div>
        </section>
    )
}

export default ProjectsContainer;