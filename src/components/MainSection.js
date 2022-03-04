import './MainSection.scss';
import TechnologiesContainer from './TechnologiesContainer';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import ProjectsContainer from './ProjectsContainer';
import AnimacionPortada from './AnimacionPortada';
import profileImg from '../assets/profile.jpg';
import ArnoldyYo from '../assets/ArnoldyYo.jpg'


const MainSection = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <>
            <section className="section__main">
                <div className='container__main-section'>
                    <div className='secret-container'>
                        <p>This is me and one of the best cats in the world.</p>
                        <div className='container_img-profile'>
                            <img src={ArnoldyYo}></img>
                        </div>
                    </div>

                    <AnimacionPortada />

                </div>
            </section>

            <TechnologiesContainer />
            <ProjectsContainer />
        </>
    )
}

export default MainSection;