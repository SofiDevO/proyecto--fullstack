import { NavLink as Link } from "react-router-dom";
export const NavLinkEquipo = () => {
  return (
    <>
      <li className="header__item">
        <Link to="/" className="header__menu-link" >
          Inicio
        </Link>
      </li>
      <li className="header__item">
        <Link className="header__menu-link" to="#backend">
            Backend
        </Link>
      </li>
      <li className="header__item">
        <Link className="header__menu-link" to="#forntend">
          Frontend
        </Link>
      </li>
    </>
  );
};
