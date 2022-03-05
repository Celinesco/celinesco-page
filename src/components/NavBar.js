import './NavBar.scss';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";


const NavBar = () => {
    return (
        <nav className="navbar">
            <div>
                <p>Celina Inés Alsina</p>
                <p>Front-end Developer</p>
            </div>
            <ul className="navbar__list">
                <Link to="/"><li>Home</li></Link>
                <li>Projects</li>
                <li>About</li>
            </ul>
            <div className='container__hamurguer-menu'>
                <GiHamburgerMenu />
            </div>


        </nav>
    )
}

export default NavBar;