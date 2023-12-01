
import "../../styles/global.css";
import "../footer/Footer.css"

export const Footer = () => {
  return (
   <footer className="container">
      <a className="header__logo" href="#">
          <span className="header__logo--span">DevsJourney</span>
        </a>
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
