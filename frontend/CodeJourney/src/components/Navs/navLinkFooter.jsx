import { NavLink as Link } from "react-router-dom"

export const NavLinkfooter = ()=>{
    return (
        <>
             <li className="footer__item">
        <a className="link" href="/#servicio">
          Nuestro servicio
        </a>
      </li>
      <li className="footer__item">
        <a className="link">Caracterisiticas</a>
      </li>
      <li className="footer__item">
        <a className="link" href="/#contacto">
          Contactos
        </a>
      </li>
      <li className="footer__item">
        <Link className="link" to="/equipo">
          Nuestro equipo
        </Link>
      </li>
        </>
    )
}



/* 
<a href="#" className="link">home</a>
            <a href="#servicio" className="link">nuestro servicio</a>
            <a href="#" className="link">caracteristicas</a>
            <a href="#" className="link">faq</a>
            <a href="#" >contacto</a>

*/