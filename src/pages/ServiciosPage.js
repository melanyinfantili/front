import React from "react";
const ServiciosPage = (props) => {
    return (
        <main className="holder">
        <div className="service">
            <div className="clasespersonalizadas">
                <img src="img/grupo.jpg" width="400px" alt="clase"/>
                <h2>Clases Personalizadas</h2>
                <p>Te brindamos clases con el armado de la rutina basado en tu objetivo mas la presencia del personal
                    para ayudarte en cada ejercicio, ver tus avances, darte consejos y motivarte a realizar la actividad
                </p>
                <p>Consulta por los horarios y dias disponibles</p>
            </div>

            <div className="rutinas">
                <img src="img/1366_2000.jpeg" width="400px" alt="rutina"/>
                <h2>Rutinas</h2>
                <p>Te brindamos rutinas basadas en tu objetivo, para poder realizar tanto en el gimnasio como en tu
                    casa, con videos de como realizar cada ejercicio</p>
                <p>Tenemos rutinas especificas en caso de querer una rutina para un grupo muscular, como tambien de todo
                    el cuerpo</p>
            </div>

            <div className="alimentacion">
                <img src="img/CARACTERISTICAS-DE-UNA-ALIMENTACION-SALUDABLE-1200x800.jpeg" width="400px" alt="imagencomida"/>
                <h2>Alimentacion</h2>
                <p>Brindamos planes nutricionales que se adaptan segun tu objetivo y tu rutina</p>
                <p>Recorda que la alimentacion cumple un papel muy importante</p>
            </div>
        </div>



    </main>

    );
}

export default ServiciosPage;