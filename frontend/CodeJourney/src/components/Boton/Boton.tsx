export const Boton = ({ text, className, href }) => {
    return (
      <a href={href} className={`header__btn ${className} header__menu-link`}>
        {text}
      </a>
    );
  };
  