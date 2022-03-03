import './ProjectCard.scss';
import { Link } from 'react-router-dom';

const ProjectCard = ({ img, title, alt, id }) => {
    return (
        <Link to={`/details/${id}`}  data-aos="zoom-in" data-aos-duration="1000"  id={id}>
            <article className='card__project'>
                <div className='container__img-project'>
                    <img src={img} alt={alt}></img>
                </div>
                <h3>{title}</h3>
            </article>
        </Link>
    )
}

export default ProjectCard;