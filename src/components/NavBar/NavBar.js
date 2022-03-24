import './NavBar.scss';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { useContext } from 'react';
import Context from '../../Context/Context';


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
                <p>Celina Inés Alsina</p>
                <p>Front-end Developer</p>
            </div>
            <div className='container__actions-navbar'>
                <ul className="navbar__list">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/projects"><li>Projects</li></Link>
                    <li>About</li>
                </ul>
                <div className='container__user-preferences'>
                    <button onClick={handleClickTheme}><FaLightbulb /></button>
                    <button onClick={handleClickLanguage} aria-label='Deutsch' lang='de' value='de'>DE</button>
                    <button onClick={handleClickLanguage} aria-label='English' lang='en' value='en' >EN</button>
                    <button onClick={handleClickLanguage} aria-label='Español' lang='es' value='es'>ES</button>
                </div>

            </div>
            <button className='container__hamburguer-menu-button' onClick={handleClickOpenMenu}>
                <GiHamburgerMenu />
            </button>
            <div className={`container__nav-menu ${hamburguerMenu && 'desplazar-menu'}`}>
                <button className="close-nav-menu" onClick={handleClickCloseMenu}><ImCross /></button>
                <ul className='list__navbar-menu'>
                    <div className='container__user-preferences'>
                        <button onClick={handleClickLanguage} aria-label='Deutsch' lang='de' value='de'>DE</button>
                        <button onClick={handleClickLanguage} aria-label='English' lang='en' value='en' >EN</button>
                        <button onClick={handleClickLanguage} aria-label='Español' lang='es' value='es'>ES</button>
                    </div>
                    <Link to="/" onClick={handleClickCloseMenu}><li>Home</li></Link>
                    <Link to="/projects" onClick={handleClickCloseMenu}><li>Projects</li></Link>
                    <li>About</li>
                </ul>

            </div>
        </nav>
    )
}

export default NavBar;