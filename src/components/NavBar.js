import './NavBar.scss';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from 'react';


const NavBar = () => {
    const [hamburguerMenu, setHamburguerMenu] = useState(false)

    const handleClickOpenMenu = () => {
        setHamburguerMenu(true)
    }

    const handleClickCloseMenu = () => {
        setHamburguerMenu(false)
    }
// className={"card-container " + `${!isAvailable && "no-available"} ${cardHover && isAvailable && "scale-card"}`}>
    return (
        <nav className="navbar">
            <div>
                <p>Celina Inés Alsina</p>
                <p>Front-end Developer</p>
            </div>
            <ul className="navbar__list">
                <Link to="/home"><li>Home</li></Link>
                <Link to="/projects"><li>Projects</li></Link>
                <li>About</li>
            </ul>
            <button className='container__hamburguer-menu-button' onClick={handleClickOpenMenu}>
                <GiHamburgerMenu />
            </button>
            <div className={'container__nav-menu ' + `${hamburguerMenu && 'desplazar-menu'}`}>
                <button className="close-nav-menu" onClick={handleClickCloseMenu}><ImCross /></button>
                <ul>
                    <Link to="/home" onClick={handleClickCloseMenu}><li>Home</li></Link>
                    <Link to="/projects" onClick={handleClickCloseMenu}><li>Projects</li></Link>
                    <li>About</li>
                </ul>

            </div>
        </nav>
    )
}

export default NavBar;