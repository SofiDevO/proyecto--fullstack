import React from "react";
import { Header } from "../../components/Header/Header";
import { NavLinkEquipo } from "../../components/Navs/NavLinkEquipo";
import { Footer } from "../../components/footer/Footer";
import "./TeamMembers.css";
import { TeamCarrusel } from "../../components/TeamCarrusel/TeamCarrusel";

export const TeamMembers = () => {
  return (
    <>
      <Header navlink={<NavLinkEquipo />} />
      <main>
        <section className="team">
          <div></div>
          <div className="team__card">
            <h3 className="team__title">
              <span className="title__gradient">CodeJourney</span> - Nuestro
              Equipo de Desarrolladores
            </h3>
            <p className="text__content">
              Los creadores de CodeJourney se complacen en brindar apoyo a todos
              los entusiastas de la programación como ellos. Te invitan a
              conocer más sobre ellos y a seguirlos en sus redes sociales.
            </p>
          </div>
        </section>
        <section className="cards">
          <div className="card__container">
            <TeamCarrusel />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
