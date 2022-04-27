import './Portada.scss'
import { Link } from 'react-router-dom';
import Huellitas from './Huellitas';
import { useContext } from 'react';
import Context from "../Context/Context";
import { htmlTitles } from './datos_proyectos';


const Portada = () => {

    const context = useContext(Context);



    return (
        <div className="container__portada">
            <div className='cuadrado box'>

            </div>
            <div className='cuadradito box'>

            </div>
            <div className='cuadradito2 box'>

            </div>
            <p>{htmlTitles[context.language].presentation_text}</p>
            <h1><span>C</span>elina <span>I</span>nés <span>A</span>lsina</h1>
            <p><span className='tag__text'>&lt;p&gt;</span>Front-end developer<span className='tag__text'>&lt;/p&gt;</span></p>
            <div className='container__link'>
                <Link to='/contact' className='link__contact'>{htmlTitles[context.language].button__contact}</Link>
            </div>
            <Huellitas />
        </div >
    )
}


export default Portada;