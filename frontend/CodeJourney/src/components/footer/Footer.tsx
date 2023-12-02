
import "../../styles/global.css";
import { Logo } from "../Logo/Logo";
import "../footer/Footer.css"

export const Footer = () => {
  return (
   <footer className="container">
      <Logo/>
        <div className="link-container">
            <a href="#" className="link">home</a>
            <a href="#" className="link">nuestro servicio</a>
            <a href="#" className="link">caracteristicas</a>
            <a href="#" className="link">faq</a>
            <a href="#" className="link">contacto</a>

        </div>

   </footer>
  )
}
