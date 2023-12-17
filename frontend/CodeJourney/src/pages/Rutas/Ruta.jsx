import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import rutaData from "./rutaData"; // Import the data
import "./Ruta.css";
import "../../styles/global.css";
import { Footer } from "../../components/footer/Footer";

export const Ruta = () => {
  return (
    <>
      <main>
        <div className="title-container">
          <h1 className="title-ruta">
            ruta <br />
            php
          </h1>
          <img src="../img/loading/loading.png" alt="" />
        </div>
        <div className="ruta-container">
          <div></div>
          <div>
            {rutaData.map((section, index) => (
              <Accordion key={index} className="ruta-accordion">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="ruta-spanicon" />}
                  aria-controls={`panel${index + 1}a-content`}
                  id={`panel${index + 1}a-header`}
                >
                  <Typography className="ask-ruta">{section.title}</Typography>
                </AccordionSummary>
                <AccordionDetails className="ruta-accordion-details">
                  <Typography>
                    <div className="text-ruta">
                      <div className="container-info">
                        <div className="level-list">
                          <ul>
                            {section.content.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="level-recommended">
                          <h3 className="subtitle-ruta">
                            El contenido que te recomendamos{" "}
                          </h3>
                          <ul>
                            {section.recommendedContent.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="check-ruta">
                        <span>
                          Conocimiento del <br /> nivel aprendido{" "}
                        </span>
                        <input type="checkbox" />
                      </div>
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
