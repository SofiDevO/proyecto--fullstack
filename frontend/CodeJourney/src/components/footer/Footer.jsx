
import "../../styles/global.css";
import { Logo } from "../Logo/Logo";
import { NavLinkfooter } from "../Navs/navLinkFooter";
import "../footer/Footer.css"

export const Footer = () => {
  return (
   <footer className="container">
      <Logo/>
        <nav className="link-container">
          <ul>
            <NavLinkfooter/>
          </ul>
            
        </nav>
        <div className="text-container-footer">
          <h2>Profecionales formando profecionales</h2>
          <p>Hecho por programadores para los futuros prgramadores</p>
        </div>

   </footer>
  )
}
