import './ProjectCard.scss';
import { Link } from 'react-router-dom';

const ProjectCard = ({ img, title, alt }) => {
    return (
        <Link to="/details/:project"  data-aos="zoom-in" data-aos-duration="1000" className='card__project'>
            <article>
                <div className='container__img-project'>
                    <img src={img} alt={alt}></img>
                </div>
                <h3>{title}</h3>
            </article>
        </Link>
    )
}

export default ProjectCard;