import "./DashboardCardClicked.css";
import dashboardcardimg from "../../../public/img/main/caracterist2.webp";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink as Link } from "react-router-dom";

export const DashboardCardClicked = () => {
  return (
    <div className="card-opasity">
      <div className="dashboard-card-clicked-border">
        <div className="dashboard-card-clicked">
          <div className="dashboard-card-clicked-img">
            <Link className="header__menu-link" to="/dashboard">
              <IoMdArrowRoundBack
                style={{
                  color: "#fff",
                  fontSize: "50px",
                  paddingBottom: "20px",
                }}
              />
            </Link>
            <div className="center-img">
              {" "}
              <img src={dashboardcardimg} alt="" />
            </div>
          </div>
          <div className="dashboard-card-clicked-container">
            <h2 className="dashboard-card-clicked-title">php</h2>
            <p className="text__content">
              PHP es un lenguaje de programación <span>backend</span>{" "}
              interpretado del lado del servidor y de uso general que se adapta
              especialmente al <span>desarrollo web</span>. PHP se convierte en
              una gran alternativa para escapar de la posibilidad de tener una
              tienda que no le proporcione una experiencia de navegación
              satisfactoria al usuario.
            </p>
            <p className="text__content requerid">
              <span>CONOCIMIENTO EN HTML ES REQUERIDO</span>
            </p>

            <div className="dashboard-card-clicked-botton">
              <Link to="/ruta/">
                <button className="card-botton">
                  Empezar ruta de aprendizaje
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
