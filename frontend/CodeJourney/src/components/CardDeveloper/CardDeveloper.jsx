import { FaGithubAlt } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import "./CardDeveloper.css"

export const Developer = (props)=>{
    const{img, nombre, decripcion, github,linkedin} = props.datos
    return <div className="colaborador">
        <div className="encabezado" style={{borderColor:colorPrimario}}>
            <img src={img} alt={nombre}/>
        </div>
        <div className="card">
            <h4 className="card__title">{nombre}</h4>
            <h5 className="card__description">{decripcion}</h5>
            <div className="card__social">
                <a card__icon card__icon--github href={github}>
                <FaGithubAlt />
                </a>
                <a className="card__icon card__icon--linkedin" href={linkedin}>
                <FaLinkedin />
                </a>
            </div>
        </div>
    </div>
}

export default Developer