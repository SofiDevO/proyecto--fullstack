import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { apiUrl } from "../services/apiConfig";
import { NavLink as Link, useNavigate } from "react-router-dom";
import "./DashboardCard.css";

export const DashboardCard = () => {
  const [etapas, setEtapas] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");

        if (!token) {
          // Redirige al login si no hay token
          // Puedes ajustar esto según tus necesidades
          navigate("/login");
          return;
        }

        // Endpoint para obtener rutas asociadas al usuario
        const rutasResponse = await axios.get(
          `${apiUrl}/api/v1/usuario_ruta/obtenerRutasAsociadas`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Verifica si rutasResponse.data es un array
        if (!Array.isArray(rutasResponse.data)) {
          console.error(
            "La respuesta de la API no es un array:",
            rutasResponse.data
          );
          setError("Error al obtener las rutas");
          return;
        }

        // Obtener las rutas IDs
        const rutasIds = rutasResponse.data.map((ruta) => ruta.id);

        // Endpoint para obtener etapas filtradas por rutas
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
      }
    };

    fetchData();
  }, [navigate]); // Se ejecuta al montar el componente

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {etapas.map((etapa) => (
        <Link to={`/detalle/${etapa.id}`} key={etapa.id}>
          <div className="dashboard-card-border">
            <div className="dashboard-card">
              <div className="dashboard-card-container">
                <h2 className="dashboard-card-title">{etapa.nombre}</h2>
                <p className="text__content">{etapa.descripcion}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
