import "./Form.css";
export const Form = () => {
  return (
    <form action="" className="form-container">
      <div className="contact-title">
        <h2>CONTACTA CON NOSOTROS</h2>
        <p className="contact-subtitle">
          Manten en contacto con nosotros y enviamos un correo
        </p>
      </div>
      <div className="info-container">
        <div>
          <label htmlFor=""></label>
          <input type="text" placeholder="Nombre" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="email" placeholder="Correo" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" placeholder="Asunto" />
        </div>
        <div>
          <textarea name="" id="" cols="30" rows="10">
            White your message
          </textarea>
        </div>
        <div className="contact-button">
          <button>SEND MESSAGE</button>
        </div>
      </div>
    </form>
  );
};
