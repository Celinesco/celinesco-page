import './DetailSection.scss'

const ProjectInfo = ({title, description, technologies, link, code}) => {
    return (
        <article className='info__projects'>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>The project was built using: {technologies}</p>
            <p>You can take a look at the project </p><a href={link} target="_blank" rel="noopener noreferrer">Clicking HERE!</a>
            <p>If you are interested in the code, <a href={code} target="_blank" rel="noopener noreferrer">here is also the repository</a></p>
        </article>
    )
}


export default ProjectInfo;