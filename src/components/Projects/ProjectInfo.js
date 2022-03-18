import '../DetailSection/DetailSection.scss';
import { HiOutlineExternalLink } from "react-icons/hi";
import { htmlProjects } from '../datos_proyectos';
import Context from '../../Context/Context';
import { useContext } from 'react';



const ProjectInfo = ({ title, description, technologies, link, code }) => {
    const context = useContext(Context);


    return (
        <article className='info__projects'>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className='paragraph'>
                <p>{htmlProjects[context.language].made_with} {technologies}.</p>
            </div>
            <div className='paragraph'>
                <p><a href={link} target="_blank" rel="noopener noreferrer"><HiOutlineExternalLink />{htmlProjects[context.language].project_link}</a></p>
            </div>
            <a href={code} target="_blank" rel="noopener noreferrer"><p><HiOutlineExternalLink />{htmlProjects[context.language].find_code_at}</p></a>
        </article>
    )
}


export default ProjectInfo;