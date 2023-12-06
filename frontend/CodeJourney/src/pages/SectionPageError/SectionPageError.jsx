import React from "react";
import "./SectionPageError.css";
import { NavLink as Link } from "react-router-dom";

export const SectionPageError = () => {
  return (
    <section className="section-404">
      <h1 className="numbers">404</h1>
      <h1 className="error-uno">ERROR</h1>
      <p>La pagina no a podido ser encontrada.</p>
      <br />

      <div className="botton-error-page">
        <Link to="/">
          <button className="botton">volver al menu</button>
        </Link>
      </div>
    </section>
  );
};
