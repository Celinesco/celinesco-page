import './MainSection.scss';
import TechnologiesContainer from './SkillsContainer/SkillsContainer';
import AOS from 'aos';
import "aos/dist/aos.css";
import ProjectsContainer from './Projects/ProjectsContainer';
import { MdPets } from "react-icons/md";
import { useEffect, useState } from 'react';
import Portada from './Portada';
import About from './About/About'


const MainSection = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    const [footPrints, setFootPrints] = useState(true);



    return (

        <div className="sections">
            <section className='section__main'>
                <Portada />
                {footPrints &&
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
                    </div>}

            </section>
            <ProjectsContainer />
            <TechnologiesContainer />
            <About />

        </div>

    )
}

export default MainSection;