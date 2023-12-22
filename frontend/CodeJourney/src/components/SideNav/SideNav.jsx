import { useEffect } from "react";
import "./SideNav.css";
import { Logo } from "../Logo/Logo";

import UserHeader from "../UserHeader/UserHeader";
import { AccordionTechs } from "../AcordionTechs/AcordionTechs";

export const SideNav = () => {
  useEffect(() => {
    const handleContainerClick = (e) => {
      if (
        e.target.matches(".panel-boton") ||
        e.target.matches(".panel-boton *")
      ) {
        toggleContainer();
      }

      if (
        e.target.matches(".tech__item ") ||
        e.target.matches(".tech__item--link")
      ) {
        closeContainer();
      }
    };

    document.addEventListener("click", handleContainerClick);

    return () => {
      document.removeEventListener("click", handleContainerClick);
    };
  }, []);

  const toggleContainer = () => {
    const containerInner = document.querySelector(".container__inner");
    const panelBtn = document.querySelector(".panel-boton");

    containerInner.classList.toggle("is-active");
    panelBtn.classList.toggle("is-active");
  };

  const closeContainer = () => {
    const containerInner = document.querySelector(".container__inner");
    const panelBtn = document.querySelector(".panel-boton");

    containerInner.classList.remove("is-active");
    panelBtn.classList.remove("is-active");
  };

  return (
    <>
      <header className="header__side">
        <button
          className="hamburger hamburger--arrow panel-boton"
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <Logo />
        <UserHeader />
        <div className="container__inner ">
          <AccordionTechs />
        </div>
      </header>
    </>
  );
};
