import ProjectCard from "./ProjectCard";
import "./ProjectsContainer.scss";
import { pojectDetails } from "../datos_proyectos";
import AOS from 'aos';
import { useEffect } from 'react';



const ProjectsContainer = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <section className="section__projects">
            <h2 className="title__section"  data-aos="flip-down" data-aos-duration="1000">Projects</h2>
            <div className="container__cards-projects">
              {pojectDetails.map((project)=> (
                  <ProjectCard key={project.id}
                  data_aos="zoom-in"
                  duration_aos="1000"
                  id={project.id}
                  img={project.img}
                  alt={project.alt}
                  title={project.title} />
              ))}
            </div>

        </section>
    )
}

export default ProjectsContainer;