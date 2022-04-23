import "./About.scss";
import profilePicture from "../../assets/profile_picture.jpg";
import Context from "../../Context/Context";
import { useContext, useEffect } from "react";
import { htmlAboutme } from "../datos_proyectos";


const About = () => {
    const context = useContext(Context);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="section__about">
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
