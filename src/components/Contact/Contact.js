import "./Contact.scss";
import emailjs from "@emailjs/browser";
import ModalForm from "../ModalForm/ModalForm";
import Context from "../../Context/Context";
import AOS from 'aos';
import { useContext, useState, useEffect } from "react";
import { htmlAboutme } from "../datos_proyectos";

const Contact = () => {
    const context = useContext(Context);
    const initialState = { name: "", surname: "", user_email: "", message: "" };
    const [datosFormulario, setDatosFormulario] = useState(initialState);
    const [displayModal, setDisplayModal] = useState(false);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    const handleChange = (e) => {
        setDatosFormulario({
            ...datosFormulario,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_ezni8g4",
            "template_0r0j00d",
            e.target,
            "XLNlgGOCoVeMHyEIy"
        );
        setDatosFormulario(initialState);
        setDisplayModal(true);
    };

    return (
        <section className="section__contact">
            {displayModal && <ModalForm setDisplayModal={setDisplayModal} />}
            <div className="container__title-alert">
                <h2 className="title__section" data-aos="flip-down" data-aos-duration="1000">
                    {htmlAboutme[context.language].title_contact}
                </h2>
                <p>{htmlAboutme[context.language].form.requierd_message}</p>
            </div>
            <div className="container__form">
                <form className="formular__contact" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="column">
                            <label htmlFor="name">
                                {htmlAboutme[context.language].form.name}
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={datosFormulario.name}
                                required
                                onChange={handleChange}
                            ></input>
                        </div>
                        <div className="column">
                            <label htmlFor="surname">
                                {htmlAboutme[context.language].form.surname}
                            </label>
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
                        <label htmlFor="message">
                            {htmlAboutme[context.language].form.message}
                        </label>
                        <textarea
                            row="5"
                            name="message"
                            required
                            id="message"
                            value={datosFormulario.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button type="submit">
                        {htmlAboutme[context.language].form.submit}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
