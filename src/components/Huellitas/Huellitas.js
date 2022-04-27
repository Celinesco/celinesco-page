import './Huellitas.scss';
import { MdPets } from "react-icons/md";

const Huellitas = () => {
    return (
        <div className="container__steps">
            <div className="container__step step-1">
                <MdPets />
            </div>
            <div className="container__step step-2">
                <MdPets />
            </div>
            <div className="container__step step-3">
                <MdPets />
            </div>
            <div className="container__step step-4">
                <MdPets />
            </div>
        </div>
    );
};


export default Huellitas;