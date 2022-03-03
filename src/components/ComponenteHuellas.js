import huellitas from '../assets/huellitas.png';
import './ComponenteHuellas.scss';
import { useState } from 'react';





const ComponenteHuellas = () => {
    return (
        <div className='img__container' style={{top: '150px'}}>
            <img src={huellitas} ></img>

        </div>
    )
}

export default ComponenteHuellas;