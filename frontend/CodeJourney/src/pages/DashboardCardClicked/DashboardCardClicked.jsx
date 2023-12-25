import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";
import "./DashboardCardClicked.css";
import { IconsBG } from "../../components/IconsBG/IconsBG";

export const DashboardCardClicked = () => {
  const location = useLocation();
  const etapa = location.state.etapa;
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const savedToken = Cookies.get("miToken");

        if (!savedToken) {
          navigate("/login");
          return;
        }

        setToken(savedToken);
      } catch (error) {
        console.error("Error al obtener la data del servidor", error);

        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        }
      }
    };

    fetchData();
  }, [navigate]);

  const handleStartLearning = () => {
    navigate(`/ruta/${etapa.id}`);
  };

  const handleGoBack = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <div className="card-opacity">
        <div className="dashboard-card-clicked-border">
          <div className="dashboard-card-clicked">
            <div className="dashboard-card-clicked-img">
              <IoMdArrowRoundBack
                onClick={handleGoBack}
                style={{
                  color: "#fff",
                  fontSize: "50px",
                  paddingBottom: "20px",
                }}
              />
              <div className="dashboard-card-clicked-container">
                <h2 className="dashboard-card-clicked-title">{etapa.nombre}</h2>
                <p className="text__content requerid">
                  <span>{etapa.descripcion}</span>
                </p>
                <div className="dashboard-card-clicked-botton">
                  <button onClick={handleStartLearning} className="card-botton">
                    Empezar ruta de aprendizaje
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <IconsBG />
    </>
  );
};
