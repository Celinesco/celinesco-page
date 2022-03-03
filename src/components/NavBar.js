import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <Link to="/"><li>Home</li></Link>
                <li>Projects</li>
                <li>About</li>
            </ul>
        </nav>
    )
}

export default NavBar;