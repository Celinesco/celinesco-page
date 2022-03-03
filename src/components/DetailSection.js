import BackgroundParticles from './BackgroundParticles';
import './BackgroundParticles.scss';
import ProjectCard from './ProjectCard';


const DetailSection = ({img, title, alt}) => {
    return (
        <section className="section__details">
            <BackgroundParticles />
            <ProjectCard  
            img={img}
            title={title}
            alt={alt}/>
        </section>
    )
}

export default DetailSection;