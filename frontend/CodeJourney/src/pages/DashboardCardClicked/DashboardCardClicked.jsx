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
    const fetchData = async () => {
      try {
        // Retrieve the selected etapa ID from local storage
        const selectedEtapaId = localStorage.getItem("selectedEtapaId");

        if (!selectedEtapaId) {
          console.error("ID no proporcionado en el estado.");
          // Puedes redirigir o manejar el error de alguna manera.
          return;
        }

        const token = Cookies.get("token");

        if (!token) {
          console.error("No hay token disponible");
          return;
        }

        // Obtener todas las rutas asociadas
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

        // Mapear los IDs de las rutas asociadas
        const rutasIds = rutasResponse.data.map((ruta) => ruta.id);

        // Buscar la etapa correspondiente al ID seleccionado
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

        const selectedEtapa = etapasResponse.data.find(
          (etapa) => etapa.id === parseInt(selectedEtapaId)
        );

        if (!selectedEtapa) {
          console.error("Etapa no encontrada para el ID seleccionado.");
          // Puedes redirigir o manejar el error de alguna manera.
          return;
        }

        // Ahora, puedes utilizar la información de la etapa encontrada
        console.log("Información de la etapa seleccionada:", selectedEtapa);

        setEtapa(selectedEtapa);
      } catch (error) {
        console.error("Error al obtener la información:", error.message);
        setError("Error al obtener la información");
      }
    };

    fetchData();
  }, []);

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
                <Link to={`/ruta/`}>
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
