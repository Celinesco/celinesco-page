import "./About.scss";
import profilePicture from "../../assets/profile_picture.jpg";
import Context from "../../Context/Context";
import { useContext, useEffect } from "react";
import { htmlAboutme } from "../datos_proyectos";
import mapaArg from '../../assets/mapaArg.png';
import mapaDeutschland from '../../assets/mapaDeutschland.png'


const About = () => {
    const context = useContext(Context);

    // falta alt de las imagenes en distintos idiomas

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="section__about">
            <div className="container__img-map arg-map">
                <img src={mapaArg} alt="Mapa Argentina"></img>
            </div>
            <div className="container__img-map de-map">
                <img src={mapaDeutschland} alt="Mapa Alemania"></img>
            </div>
            <h2 className="title__section">
                {htmlAboutme[context.language].title_about}
            </h2>
            <div className="container__info-aboutme">
                <div className="container__img-profile">
                    <img src={profilePicture} alt="my profile"></img>
                </div>
                <div className="container__aboutme-text">
                    <p>{htmlAboutme[context.language].about_me}</p>
                    <p>{htmlAboutme[context.language].contact_me}</p>
                </div>
            </div>
        </section>
    );
};

export default About;
