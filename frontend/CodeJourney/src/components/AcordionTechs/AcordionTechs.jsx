// AccordionTechs.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { apiUrl } from "../services/apiConfig";
import { useNavigate } from "react-router-dom";

export const AccordionTechs = ({ onTechsFiltered, closeContainer }) => {
  /* const navigate = useNavigate(); */
  const [routes, setRoutes] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");
    console.log("Token en AccordionTechs:", token);

    if (!token) {
      console.warn("Token no encontrado en las cookies.");
      return;
    }
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");

        if (!token) {
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

        // Actualiza el estado de routes con la respuesta de la API
        setRoutes(routesResponse.data);
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
        // Si se hizo clic en el span, filtra solo por ruta
        techsResponse = await axios.get(
          `${apiUrl}/api/v1/usuario_etapa/filtrar?rutaId=${etapaId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        // Si se hizo clic en el li, filtra por ruta y etapa
        techsResponse = await axios.get(
          `${apiUrl}/api/v1/usuario_etapa/filtrar?rutaId=${etapaId}&etapaId=${etapaId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

      // Pasa los datos filtrados a la función onTechsFiltered
      onTechsFiltered(techsResponse.data);

      // Cierra el contenedor al hacer clic en "ruta__span" o "tech__item"
      closeContainer();
    } catch (error) {
      console.error("Error al obtener tecnologías:", error.message);
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
        <label className="box__toggle" key={route.id}>
          <input
            className="checkbox"
            type="checkbox"
            name={`${route.nombre}${route.id}`}
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
          <ul className="techs">
            {route.tecnologias &&
              route.tecnologias.map((tech, index) => (
                <li
                  key={index}
                  className="tech__item tech__item--link"
                  onClick={() => handleListItemClick(tech, route.id)}
                >
                  {tech}
                </li>
              ))}
          </ul>
        </label>
      ))}
    </div>
  );
};
