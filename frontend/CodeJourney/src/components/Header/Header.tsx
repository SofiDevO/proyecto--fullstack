import { Hamburger } from "./HamburgerBtn/Hamburgerbtn";
import "./Header.css";
export const Header = () => {
  return (
    <>
    <header className="header">
      <a className="header__logo" href="#">
        <span className="header__logo--span">DevsJourney</span>
      </a>
      <nav className="menu  panel">
        <ul className="header__list">
          <li className="header__item">
            <a href="#">Nuestro servicio</a>
          </li>
          <li className="header__item">
            <a href="">Caracterisiticas</a>
          </li>
          <li className="header__item">
            <a href="">Contactos</a>
          </li>
          <li className="header__item">
            <a href="">Nuestro equipo</a>
          </li>
          <a href="#" className="header__btn header__btn--register">
          Iniciar Sesión
          </a>
          <a href="#" className="header__btn header__btn--login">
            
            Registrarse
          </a>
        </ul>
      </nav>
      <Hamburger />
    </header>
    </>
  );
};
