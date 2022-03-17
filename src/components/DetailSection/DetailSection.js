import BackgroundParticles from './BackgroundParticles/BackgroundParticles';
import './BackgroundParticles/BackgroundParticles.scss';
import ProjectCard from '../Projects/ProjectCard';
import { useParams } from 'react-router-dom';
import { pojectDetails } from '../datos_proyectos';
import ProjectInfo from '../Projects/ProjectInfo';


const DetailSection = () => {
    const tarjetaClickeada = useParams();
    const prueba = pojectDetails.filter( proyecto => proyecto.id === tarjetaClickeada.project);
    window.scrollTo(0, 0);

    return (
        <section className="section__details">
            <BackgroundParticles />
            <ProjectCard 
            id={prueba[0].id}
            img={prueba[0].img}
            alt={prueba[0].alt}
            title={prueba[0].title} />
           <ProjectInfo 
            description={prueba[0].description}
            title={prueba[0].title} 
            code={prueba[0].repository}
            link={prueba[0].link}
            technologies={prueba[0].technologies}/>
        </section>
    )
}

export default DetailSection;