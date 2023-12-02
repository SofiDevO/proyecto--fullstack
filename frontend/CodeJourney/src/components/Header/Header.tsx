import { Logo } from "../Logo/Logo";
import "./Header.css";
export const Header = () => {
  return (
    <>
      <header className="header">
       <Logo/>
        <nav className="menu  panel ">
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
            <div className="btn__container">
              <a href="#" className="header__btn header__btn--register">
                Iniciar Sesión
              </a>
              <a href="#" className="header__btn header__btn--login">
                Registrarse
              </a>
            </div>
          </ul>
        </nav>
        <button className="hamburger hamburger--arrow panel-btn" type="button">
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
      </header>
    </>
  );
};
