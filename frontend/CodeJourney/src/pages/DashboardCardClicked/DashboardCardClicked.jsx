import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink as Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "./DashboardCardClicked.css";
import { apiUrl } from "../../components/services/apiConfig";

export const DashboardCardClicked = () => {
  const location = useLocation();
  const etapa = location.state.etapa;
  const [dataCompleta, setDataCompleta] = useState({});
  const [contenido, setContenido] = useState({});
  const [token, setToken] = useState("");

  useEffect(() => {
    // Obtener el token de la cookie
    const savedToken = Cookies.get("miToken");

    if (savedToken) {
      setToken(savedToken);
    }

    const fetchData = async () => {
      try {
        const apiUrlWithEndpoint = `${apiUrl}/api/v1/contenido/obtener`;
        console.log("URL de la API:", apiUrlWithEndpoint);

        const rutasResponse = await axios.get(apiUrlWithEndpoint, {
          headers: {
            Authorization: `Bearer ${savedToken}`,
          },
        });

        if (rutasResponse.status === 200) {
          const data = rutasResponse.data;
          setDataCompleta(data);

          const contenidoEtapa = data.find(
            (item) => item.etapa.id === etapa.id
          );

          if (contenidoEtapa) {
            setContenido(contenidoEtapa);
          } else {
            console.error("No se encontró información para la etapa actual");
          }
        } else if (rutasResponse.status === 403) {
          console.error(
            "Permiso denegado. Verifica los permisos en el servidor."
          );
        } else {
          console.error(
            "Error en la respuesta del servidor:",
            rutasResponse.status,
            rutasResponse.statusText
          );
        }
      } catch (error) {
        console.error("Error al obtener la data del servidor", error);
      }
    };

    fetchData();
  }, [etapa.id]);

  const setCookie = () => {
    const tokenValue = "yourTokenValueHere";
    Cookies.set("miToken", tokenValue, { expires: 7 });
    setToken(tokenValue);
  };

  return (
    <div className="card-opacity">
      <div className="dashboard-card-clicked-border">
        <div className="dashboard-card-clicked">
          <div className="dashboard-card-clicked-img">
            <div className="dashboard-card-clicked-container">
              <h2 className="dashboard-card-clicked-title">{etapa.nombre}</h2>

              {/* Renderizar la descripción del contenido */}
              <p className="text__content">{contenido.descripcion}</p>

              <p className="text__content requerid">
                <span>{etapa.descripcion}</span>
              </p>
              <div className="dashboard-card-clicked-botton">
                <Link to={`/ruta/`}>
                  <button onClick={setCookie} className="card-botton">
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
