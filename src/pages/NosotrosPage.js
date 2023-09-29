import React from "react";
const NosotrosPage = (props) => {
    return (
        <main className="holder">
        <div>
        <h2>Nuestra Funcion</h2>
        <p>Nos dedicamos a entrenar a personas que quieren mejorar su salud fisica</p>
        <p>Nos basamos en sus objetivos y le brindamos el mejor servicio</p>
        </div>

        <div className="imagenfitness">
            <img src="img/AdobeStock_90212267-RMyGoGaFY2Tan8BncOj0brL-366x256@abc.jpg" width="500px" alt="imagen"/>
        </div>

        <div>
            <h2>Nuestros Objetivos</h2>
            <p>Contamos con gente capacitada para dar clases personales o rutinas que se adapten a cada persona</p>
            <p>En el entrenamiento puede realizarse desde un gimnasio o desde su hogar, buscamos un entrenamiento que la persona disfrute</p>
            <p>Tambien brindamos consejos nutricionales, recordar que una buena alimentacion es muy importante</p>
        </div>

        <div className="imagenes">
            <img src="img/depositphotos_51076827-stock-photo-fitness-with-dumbbells.jpg" width="300px" alt="4"/>
            <img src="img/da3bf82bd7aa54810d5908b7e36b87414886e1d0-1874x1249.jpg" width="300px" alt="comida"/>
            <img src="img/SF_ENE19_Blog_DIA_15.webp" width="250px" alt="9"/>
        </div>




    </main>
    );
}

export default NosotrosPage;