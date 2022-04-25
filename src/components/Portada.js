import './Portada.scss'
import { Link } from 'react-router-dom';
import Huellitas from './Huellitas';


const Portada = () => {
    return (
        <div className="container__portada">
            <div className='cuadrado box'>

            </div>
            <div className='cuadradito box'>

            </div>
            <div className='cuadradito2 box'>

            </div>
            <p>Hello,</p>
            <h1>I'm <span>C</span>elina <span>I</span>nés <span>A</span>lsina</h1>
            <p>&lt;p&gt;Front-end developer&lt;/p&gt;</p>
            <div className='container__link'>
                <Link to='/contact' className='link__contact'>Contact me!</Link>
            </div>
            <Huellitas />
        </div >
    )
}


export default Portada;