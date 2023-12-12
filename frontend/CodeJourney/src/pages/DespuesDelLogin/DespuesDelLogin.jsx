import React from "react";
import "./DespuesDelLogin.css";
import { GrStatusGood } from "react-icons/gr";
import { GrSelect } from "react-icons/gr";
import { GoChecklist } from "react-icons/go";

export const DespuesDelLogin = () => {
  return (
    <div className="DespuesDelLogin">
      <h2 className="DespuesDelLogin-title">
        Hola, te damos la bienvenida <span>username</span>
      </h2>
      <div className="DespuesDelLogin-content">
        <div className="DespuesDelLogin-steps">
          <div className="step">
            {" "}
            <h3>
              <GrStatusGood
                style={{
                  color: "#0cffab",
                }}
              />{" "}
              Sesion creada
            </h3>
          </div>
          <div className="step-now">
            {" "}
            <h3>
              <GrSelect /> Tema de interes
            </h3>
          </div>{" "}
          <div className="step">
            {" "}
            <h3>
              <GoChecklist /> Empezar
            </h3>
          </div>
        </div>

        <div className="DespuesDelLogin-container">
          <div className="DespuesDelLogin-container-text">
            {" "}
            <p>
              Antes de empezar, marque el contenido que le gustaria que le
              muestren
            </p>
          </div>

          <h4>Contenido disponible:</h4>

          <div className="DespuesDelLogin-buttons">
            {" "}
            <div className="botton-content">
              <a href="#">
                <button className="content-botton">Frontend</button>
              </a>
            </div>
            <div className="botton-content">
              <a href="#">
                <button className="content-botton">Backend</button>
              </a>
            </div>{" "}
            <div className="botton-content">
              <a href="#">
                <button className="content-botton">Data base</button>
              </a>
            </div>{" "}
            <div className="botton-content">
              <a href="#">
                <button className="content-botton">DevOps</button>
              </a>
            </div>
          </div>
          <div className="botton-empezar">
            <a href="#">
              <button className="empezar-botton">empezar</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// export const DespuesDelLogin = () => {
//   return (
//     <section className="nuestro_servicio" id="servicio">
//       <div className="content_servicios">
//         <div className="sepadaror">
//           <h1 className="servicio__titulo">nuestro servicio</h1>

//           <p className="text__content">
//             ¡Bienvenido a CodeJourney! Descubre una educación adaptada a ti con
//             cursos en diversas áreas de IT para todos los niveles.{" "}
//           </p>
//           <p className="text__content">
//             Nuestro exclusivo sistema de preferencias te guía hacia el curso
//             perfecto según tus objetivos. Únete a una activa comunidad de
//             aprendices para compartir experiencias y construir tu red de
//             conocimiento. ¡Inicia tu viaje educativo con nosotros!
//           </p>
//         </div>
//         <img src={servicioImg} />
//       </div>
//     </section>
//   );
// };
