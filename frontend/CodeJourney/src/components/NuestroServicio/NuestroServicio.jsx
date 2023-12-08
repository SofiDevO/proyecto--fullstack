import React from "react";
import servicioImg from "../../../public/img/main/servicio.png";

import "./NuestroServicio.css";

export const NuestroServicio = () => {
  return (
    <section className="nuestro_servicio" id="servicio">

      <div className="content_servicios">

<div className="sepadaror">
 <h1 className="servicio__titulo">nuestro servicio</h1>

<p  className="text__content" >¡Bienvenido a CodeJourney! Descubre una educación adaptada a ti con cursos en diversas áreas de IT para todos los niveles. </p>
<p  className="text__content" >Nuestro exclusivo sistema de preferencias te guía hacia el curso perfecto según tus objetivos. Únete a una activa comunidad de aprendices para compartir experiencias y construir tu red de conocimiento. ¡Inicia tu viaje educativo con nosotros!</p>
</div>
<img src={servicioImg} />
</div>
    </section>
  );
};
