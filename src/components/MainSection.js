import './MainSection.scss';
import TechnologiesContainer from './SkillsContainer/SkillsContainer';
import AOS from 'aos';
import "aos/dist/aos.css";
import ProjectsContainer from './Projects/ProjectsContainer';
import { useEffect } from 'react';
import Portada from './Portada';
import About from './About/About';
import Contact from './Contact/Contact'


const MainSection = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (

        <div className="sections">
            <section className='section__main sections'>
                <Portada />
            </section>
            <section className='section__main'>
                <ProjectsContainer />
            </section>
            <section className='section__main'>
                <About />
            </section>
            <TechnologiesContainer />
            <Contact />

        </div>

    )
}

export default MainSection;