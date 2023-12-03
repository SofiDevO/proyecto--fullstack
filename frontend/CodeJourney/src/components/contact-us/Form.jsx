import "../../styles/global.css";
import "./Form.css";
import { useState } from "react";

export const Form = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion del Formulario

    if ([nombre, correo, asunto, mensaje].includes("")) {
      console.log("Hay algun campo vacio");
      setError(true);
      return;
    }
    setError(false);

    //clean forms
    setNombre('');
    setCorreo('');
    setAsunto('');
    setMensaje('');
  };

  return (
    <form onSubmit={handleSubmit} action="" className="form-container" id="contacto">
      <div className="contact-title">
        <h2>CONTACTA CON NOSOTROS</h2>
        <p className="contact-subtitle">
          Manten en contacto con nosotros y enviamos un correo
        </p>
      </div>
      <div className="info-container">
        {error && (
          <div className="error-camp">
            <p>Todos los campos son obligatorios</p>
          </div>
        )}
        <div>
          <label htmlFor="nombre"></label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            id="email"
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="asunto"></label>
          <input
            id="asunto"
            type="text"
            placeholder="Asunto"
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="mensaje"></label>
          <textarea
            name=""
            id="mensaje"
            cols="30"
            rows="10"
            placeholder="Escriba su mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
        </div>
        <div className="contact-button">
          <button>SEND MESSAGE</button>
        </div>
      </div>
    </form>
  );
};
