import "./NavBar.scss";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { useContext } from "react";
import Context from "../../Context/Context";
import { htmlTitles } from "../datos_proyectos";
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";

const NavBar = () => {
    const [hamburguerMenu, setHamburguerMenu] = useState(false);

    const context = useContext(Context);

    const handleClickOpenMenu = () => {
        setHamburguerMenu(true);
    };

    const handleClickCloseMenu = () => {
        setHamburguerMenu(false);
    };

    const handleClickLanguage = (e) => {
        context.setLanguage(e.target.value);
    };

    return (
        <>
            <button className="button__hamburguer" onClick={handleClickOpenMenu}>
                <GiHamburgerMenu />
            </button>
            <div
                className={`container__nav-menu ${hamburguerMenu && "desplazar-menu"}`}
            >
                <div className="container__border">
                    <button className="close-nav-menu" onClick={handleClickCloseMenu}>
                        <ImCross />
                    </button>
                    <div className="container__user-preferences">
                        <button
                            className="button__language"
                            onClick={handleClickLanguage}
                            aria-label="Deutsch"
                            lang="de"
                            value="de"
                        >
                            DE
                        </button>
                        <button
                            className="button__language"
                            onClick={handleClickLanguage}
                            aria-label="English"
                            lang="en"
                            value="en"
                        >
                            EN
                        </button>
                        <button
                            className="button__language"
                            onClick={handleClickLanguage}
                            aria-label="Español"
                            lang="es"
                            value="es"
                        >
                            ES
                        </button>
                    </div>

                    <ul className="navbar__list">
                        <Link to="/" onClick={handleClickCloseMenu}>
                            <li>{htmlTitles[context.language].title_home}</li>
                        </Link>
                        <Link to="/projects" onClick={handleClickCloseMenu}>
                            <li>{htmlTitles[context.language].title_projects}</li>
                        </Link>
                        <Link to="/about" onClick={handleClickCloseMenu}>
                            <li>{htmlTitles[context.language].title_about}</li>
                        </Link>
                        <Link to="/skills" onClick={handleClickCloseMenu}>
                            <li>{htmlTitles[context.language].title_skills}</li>
                        </Link>
                        <Link to="/contact" onClick={handleClickCloseMenu}>
                            <li>{htmlTitles[context.language].title_contact}</li>
                        </Link>
                    </ul>

                </div>


            </div>

            <nav className="navbar">
                <div className="container__info-navbar">
                    <Link to="/">
                        <p>Celina Inés Alsina</p>
                        <p className="text-front-end">
                            {htmlTitles[context.language].intro}
                        </p>
                    </Link>
                    <div className="container__user-preferences">
                        <button
                            className="button__language"
                            onClick={handleClickLanguage}
                            aria-label="Deutsch"
                            lang="de"
                            value="de"
                        >
                            DE
                        </button>
                        <button
                            className="button__language"
                            onClick={handleClickLanguage}
                            aria-label="English"
                            lang="en"
                            value="en"
                        >
                            EN
                        </button>
                        <button
                            className="button__language"
                            onClick={handleClickLanguage}
                            aria-label="Español"
                            lang="es"
                            value="es"
                        >
                            ES
                        </button>
                    </div>
                </div>
                <div>
                    <ul className="navbar__list">
                        <Link to="/">
                            <li onClick={() => window.scrollTo(0, 0)}>{htmlTitles[context.language].title_home}</li>
                        </Link>
                        <Link to="/projects">
                            <li>{htmlTitles[context.language].title_projects}</li>
                        </Link>
                        <Link to="/about">
                            <li>{htmlTitles[context.language].title_about}</li>
                        </Link>
                        <Link to="/skills">
                            <li>{htmlTitles[context.language].title_skills}</li>
                        </Link>
                        <Link to="/contact">
                            <li>{htmlTitles[context.language].title_contact}</li>
                        </Link>
                    </ul>
                </div>

                <div className="container__social-media">
                    <ul>
                        <a
                            href="https://github.com/Celinesco"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Ir a cuenta Github Celinesco"
                        >
                            <li>
                                <BsGithub />
                            </li>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/celinesalsina/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Perfil Linkedin de Celina"
                        >
                            <li>
                                <BsLinkedin />
                            </li>
                        </a>
                        <a
                            href="mailto:celina.alsina@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Enviar mail"
                        >
                            <li>
                                <BsEnvelope />
                            </li>
                        </a>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
