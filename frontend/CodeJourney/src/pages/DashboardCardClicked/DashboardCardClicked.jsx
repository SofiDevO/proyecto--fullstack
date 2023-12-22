import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { apiUrl } from "../../components/services/apiConfig";
import { useLocation } from "react-router-dom";
import "./DashboardCardClicked.css";
import { NavLink as Link } from "react-router-dom";

export const DashboardCardClicked = () => {
  const { state } = useLocation();
  const [etapa, setEtapa] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!state || !state.id) {
      console.error("ID no proporcionado en el estado.");
      // Puedes redirigir o manejar el error de alguna manera.
      return;
    }

    const fetchData = async () => {
      try {
        const token = Cookies.get("token");

        if (!token) {
          console.error("No hay token disponible");
          return;
        }

        console.log("Fetching data for ID:", state.id);

        const response = await axios.get(
          `${apiUrl}/api/v1/contenido/obtener/`,
          {
            params: {
              id: state.id,
            },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("API Response:", response.data);

        setEtapa(response.data);
      } catch (error) {
        console.error("Error al obtener el contenido:", error.message);
        setError("Error al obtener el contenido");
      }
    };

    fetchData();
  }, [state]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="card-opacity">
      <div className="dashboard-card-clicked-border">
        <div className="dashboard-card-clicked">
          <div className="dashboard-card-clicked-img">
            {/* ... (otro código) */}
            <div className="dashboard-card-clicked-container">
              <h2 className="dashboard-card-clicked-title">{etapa.titulo}</h2>
              <p className="text__content">{etapa.descripcion}</p>
              <p className="text__content requerid">
                <span>{etapa.etapa?.descripcion}</span>
              </p>
              <div className="dashboard-card-clicked-botton">
                {/* Puedes ajustar la URL según tus necesidades */}
                {/* Aquí estoy asumiendo que `/ruta/${etapa.etapa?.ruta?.id}` es válida */}
                <Link to={`/ruta/${etapa.etapa?.ruta?.id}`}>
                  <button className="card-botton">
                    Empezar ruta de aprendizaje
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
