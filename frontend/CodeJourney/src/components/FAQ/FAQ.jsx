import * as React from "react";
import "./FAQ.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const FAQ = () => {
  return (
    <div>
      <h2 className="title-faq">FAQ</h2>
      <div className="faq-container">
        <Accordion
          style={{
            borderRadius: "16px",
            backgroundColor: "#00ffff00",
            border: "4px solid #04BD7D",
            padding: "8px 6px",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: "#fff", fontSize: "25px" }} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <div className="ask-faq">
                ¿Cómo puedo comenzar a tomar cursos en la plataforma?
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{padding:"0 12px"}}>
            <Typography>
              <div className="text-faq">
                Para empezar, simplemente crea una cuenta en nuestra plataforma.
                Luego, explora nuestra amplia variedad de cursos que
                recomendamos, luego elige el que más te interese. Una vez que
                hayas seleccionado un curso, puedes inscribirte y comenzar tu
                viaje educativo.
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="faq-container">
        <Accordion
          style={{
            borderRadius: "16px",
            backgroundColor: "#00ffff00",
            border: "4px solid #04BD7D",
            padding: "8px 6px",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: "#fff", fontSize: "25px" }} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <div className="ask-faq">¿Ofrecen cursos gratuitos?</div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{padding:"0 12px"}}>
            <Typography >
              <div className="text-faq">
                Todos los cursos que ofrecemos son una selección de cursos
                gratuitos para que puedas explorar y descubrir nuevos temas sin
                costo. Estos cursos son una excelente manera de conocer nuestra
                plataforma y experimentar la calidad de nuestro contenido.
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="faq-container">
        <Accordion
          style={{
            borderRadius: "16px",
            backgroundColor: "#00ffff00",
            border: "4px solid #04BD7D",
            padding: "8px 6px",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: "#fff", fontSize: "25px" }} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <div className="ask-faq">
                ¿Es posible pausar y reanudar el progreso en un curso?
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{padding:"0 12px"}}>
            <Typography>
              <div className="text-faq">
                Sí, entendemos que la vida puede ser ocupada. Puedes pausar tu
                progreso en un curso y reanudarlo más tarde cuando te convenga.
                Queremos que aprendas a tu propio ritmo.
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="faq-container">
        <Accordion
          style={{
            borderRadius: "16px",
            backgroundColor: "#00ffff00",
            border: "4px solid #04BD7D",
            padding: "8px 6px",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: "#fff", fontSize: "25px" }} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <div className="ask-faq">
                ¿Puedo ver el contenido de los cursos una vez completados?
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{padding:"0 12px"}}>
            <Typography>
              <div className="text-faq">
                Sí, una vez que hayas completado un curso, seguirás teniendo
                acceso al contenido para que puedas repasar y aplicar tus
                conocimientos en el futuro. Queremos que tu aprendizaje sea una
                herramienta continua en tu desarrollo.
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
