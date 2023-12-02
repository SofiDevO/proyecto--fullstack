import { NavLink as Link } from "react-router-dom"
export const Logo = ()=>{
    return(
        <Link to="/" className="header__logo" >
        <span className="header__logo--span">CodeJourney</span>
      </Link>
    )
}