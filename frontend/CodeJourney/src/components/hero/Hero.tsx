import hero_background from "../../../public/video/2.mp4"
import "../hero/hero.css";
import Typed from "react-typed";

export function Hero() {
  return (
    <section className="hero">
      <video src={hero_background} autoPlay muted loop />

        <div className="content active">
        <h1>
          Aprendamos a programar de manera{" "}
          <span>
            {" "}
            <Typed
              strings={["FACIL", "GUIADA", "EFECTIVA"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </span>
        </h1>

        <p>Unete al mundo de la programacion.</p>

        <div className="Hero-botton">
          <a href="#">
            <button className="download-cv">INICIAR A APRENDER</button>
          </a>
        </div>
      </div>
    </section>
  );
}
