import firmaImg from '../assets/firma.svg';
import catImg from '../assets/cat.svg';
import './MainSection.scss';
import TechnologiesContainer from './TechnologiesContainer';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import ComponenteHuellas from './ComponenteHuellas';
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
                    <div className='container__img-cat'>
                        <img src={catImg}></img>
                    </div>
                    <div className='container__img-signature'>
                        <img src={firmaImg}></img>
                    </div>
                </div>
            </section>
         
            <TechnologiesContainer />
            <ProjectsContainer />
        </>
    )
}

export default MainSection;