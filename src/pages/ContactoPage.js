import '../styles/contacto.css'
import React from "react";
const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
        <div>
            <h2>Contacto</h2>
            <form action="" method="" class="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="celular">Celular</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p className="acciones"> 
                    <input type="submit" value="Enviar"/>
                </p>
            </form>
        </div>
        <div className="datos">
            <h2>Mas vias de comunicacion</h2>
            <p>Contactanos por culaquiera de los siguientes medios</p>
            <ul>
                <li>Celular: 1189034500</li>
                <li>Email: contactos@igtraining.com.ar</li>
                <li>Instagram</li>
            </ul>

        </div>



    </main>
    );
}

export default ContactoPage;