import ProjectCard from "./ProjectCard";
import "./MainSection.scss";
import { datosProyecto } from "./datos_proyectos";



const ProjectsContainer = () => {
    return (
        <section className="section__projects">
            <h2 className="title__section"  data-aos="flip-down" data-aos-duration="1000">Projects</h2>
            <div className="container__cards-projects">
              {datosProyecto.map((project)=> (
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