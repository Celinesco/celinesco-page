import './ModalForm.scss';
import Context from '../../Context/Context';
import { useContext } from 'react';
import { htmlAboutme } from '../datos_proyectos';

const ModalForm = ({setDisplayModal}) => {

    const context = useContext(Context)

    const handleClick = () => {
        setDisplayModal(false)
    }

    return (
        <div className='container__modal-background'>
            <div className='container__modal'>
                <button onClick={handleClick}>X</button>
                <h2 className='title__modal'>{htmlAboutme[context.language].form.modal_title}</h2>
                <p>{htmlAboutme[context.language].form.modal_message}</p>
            </div>
        </div>
    )
}

export default ModalForm;