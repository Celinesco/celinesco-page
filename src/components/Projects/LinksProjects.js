import './LinksProjects.scss';

const LinksProjects = ({ text, url }) => {
    let linkProject = true
    if (text === 'Repo') {
        linkProject = false
    }


    return (
        <a className={`link__card-project ${linkProject && 'link__url-project'}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer">
            {text}
        </a>
    )
}

export default LinksProjects