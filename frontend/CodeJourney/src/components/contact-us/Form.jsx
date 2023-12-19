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
    } else setError(false);
    return (
      (
        <form
          method="POST"
          action="https://formsubmit.co/diegodevsoftware@gmail.com"
          target="_blank"
        />
      ),
      //clean forms
      setNombre(""),
      setCorreo(""),
      setAsunto(""),
      setMensaje("")
    );
  };

  return (
    <form
      method="POST"
      action="https://formsubmit.co/diegodevsoftware@gmail.com"
      target="_blank"
      className="form-container"
      id="contacto"
    >
      <div className="contact-title">
        <h2>CONTÁCTA CON NOSOTROS</h2>
        <p className="contact-subtitle">Queremos saber de tí</p>
      </div>
      <div className="info-container">
        {error && (
          <div className="error-camp">
            <p>Todos los campos son obligatorios</p>
          </div>
        )}
        <div className="form__input--container">
          <label htmlFor="nombre"></label>
          <input
            id="nombre"
            name="name"
            type="text"
            placeholder="Nombre"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form__input--container">
          <label htmlFor="email"></label>
          <input
            name="email"
            id="email"
            type="email"
            required
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className="form__input--container">
          <label htmlFor="asunto"></label>
          <input
            name="subject"
            id="asunto"
            type="text"
            required
            placeholder="Asunto"
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
          />
        </div>
        <div className="form__input--container">
          <label htmlFor="mensaje"></label>
          <textarea
            id="message"
            name="comments"
            cols="30"
            rows="10"
            placeholder="Escriba su mensaje"
            required
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
