
import "../../styles/global.css";
import { Logo } from "../Logo/Logo";
import "../footer/Footer.css"

export const Footer = () => {
  return (
   <footer className="container">
      <Logo/>
        <div className="link-container">
            <a href="#" className="link">home</a>
            <a href="#servicio" className="link">nuestro servicio</a>
            <a href="#" className="link">caracteristicas</a>
            <a href="#" className="link">faq</a>
            <a href="#" className="link">contacto</a>

        </div>
        <div className="text-container-footer">
          <h2>Profecionales formando profecionales</h2>
          <p>Hecho por programadores para los futuros prgramadores</p>
        </div>

   </footer>
  )
}
