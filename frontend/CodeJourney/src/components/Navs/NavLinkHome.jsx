import { NavLink as Link } from "react-router-dom";
export const NavLinkHome = () => {
  return (
    <>
      <li className="header__item">
        <a className="header__menu-link" href="/#servicio">
          Nuestro servicio
        </a>
      </li>
      <li className="header__item">
        <a href="/#caracteristicas">Caracterisiticas</a>
      </li>
      <li className="header__item">
        <a className="header__menu-link" href="/#contacto">
          Contacto
        </a>
      </li>
      <li className="header__item">
        <Link className="header__menu-link" to="/equipo">
          Nuestro equipo
        </Link>
      </li>
    </>
  );
};
