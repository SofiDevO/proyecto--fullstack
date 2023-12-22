import { useEffect } from "react";
import "./SideNav.css";
import { Logo } from "../Logo/Logo";

import UserHeader from "../UserHeader/UserHeader";

export const SideNav = () => {
  useEffect(() => {
    const handleContainerClick = (e) => {
      if (e.target.matches(".panel-btn") || e.target.matches(".panel-btn *")) {
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
    const panelBtn = document.querySelector(".panel-btn");

    containerInner.classList.toggle("is-active");
    panelBtn.classList.toggle("is-active");
  };

  const closeContainer = () => {
    const containerInner = document.querySelector(".container__inner");
    const panelBtn = document.querySelector(".panel-btn");

    containerInner.classList.remove("is-active");
    panelBtn.classList.remove("is-active");
  };

  return (
    <>
      <header className="header__side">
        <button className="hamburger hamburger--arrow panel-btn" type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <Logo />
        <UserHeader />
        <div className="container__inner ">
          <label className="box__toggle ">
            <input class="checkbox" type="checkbox" name="frontend" />
            <div className="line__container">
              <span>Frontend</span>
              <div className="container__cruz">
                <span className="line "></span>
                <span className="line "></span>
              </div>
            </div>
            <ul class="techs">
              <li className="tech__item">
                <a className="tech__item--link" href="#">
                  HTML
                </a>
              </li>
              <li className="tech__item">
                <a href="#">CSS</a>
              </li>
              <li className="tech__item">
                <a className="tech__item--link" href="#">
                  Javascript
                </a>
              </li>
              <li className="tech__item">
                <a className="tech__item--link" href="#">
                  React
                </a>
              </li>
            </ul>
          </label>
        </div>
      </header>
    </>
  );
};
