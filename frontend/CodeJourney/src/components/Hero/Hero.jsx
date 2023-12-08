
import hero_background from "../../../public/video/background.mp4";
import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";

export const Hero = () => {
  return (
    <section className="hero">
      <video src={hero_background} autoPlay muted loop />

      <div className="content">
        <h1>
          Aprendamos a programar de manera{" "}
          <span id="textoTypeIt">
            <Typewriter
              words={["facil", "guiada", "efectiva"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={70}
              delaySpeed={2000}
            />
          </span>
        </h1>

        <p>Unete al mundo de la programacion.</p>

        <div className="Hero-botton">
          <a href="#">
            <button className="botton">INICIAR A APRENDER</button>
          </a>
        </div>
      </div>ww
    </section>
  );
};
