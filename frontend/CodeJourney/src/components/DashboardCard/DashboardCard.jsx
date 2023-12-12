import "./DashboardCard.css";
import dashboardcardimg from "../../../public/img/main/caracterist2.webp";
import { NavLink as Link } from "react-router-dom";
export const DashboardCard = () => {
  return (
    <>
      <Link to="/detalle">
        <div className="dashboard-card-border">
          <div className="dashboard-card">
            <div className="dashboard-card-img">
              <img src={dashboardcardimg} alt="" />
            </div>
            <div className="dashboard-card-container">
              <h1 className="dashboard-card-title">php</h1>
              <p className="text__content">
                ¡Bienvenido a Aquí, la educación se adapta a ti. Imagina un
                espacio donde puedes explorar un mundo de conocimiento a tu
                propio ritmo, sin restricciones. Con una amplia variedad de
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
