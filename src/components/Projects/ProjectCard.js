import './ProjectCard.scss';
import { Link } from 'react-router-dom';




const ProjectCard = ({ img, title, alt, id, data_aos, duration_aos }) => {
    
    return (
        <Link to={`/details/${id}`}  data-aos={data_aos} data-aos-duration={duration_aos}  id={id}>
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