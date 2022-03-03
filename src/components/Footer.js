import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <p>Hecho por Celinesco</p>
            <ul>
                <a href="https://github.com/Celinesco" target="_blank" rel="noopener noreferrer" aria-label="Ir a cuenta Github Celinesco"><li><BsGithub /></li></a>
                <a href="https://www.linkedin.com/in/celinesalsina/" target="_blank" rel="noopener noreferrer" aria-label="Perfil Linkedin de Celina"><li><BsLinkedin /></li></a>
                <a href="mailto:celina.alsina@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Enviar mail"><li><BsEnvelope /></li></a>
            </ul>
        </footer>
    )
}

export default Footer;