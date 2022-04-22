import './NavBar.scss';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { useContext } from 'react';
import Context from '../../Context/Context';
import { htmlTitles, htmlAboutme } from '../datos_proyectos';
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";



const NavBar = () => {
    const [hamburguerMenu, setHamburguerMenu] = useState(false)

    const context = useContext(Context)

    const handleClickTheme = () => {
        context.setLightTheme(!context.lightTheme)
    }

    const handleClickOpenMenu = () => {
        setHamburguerMenu(true)
    }

    const handleClickCloseMenu = () => {
        setHamburguerMenu(false)
    }

    const handleClickLanguage = (e) => {
        context.setLanguage(e.target.value)
    }

    return (
        <nav className="navbar">
            <div className='container__info-navbar'>
                <Link to='/'>
                    <p>Celina Inés Alsina</p>
                    <p>{htmlTitles[context.language].intro}</p>
                </Link>
                <div className='container__user-preferences'>
                    <button className='button__dark-mode' onClick={handleClickTheme}><FaLightbulb /></button>
                    <button className='button__language' onClick={handleClickLanguage} aria-label='Deutsch' lang='de' value='de'>DE</button>
                    <button className='button__language' onClick={handleClickLanguage} aria-label='English' lang='en' value='en' >EN</button>
                    <button className='button__language' onClick={handleClickLanguage} aria-label='Español' lang='es' value='es'>ES</button>
                </div>
            </div>
            <div className='container__sections-nav'>
                <ul className="navbar__list">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/projects"><li>{htmlTitles[context.language].title_projects}</li></Link>
                    <Link to='/about'><li>{htmlAboutme[context.language].title_about}</li></Link>
                    <Link to='/contact'><li>{htmlAboutme[context.language].title_about}</li></Link>
                </ul>


            </div>
            <button className='container__hamburguer-menu-button' onClick={handleClickOpenMenu}>
                <GiHamburgerMenu />
            </button>
            <div className={`container__nav-menu ${hamburguerMenu && 'desplazar-menu'}`}>
                <button className="close-nav-menu" onClick={handleClickCloseMenu}><ImCross /></button>
                <ul className='list__navbar-menu'>
                    <div className='container__user-preferences'>
                        <button className='button__language' onClick={handleClickLanguage} aria-label='Deutsch' lang='de' value='de'>DE</button>
                        <button className='button__language' onClick={handleClickLanguage} aria-label='English' lang='en' value='en' >EN</button>
                        <button className='button__language' onClick={handleClickLanguage} aria-label='Español' lang='es' value='es'>ES</button>
                    </div>
                    <Link to="/" onClick={handleClickCloseMenu}><li>Home</li></Link>
                    <Link to="/projects" onClick={handleClickCloseMenu}><li>{htmlTitles[context.language].title_projects}</li></Link>
                    <Link to='/about' onClick={handleClickCloseMenu}><li>{htmlAboutme[context.language].title_about}</li></Link>
                </ul>
            </div>
            <div className='container__social-media'>
                <ul>
                    <a href="https://github.com/Celinesco" target="_blank" rel="noopener noreferrer" aria-label="Ir a cuenta Github Celinesco"><li><BsGithub /></li></a>
                    <a href="https://www.linkedin.com/in/celinesalsina/" target="_blank" rel="noopener noreferrer" aria-label="Perfil Linkedin de Celina"><li><BsLinkedin /></li></a>
                    <a href="mailto:celina.alsina@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Enviar mail"><li><BsEnvelope /></li></a>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;