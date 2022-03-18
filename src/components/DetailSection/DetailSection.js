import BackgroundParticles from './BackgroundParticles/BackgroundParticles';
import './BackgroundParticles/BackgroundParticles.scss';
import ProjectCard from '../Projects/ProjectCard';
import { useParams } from 'react-router-dom';
import { projectDetails } from '../datos_proyectos';
import ProjectInfo from '../Projects/ProjectInfo';
import { useContext } from 'react';
import Context from '../../Context/Context';


const DetailSection = () => {
    const context = useContext(Context)
    const tarjetaClickeada = useParams();
    const clickedPorjectObject = projectDetails.filter( proyecto => proyecto.id === tarjetaClickeada.project);
    const [clickedProjectArray] = [...clickedPorjectObject]


    
    window.scrollTo(0, 0);

    return (
        <section className="section__details">
            <BackgroundParticles />
            <ProjectCard 
            id={clickedProjectArray.id}
            img={!context.lightTheme ? clickedProjectArray.img_dark_theme : clickedProjectArray.img_white_theme}
            alt={clickedProjectArray[context.language].alt}
            title={clickedProjectArray[context.language].title} />
           <ProjectInfo 
            description={clickedProjectArray[context.language].description}
            title={clickedProjectArray[context.language].title} 
            code={clickedProjectArray.repository}
            link={clickedProjectArray.link}
            technologies={clickedProjectArray.technologies}/>
        </section>
    )
}

export default DetailSection;