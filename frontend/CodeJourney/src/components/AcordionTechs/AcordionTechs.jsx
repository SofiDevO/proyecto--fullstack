import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { apiUrl } from "../services/apiConfig";

export const AccordionTechs = ({ onTechsFiltered, closeContainer }) => {
  const [routes, setRoutes] = useState(null);
  const [error, setError] = useState(null);
  const [isAllTechsVisible, setIsAllTechsVisible] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");

        if (!token) {
          console.warn("Token no encontrado en las cookies.");
          return;
        }

        const routesResponse = await axios.get(
          `${apiUrl}/api/v1/usuario_ruta/obtenerRutasAsociadas`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!Array.isArray(routesResponse.data)) {
          console.error(
            "La respuesta de la API no es un array:",
            routesResponse.data
          );
          setError("Error al obtener las rutas");
          return;
        }

        setRoutes(routesResponse.data);
        setIsAllTechsVisible(true); // Set all techs to be visible initially
      } catch (error) {
        console.error("Error al obtener las rutas:", error.message);
        setError("Error al obtener las rutas");
      }
    };

    fetchData();
  }, []);

  const handleListItemClick = async (techName, etapaId) => {
    try {
      const token = Cookies.get("token");

      if (!token) {
        return;
      }

      let techsResponse;

      if (techName === "span") {
        techsResponse = await axios.get(
          `${apiUrl}/api/v1/usuario_etapa/filtrar?rutaId=${etapaId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        techsResponse = await axios.get(
          `${apiUrl}/api/v1/usuario_etapa/filtrar?rutaId=${etapaId}&etapaId=${etapaId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

      onTechsFiltered(techsResponse.data);
      closeContainer();
    } catch (error) {
      console.error("Error al obtener tecnologías:", error.message);
    }
  };

  const handleCheckboxChange = async (route) => {
    try {
      if (!isAllTechsVisible) {
        onTechsFiltered(null); // Pass null or an empty array depending on your logic
      } else {
        // Filter technologies for the clicked route
        const token = Cookies.get("token");
        const techsResponse = await axios.get(
          `${apiUrl}/api/v1/usuario_etapa/filtrar?rutaId=${route.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        onTechsFiltered(techsResponse.data);
        closeContainer();
      }

      setIsAllTechsVisible(!isAllTechsVisible); // Toggle the state
    } catch (error) {
      console.error("Error al filtrar tecnologías:", error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (routes === null) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="tecnologias">
      {routes.map((route) => (
        <label key={route.id} className="box__toggle">
          <input
            className="checkbox"
            type="checkbox"
            name={`${route.nombre}${route.id}`}
            checked={isAllTechsVisible}
            onChange={() => handleCheckboxChange(route)}
          />
          <div className="line__container">
            <span
              className="ruta__span"
              onClick={() => handleListItemClick(route.nombre, route.id)}
            >
              {route.nombre.split(" ").pop()}
            </span>
            <div className="container__cruz">
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div>
          {route.tecnologias && (
            <ul className="techs">
              {route.tecnologias.map((tech, index) => (
                <li
                  key={index}
                  className="tech__item tech__item--link"
                  onClick={() => handleListItemClick(tech, route.id)}
                >
                  {tech.nombre}
                </li>
              ))}
            </ul>
          )}
        </label>
      ))}
    </div>
  );
};
