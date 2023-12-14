
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Ruta.css";


export const Ruta = () => {
  return (
    <div className="ruta-container">
    <div>
        <div className="title-container">
        <h1 className="title-ruta">ruta <br />php</h1>
      <img src="../img/loading/loading.png" alt="" />
      
    



        </div>
   
   
    <div className="ruta-container">
        <Accordion
          style={{
            borderRadius: "16px",
            backgroundColor: "#00ffff00",
            border: "4px solid #04BD7D",
            padding: "8px 6px",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            spaceBetween:"space-between"
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
              <div className="ask-ruta">
              NIVEL 1 - Front y Formulas
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{padding:"0 12px"}}>
            <Typography>
  <div className="text-ruta">
    <div className="container-info">
    <div className="level-list">
      <ul>
        <li>Conocimiento de los tipos primitivos</li>
        <li>Declaración de variables, considerando los diferentes tipos</li>
        <li>Uso de estructuras condicionales ('if', 'else')</li>
        <li>Conocimiento de los operadores de asignación y comparación</li>
        <li>Uso de estructuras de repetición y bucles ('while', 'for')</li>
        <li>Uso de funciones, paso de parámetros y argumentos</li>
        <li>Manipulación de métodos</li>
        <li>Manipulación de arrays y listas</li>
      </ul>
    </div>
    <div className="level-recommended">
      <h3 className="subtitle-ruta">El contenido que te recomendamos </h3>
      <ul>
        <li>W3Schools: PHP Variables</li>
        <li>(The only proper) PDO tutorial</li>
        <li>IBM: Containers</li>
      </ul>
    </div>

    </div>
    <div className="check-ruta">
    <span>Conocimiento del <br /> nivel aprendido </span>
    <input type="checkbox" />
    </div>
    
  </div>
</Typography>

          </AccordionDetails>
        </Accordion>
      </div>

      <div className="ruta-container">
        <Accordion
        style={{
            borderRadius: "16px",
            backgroundColor: "#00ffff00",
            border: "4px solid #04BD7D",
            padding: "8px 6px",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
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
              <div className="ask-ruta">NIVEL 2 - Metodos de envio</div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{padding:"0 12px"}}>
            <Typography >
              <div className="text-ruta">
               Espacio para contenido
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="ruta-container">
        <Accordion
          style={{
            borderRadius: "16px",
            backgroundColor: "#00ffff00",
            border: "4px solid #04BD7D",
            padding: "8px 6px",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
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
              <div className="ask-ruta">
                NIVEL 3 - Clases
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{padding:"0 12px"}}>
            <Typography>
              <div className="text-ruta">
                Espacio para contenido
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="ruta-container">
        <Accordion
           style={{
            borderRadius: "16px",
            backgroundColor: "#00ffff00",
            border: "4px solid #04BD7D",
            padding: "8px 6px",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            cursor:"pointer"
        
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
              <div className="ask-ruta">
              Conociomientos adicionales
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{padding:"0 12px"}}>
            <Typography>
              <div className="text-ruta">
                Espacio para contenido
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
</div>
   </div>
  )
}
