
import "../../styles/global.css";
import "../footer/Footer.css"
import { Logo } from "../Logo/Logo";


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
