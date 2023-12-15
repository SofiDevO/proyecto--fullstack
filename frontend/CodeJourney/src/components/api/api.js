// Importa la biblioteca Axios
import axios from "axios";

// URL de la API
const apiUrl = "https://backend-q3s3.onrender.com/api/v1/";

// Realiza la solicitud GET a la API
axios
  .get(apiUrl)
  .then((response) => {
    // Maneja la respuesta exitosa
    console.log("Datos de la API:", response.data);
  })
  .catch((error) => {
    // Maneja el error de la solicitud
    console.error("Error al realizar la solicitud:", error);
  });
