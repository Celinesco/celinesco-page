import LinksProjects from "./LinksProjects";
import "./ProjectCard.scss";

const ProjectCard = ({ img, title, alt, data_aos, duration_aos, urlProject, urlRepo }) => {
    return (
        <article
            className="container__card-project"
            data-aos={data_aos}
            data-aos-duration={duration_aos}
        >
            <div className="card__content-project">
                <div className="card__project-front">
                    <div className="card__img-project">
                        <img src={img} alt={alt}></img>
                    </div>
                    <h3 className="card__project-title">{title}</h3>
                </div>

                <div className="card__project-back">
                    <LinksProjects
                        text="Demo"
                        url={urlProject} />
                    <LinksProjects
                        text="Repo"
                        url={urlRepo} />

                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
