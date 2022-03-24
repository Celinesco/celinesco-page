import './About.scss';
import profilePicture from '../../assets/profile_picture.jpg'

const About = () => {
    return (
        <section className='section__about'>
            <h2>About me</h2>
            <div className='container__info-aboutme'>
                <div className='container__img-profile'>
                    <img src={profilePicture} alt='my profile'></img>
                </div>
                <div className='container__aboutme-text'>
                    <p>Mi nombre es Celina Inés Alsina. Soy oriunda de Rosario, Santa Fe, Argentina y desde el 2021 vivo en Múnich, Alemania.
                        En Rosario solía dar clases de violín, y desde la pandemia decidí incursionar en el mundo de la programación.
                        Comencé resolviendo problemas de programación competitiva usando Python y luego me recomendaron ADA ITW donde realicé la carrera de desarrolladora Front-end.
                        Tuve la fortuna de tener como profesora a la maravillosa Maria Elena Rey, que me acompañó en todo este camino de aprendizaje, y que por suerte me queda muchísimo más por recorrer.
                        Después de haber estudiado física en la universidad y haber dado clases de violín, encontré en el desarrollo front end, un equilibrio estimulante entre arte y lógica.
                        Si querés contactarme, podes escribirme un mail o completar el formulario que se encuentra abajo
                        Sugerencias, comentarios, preguntas siempre bienvenidas y me ayudan a crecer!
                    </p>
                </div>
            </div>


        </section>

    )
}

export default About;