import hero_background from "../../public/video/2.mp4"
import Typed from "react-typed";
import "../styles/styles.scss"
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
              strings={["FÁCIL", "GUIADA", "EFECTIVA"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </span>
        </h1>

        <p>Únete al mundo de la programación.</p>

        <div className="Hero-botton">
          <a href="#">
            <button className="btn-content">INICIAR A APRENDER</button>
          </a>
        </div>
      </div>
    </section>
  );
}
