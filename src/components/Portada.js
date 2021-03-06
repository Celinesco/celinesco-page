import "./Portada.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../Context/Context";
import { htmlTitles } from "./datos_proyectos";

const Portada = () => {
    const context = useContext(Context);

    return (
        <section className="section__portada sections">
            <div className="container__portada">
                <div className="cuadrado box"></div>
                <div className="cuadradito box"></div>
                <div className="cuadradito2 box"></div>
                <p>{htmlTitles[context.language].presentation_text}</p>
                <h1>
                    <span>C</span>elina <span>I</span>nés <span>A</span>lsina
                </h1>
                <p>
                    <span className="tag__text">&lt;p&gt;</span>
                    {htmlTitles[context.language].intro}
                    <span className="tag__text">&lt;/p&gt;</span>
                </p>
                <div className="container__link">
                    <Link to="/contact" className="link__contact">
                        {htmlTitles[context.language].button__contact}
                    </Link>
                </div>
                <div className="container__indication">
                    follow the footprints...
                </div>
            </div>
        </section>
    );
};

export default Portada;
