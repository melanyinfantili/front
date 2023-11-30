import '../styles/home.css'
import React from "react";
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
const HomePage = (props) => {
    return (
        <main className="holder">

            <MDBCarousel showIndicators showControls interval={3000} fade>
                <MDBCarouselItem itemId={1}>
                    <img src='img/Captura de pantalla 2023-11-29 a la(s) 21.18.48.png' interval={1000} className='d-block w-100' alt='Imagen1' />
                    <MDBCarouselCaption>
                    </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem itemId={2}>
                    <img src='img/Captura de pantalla 2023-11-29 a la(s) 21.16.41.png' className='d-block w-100' alt='Imagen2' />
                    <MDBCarouselCaption>
                    </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem itemId={3}>
                    <img src='img/Captura de pantalla 2023-11-29 a la(s) 21.14.52.png' className='d-block w-100' alt='Imagen3' />
                    <MDBCarouselCaption>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarousel>
        <div className="columnas">
            <div className="mundofitness">
                <h2>Mundo Fitness</h2>
                <p>Bienvenido al Mundo Fitness donde entrenar es un bienestar para uno mismo y sentirse pleno </p>
                <p>Aca hacemos que el momento de entrenamiento sea el mejor momento del dia.</p>
            </div>


            <div className="reseñas">
                <h2>Reseñas</h2>
                <div className="reseña">
                    <span className="cita"> Super recomiendo</span>
                    <span className="autor">Juan Menida </span>
                </div>
            </div>

        </div>

    </main>
    )
}

export default HomePage;