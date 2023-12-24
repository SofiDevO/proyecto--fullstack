import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { apiUrl } from "../services/apiConfig";
import { useNavigate } from "react-router-dom";
import "../DashboardCard/DashboardCard.css";

export const DashboardCardAll = () => {
  const navigate = useNavigate();
  const [etapas, setEtapas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");

        if (!token) {
          navigate("/login");
          return;
        }

        const rutasResponse = await axios.get(
          `${apiUrl}/api/v1/usuario_ruta/obtenerRutasAsociadas`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!Array.isArray(rutasResponse.data)) {
          console.error(
            "La respuesta de la API no es un array:",
            rutasResponse.data
          );
          setError("Error al obtener las rutas");
          return;
        }

        const rutasIds = rutasResponse.data.map((ruta) => ruta.id);

        const etapasResponse = await axios.get(
          `${apiUrl}/api/v1/usuario_etapa/filtrar?${rutasIds
            .map((rutaId) => `rutaId=${rutaId}`)
            .join("&")}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setEtapas(etapasResponse.data);
      } catch (error) {
        console.error("Error al obtener las etapas:", error.message);
        setError("Error al obtener las etapas");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const handleCardClick = (etapaId) => {
    // Save the selected etapa ID in local storage
    localStorage.setItem("selectedEtapaId", etapaId);
    // Navigate to the /detalle route
    navigate("/detalle");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {etapas.map((etapa) => (
        <div
          onClick={() => handleCardClick(etapa.id)}
          className="dashboard-card-border"
          key={etapa.id}
        >
          <div className="dashboard-card">
            <div className="dashboard-card-container">
              <h2 className="dashboard-card-title">{etapa.nombre}</h2>
              <p className="text__content">{etapa.descripcion}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
