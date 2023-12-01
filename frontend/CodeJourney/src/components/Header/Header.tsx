import { useEffect } from 'react';
import { Hamburger } from "./HamburgerBtn/Hamburgerbtn";
import "./Header.css";

export const Header = () => {
  
  useEffect(() => {
    const d = document;
    function hamburgerMenu(panelBtn, panel, menuLink) {
      d.addEventListener("click", (e) => {
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
          d.querySelector(panel).classList.toggle("is-active");
          d.querySelector(panelBtn).classList.toggle("is-active");
        };

        if (e.target.matches(menuLink)) {
          d.querySelector(panel).classList.remove("is-active");
          d.querySelector(panelBtn).classList.remove("is-active");
        };
      })
    }

    hamburgerMenu(".panel-btn ", ".panel", ".header__menu-link");
  }, []);

  return (
    <>
      <header className="header">
        <a className="header__logo" href="#">
          <span className="header__logo--span">DevsJourney</span>
        </a>
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
