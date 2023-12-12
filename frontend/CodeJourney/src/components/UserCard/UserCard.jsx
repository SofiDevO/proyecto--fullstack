import "./UserCard.css";
import dashboardcardimg from "../../../public/img/team/angel.jpg";
import { IoClose } from "react-icons/io5";
import { TbHomeMove } from "react-icons/tb";
import { BiSolidLockOpen } from "react-icons/bi";
export const UserCard = () => {
  return (
    <div className="card-opasity">
      <div className="User-card-border">
        <div className="User-card">
          <div className="User-up">
            <p className="text__content">correo</p>

            <a href="../../../pages/dashboard.jsx">
              <IoClose
                style={{
                  color: "#fff",
                  fontSize: "50px",
                  padding: "0 0 20px 20px",
                }}
              />
            </a>
          </div>
          <div className="User-card-container">
            <img src={dashboardcardimg} alt="" />

            <h2 className="User-card-saludo">hola</h2>

            <div className="Buttons-secction">
              <div className="User-card-botton-menu">
                <a href="#">
                  <button className="User-botton">
                    <TbHomeMove
                      style={{
                        fontSize: "20px",
                      }}
                    />{" "}
                    IR AL MENU DE INICIO
                  </button>
                </a>
              </div>
              <div className="User-card-botton-close">
                <a href="#">
                  <button className="User-botton">
                    <BiSolidLockOpen
                      style={{
                        fontSize: "20px",
                      }}
                    />{" "}
                    CERRAR SECION
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
