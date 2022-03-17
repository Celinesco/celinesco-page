import './MainSection.scss';
import TechnologiesContainer from './SkillsContainer/SkillsContainer';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import ProjectsContainer from './Projects/ProjectsContainer';
import AnimacionPortada from './AnimacionPortada';
import ArnoldyYo from '../assets/ArnoldyYo.jpg'
import { MdPets } from "react-icons/md";

const MainSection = () => {
   
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (

        <div className="sections">
            <section className='section__main'>
                <div className='secret-container'>
                    <p>This is me and one of the best cats in the world.</p>
                    <div className='container_img-profile'>
                        <img src={ArnoldyYo} alt="Celina Ines Alsina"></img>
                    </div>
                </div>
                <AnimacionPortada />
                <div className='container__steps'>
                    <div className='container__step step-1'>
                        <MdPets />
                    </div>
                    <div className='container__step step-2'>
                        <MdPets />
                    </div>
                    <div className='container__step step-3'>
                        <MdPets />
                    </div>
                    <div className='container__step step-4'>
                        <MdPets />
                    </div>
                </div>
            </section>
            <TechnologiesContainer />
            <ProjectsContainer />
        </div>

    )
}

export default MainSection;