import "./About.scss";
import profilePicture from "../../assets/profile_picture.jpg";
import Context from "../../Context/Context";
import { useContext, useState } from "react";
import { htmlAboutme } from "../datos_proyectos";
import emailjs from '@emailjs/browser';

const About = () => {
    const context = useContext(Context);
    const initialState = { name: '', surname: '', user_email: '', message: '' }
    const [datosFormulario, setDatosFormulario] = useState(initialState);


    const handleChange = (e) => {
        setDatosFormulario(
            {
                ...datosFormulario,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleSubmit = e => {
        e.preventDefault();
        emailjs.sendForm('service_ezni8g4', 'template_0r0j00d', e.target, 'XLNlgGOCoVeMHyEIy')
        setDatosFormulario(initialState)

    };

    return (
        <section className="section__about">
            <section className="sub__section">
                <h2>About me</h2>
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

            <section className="sub__section">
                <div className="container__title-alert">
                    <h2>Contact</h2>
                    <p>(All fields requierd)</p>
                </div>
                <div className="container__form">
                    <form className="formular__contact" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="column">
                                <label htmlFor="name">{htmlAboutme[context.language].form.name}</label>
                                <input
                                    type="text"
                                    name="name"
                                    id='name'
                                    value={datosFormulario.name}
                                    required
                                    onChange={handleChange}
                                ></input>
                            </div>
                            <div className="column">
                                <label htmlFor="surname">{htmlAboutme[context.language].form.surname}</label>
                                <input
                                    type="text"
                                    name="surname"
                                    id="surname"
                                    value={datosFormulario.surname}
                                    required
                                    onChange={handleChange}
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <label htmlFor="email">Email*</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    id="email"
                                    value={datosFormulario.user_email}
                                    onChange={handleChange}
                                ></input>
                            </div>
                        </div>
                        <div className="column">
                            <label htmlFor="message">{htmlAboutme[context.language].form.message}</label>
                            <textarea
                                row="5"
                                name="message"
                                required
                                id="message"
                                value={datosFormulario.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit">{htmlAboutme[context.language].form.submit}</button>
                    </form>
                </div>
            </section>

        </section>
    );
};

export default About;
