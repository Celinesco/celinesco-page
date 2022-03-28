import './MainSection.scss';
import TechnologiesContainer from './SkillsContainer/SkillsContainer';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import ProjectsContainer from './Projects/ProjectsContainer';
import AnimacionPortada from './AnimacionPortada';
import { MdPets } from "react-icons/md";
import { useState } from 'react';


const MainSection = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
        return () => ''
    }, [])

    const [footPrints, setFootPrints] = useState(true);
    window.onscroll = () => {
        setFootPrints(false)
        if (window.scrollY === 0){
            setFootPrints(true)
        }
    }


    return (

        <div className="sections">
            <section className='section__main'>
                <AnimacionPortada />
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
            <TechnologiesContainer />
            <ProjectsContainer />
        </div>

    )
}

export default MainSection;