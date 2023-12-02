import React from "react";
import servicioImg from "../../../public/img/main/servicio.png";

import "./NuestroServicio.css";

export const NuestroServicio = () => {
  return (
    <section className="nuestro_servicio" id="servicio">

      <div className="content_servicios">

<div className="sepadaror">
 <h1 className="servicio__titulo">nuestro servicio</h1>

<p  className="text__content" >¡Bienvenido a <span>CodeJourney!</span> Aquí, la educación se adapta a ti. Imagina un espacio donde puedes explorar un mundo de conocimiento a tu propio ritmo, sin restricciones.
Con una amplia variedad de cursos en diversas áreas del mundo IT, desde principiantes hasta niveles avanzados, encontrarás exactamente lo que necesitas para impulsar tu aprendizaje.
¿Te preguntas por dónde empezar? Deja que nuestro exclusivo sistema de preferencias te guíe hacia el curso perfecto, adaptado a tus objetivos personales.
Unete a una comunidad activa de aprendices como tú. Comparte experiencias, haz conexiones valiosas y crea tu red de conocimiento.</p>
       
</div>
<img src={servicioImg} />
</div>
    </section>
  );
};
