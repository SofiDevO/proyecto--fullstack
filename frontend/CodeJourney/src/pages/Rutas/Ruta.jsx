import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { apiUrl } from "../../components/services/apiConfig";
import { useNavigate } from "react-router-dom";
import "./Ruta.css";
import "../../styles/global.css";
import { Footer } from "../../components/footer/Footer";
import Cookies from "js-cookie";

export const Ruta = () => {
  const [contenidoData, setContenidoData] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/ruta/")[1];
  const navigate = useNavigate();

  const obtenerContenidos = async () => {
    try {
      const token = Cookies.get("token");

      if (!token) {
        navigate("/login");
        return;
      }
      const response = await fetch(
        `${apiUrl}/api/v1/usuario-contenidos/obtener/etapa/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setContenidoData(data);
      } else {
        // Manejo de errores si la solicitud no es exitosa
        console.error("Error al obtener contenidos");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  useEffect(() => {
    obtenerContenidos();
  }, [id]);

  return (
    <>
      <main>
        <div className="title-container">
          <h1 className="title-ruta">
            ruta
            {id}
          </h1>
          <img src="../img/loading/loading.png" alt="" />
        </div>
        <div className="ruta-container">
          <div></div>
          <div>
            {contenidoData.map((contenido, index) => (
              <Accordion key={index} className="ruta-accordion">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="ruta-spanicon" />}
                  aria-controls={`panel${index + 1}a-content`}
                  id={`panel${index + 1}a-header`}
                >
                  <Typography className="ask-ruta">
                    {contenido.titulo}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="ruta-accordion-details">
                  <Typography>
                    <div className="text-ruta">
                      <div className="container-info">
                        <div className="level-list">
                          <ul>
                            {/* Utiliza la propiedad key aquí */}
                            <li key={index}>{contenido.descripcion}</li>
                          </ul>
                        </div>
                        <div className="level-recommended">
                          <h3 className="subtitle-ruta">
                            El contenido que te recomendamos{" "}
                          </h3>
                          <ul>
                            {/* Aquí puedes renderizar el contenido recomendado */}
                          </ul>
                        </div>
                      </div>
                      <label className="check-ruta">
                        <span>Marcar como completado</span>
                        <input type="checkbox" />
                      </label>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
