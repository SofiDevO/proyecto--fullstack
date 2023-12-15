import "./SideNav.css";
import { Logo } from "../Logo/Logo";

export const SideNav = () => {
  return (
    <>
      <header className="header__side">
        <div className="container__inner">
          <div className="container__user">
            <Logo />
            <div className="header__user">
              <img
                className="user__img"
                src="/img/team/diego.jpg"
                alt="diego"
              />
              <span>Diego Riv</span>
            </div>
          </div>
          <nav className="caja__info">
            <h3 className="box__toggle frontend__box">Frontend</h3>
            <h3 className="box__toggle backend__box">Backend</h3>
          </nav>
        </div>
      </header>
    </>
  );
};
