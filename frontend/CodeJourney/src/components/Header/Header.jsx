import { useEffect } from "react";
import { Boton } from "../Boton/Boton";
import Cookies from "js-cookie";
import "./Header.css";
import { Logo } from "../Logo/Logo";

export const Header = (props) => {
  const token = Cookies.get("token");

  const handleRegisterClick = () => {};

  useEffect(() => {
    const handleClick = (e) => {
      const panel = document.querySelector(".panel");
      const panelBtn = document.querySelector(".panel-btn");

      if (e.target.matches(".panel-btn") || e.target.matches(".panel-btn *")) {
        panel.classList.toggle("is-active");
        panelBtn.classList.toggle("is-active");
      }

      if (e.target.matches(".header__menu-link")) {
        panel.classList.remove("is-active");
        panelBtn.classList.remove("is-active");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <header className="header">
        <Logo />
        <nav className="menu panel">
          <ul className="header__list">
            {props.navlink}
            <div className="btn__container">
              {token && (
                <Boton
                  className="header__btn--register"
                  text="Dashboard"
                  link="/dashboard"
                />
              )}
              {!token && (
                <>
                  <Boton
                    text="Login"
                    className="header__btn--register"
                    link="/login"
                  />
                  <Boton
                    text="Registrarse"
                    className="header__btn--login"
                    link="/registro"
                    onClick={handleRegisterClick}
                  />
                </>
              )}
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
