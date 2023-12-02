import { NavLink as Link } from "react-router-dom";


export const Boton = ({ text, className, link }) => {
    return (
      <Link to={link} className={`header__btn ${className} header__menu-link`}>
        {text}
      </Link>
    );
  };
  