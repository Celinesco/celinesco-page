import '../DetailSection/DetailSection.scss';
import { HiOutlineExternalLink } from "react-icons/hi";

const ProjectInfo = ({ title, description, technologies, link, code }) => {
    return (
        <article className='info__projects'>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className='paragraph'>
                <p>The project was built using: {technologies}.</p>
            </div>
            <div className='paragraph'>
                <p><a href={link} target="_blank" rel="noopener noreferrer"><HiOutlineExternalLink />Click HERE! </a>to see the project.</p>
            </div>
            <p><HiOutlineExternalLink />If you are interested in the code, <a href={code} target="_blank" rel="noopener noreferrer">you can also take a look at the repository.</a></p>
        </article>
    )
}


export default ProjectInfo;