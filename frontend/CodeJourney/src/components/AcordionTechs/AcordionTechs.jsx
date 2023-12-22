import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { apiUrl } from "../services/apiConfig";

export const AccordionTechs = () => {
  const [routes, setRoutes] = useState(null); // Cambiado a null para indicar estado de carga
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");

        if (!token) {
          // Redirige al login si no hay token
          // Puedes ajustar esto según tus necesidades
          return;
        }

        // Endpoint para obtener las rutas asociadas al aprendiz
        const routesResponse = await axios.get(
          `${apiUrl}/api/v1/usuario_ruta/obtenerRutasAsociadas`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Verifica si routesResponse.data es un array
        if (!Array.isArray(routesResponse.data)) {
          console.error(
            "La respuesta de la API no es un array:",
            routesResponse.data
          );
          setError("Error al obtener las rutas");
          return;
        }

        // Filtrar tecnologías asociadas a las rutas
        const techsResponse = await Promise.all(
          routesResponse.data.map(async (route) => {
            try {
              const techs = await axios.get(
                `${apiUrl}/api/v1/usuario_etapa/filtrar?rutaId=${route.id}`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );

              return techs.data; // Devuelve solo los datos de techs
            } catch (error) {
              console.error("Error al obtener tecnologías:", error.message);
              return [];
            }
          })
        );

        // Asignar las tecnologías a cada ruta
        setRoutes(
          techsResponse.map((techs, index) => ({
            ...routesResponse.data[index],
            tecnologias: techs.map((item) => item.nombre),
          }))
        );
      } catch (error) {
        console.error("Error al obtener las rutas:", error.message);
        setError("Error al obtener las rutas");
      }
    };

    fetchData();

    // Retorno de llamada para cancelar solicitudes pendientes cuando el componente se desmonta
    return () => {
      // Cancela solicitudes pendientes si es necesario
    };
  }, []); // Se ejecuta al montar el componente

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (routes === null) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="tecnologias">
      {/* Mapea sobre el estado "routes" para renderizar las etiquetas */}
      {routes.map((route) => (
        <label className="box__toggle" key={route.id}>
          {/* Agregamos el id a la propiedad name */}
          <input
            className="checkbox"
            type="checkbox"
            name={`${route.nombre}${route.id}`}
          />
          <div className="line__container">
            <span>{route.nombre.split(" ").pop()}</span>
            <div className="container__cruz">
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div>
          {/* Renderiza las tecnologías aquí */}
          <ul className="techs">
            {route.tecnologias.map((tech, index) => (
              <li key={index} className="tech__item">
                <a className="tech__item--link" href="#">
                  {tech}
                </a>
              </li>
            ))}
          </ul>
        </label>
      ))}
    </div>
  );
};
