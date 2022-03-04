import './MainSection.scss';
import TechnologiesContainer from './TechnologiesContainer';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import ProjectsContainer from './ProjectsContainer';



const MainSection = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <>
            <section className="section__main">
                <div className='container__main-section'>
                    <div className=''>
                    
                    </div>
                    <div className='container__img-signature'>
                   
                    </div>
                </div>
            </section>
         
            <TechnologiesContainer />
            <ProjectsContainer />
        </>
    )
}

export default MainSection;