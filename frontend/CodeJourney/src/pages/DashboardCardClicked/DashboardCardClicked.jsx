// DashboardCardClicked.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../../components/services/apiConfig";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink as Link, useParams } from "react-router-dom";

export const DashboardCardClicked = () => {
  const [contenido, setContenido] = useState({});
  const [error, setError] = useState(null);
  const { id } = useParams(); // Para obtener el parámetro de la URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");

        if (!token) {
          // Redirige al login si no hay token
          // Puedes ajustar esto según tus necesidades
          // Aquí puedes redirigir o manejar la falta de token según tu lógica
          console.error("No hay token disponible");
          return;
        }

        const response = await axios.get(
          `${apiUrl}/api/v1/contenido/obtener/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setContenido(response.data);
      } catch (error) {
        console.error("Error al obtener el contenido:", error.message);
        setError("Error al obtener el contenido");
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="card-opasity">
      <div className="dashboard-card-clicked-border">
        <div className="dashboard-card-clicked">
          <div className="dashboard-card-clicked-img">
            <Link className="header__menu-link" to="/dashboard">
              <IoMdArrowRoundBack
                style={{
                  color: "#fff",
                  fontSize: "50px",
                  paddingBottom: "20px",
                }}
              />
            </Link>
            {/* Resto del código... */}
            <div className="dashboard-card-clicked-container">
              <h2 className="dashboard-card-clicked-title">
                {contenido.titulo}
              </h2>
              <p className="text__content">{contenido.descripcion}</p>
              <p className="text__content requerid">
                <span>{contenido.etapa && contenido.etapa.descripcion}</span>
              </p>
              <div className="dashboard-card-clicked-botton">
                <Link to={`/ruta/${contenido.etapa.ruta.id}`}>
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
