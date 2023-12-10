import { FaGithubAlt } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import "./CardDeveloper.css";

export const CardDeveloper = (props) => {
  const { img, nombre, decripcion, github, linkedin } = props.datos;
  const { colorPrimario } = props;
  return (
    <div
      className="card"
      style={{
        border: `2px solid ${colorPrimario}`,
        borderRadius: "15px",
      }}
    >
      <div className="card__content">
        <img className="card__image" src={img} alt={nombre} />
        <h4 className="card__title">{nombre}</h4>
        <h5 className="card__description">{decripcion}</h5>
        <div className="card__social">
          <a
            className="link__icon"
            href={github}
            target="_blank"
            rel="nofollow"
          >
            <FaGithubAlt className="card__icon card__icon--github" />
          </a>
          <a className="link__icon" href={linkedin} target="_blank">
            <FaLinkedin className="card__icon card__icon--linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};
