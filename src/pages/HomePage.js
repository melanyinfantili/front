import React from "react";
const HomePage = (props) => {
    return (
        <main className="holder">
        <div className="homeimg">
            <img src="img/fitness-femenino-.jpg" width="1000"   alt="1"/>
        </div>
        <div className="columnas">
            <div className="mundofitness">
                <h2>Mundo Fitness</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ex aliquid alias voluptatem expedita nostrum facere dolorem ducimus? 
                    Quod doloremque, assumenda eligendi sint neque quo eum eius blanditiis animi impedit.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, autem quidem velit iure explicabo possimus inventore ad asperiores, cumque distinctio odit! Illum voluptatibus veritatis repellendus, distinctio aliquam sint est earum.</p>
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