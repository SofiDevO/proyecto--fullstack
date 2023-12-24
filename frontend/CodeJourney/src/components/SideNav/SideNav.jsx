import React, { useEffect } from "react";
import "./SideNav.css";
import { Logo } from "../Logo/Logo";
import UserHeader from "../UserHeader/UserHeader";
import { AccordionTechs } from "../AcordionTechs/AcordionTechs";

export const SideNav = ({ handleFilteredTechs }) => {
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

  useEffect(() => {
    const panelBtn = document.querySelector(".panel-boton");
    panelBtn.addEventListener("click", toggleContainer);

    return () => {
      panelBtn.removeEventListener("click", toggleContainer);
    };
  }, []); // Agregar [] como dependencia para que se ejecute solo una vez al montar el componente

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
        <div className="container__inner">
          <AccordionTechs
            onTechsFiltered={handleFilteredTechs}
            closeContainer={closeContainer} // Pasa la función a AccordionTechs
          />
        </div>
      </header>
    </>
  );
};
