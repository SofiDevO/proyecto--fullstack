import React from "react";
import { Header } from "../../components/Header/Header";
import { NavLinkEquipo } from "../../components/Navs/NavLinkEquipo";
import CustomizedSteppers from "../../components/Stepper/Stepper";
import "./Bienvenida.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie"; // Importa la biblioteca js-cookie

// Importa la URL de la API desde apiConfig.js
import apiUrl from "../../components/services/apiConfig";

export const Bienvenida = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Obtiene el token almacenado en la cookie
      const token = Cookies.get("token");

      // Configura el encabezado de autorización
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      console.log("Datos del formulario:", data);

      // Transforma el formato de los datos para la solicitud POST
      const formattedData = {
        idRutas: Object.entries(data)
          .filter(([key, value]) => value)
          .map(([key]) => parseInt(key)),
      };

      console.log("Datos formateados:", formattedData);

      // Realiza la solicitud POST a la API con el encabezado de autorización
      const response = await axios.post(
        `${apiUrl}/api/v1/usuario_ruta/registrar`,
        formattedData,
        { headers }
      );

      console.log("Respuesta del servidor:", response.data);

      // Borra el token existente y guarda el nuevo token en la cookie
      Cookies.remove("token");
      Cookies.set("token", response.data.token, { expires: 7 }); // Guarda el nuevo token por 7 días
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
    }
  };

  return (
    <>
      <Header navlink={<NavLinkEquipo />} />
      <main>
        <section className="welcome">
          <h3 className="welcome__title">Te damos la Bienvenida</h3>
          <div className="container__rutas">
            <aside className="side__steps">
              <CustomizedSteppers />
            </aside>
            <div className="caja__preferencias">
              <p>
                Antes de empezar, marque el contenido que le gustaría que le
                mostraran
              </p>
              <span>Contenido disponible:</span>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                  <input type="checkbox" {...register("1")} />
                  Backend
                </label>
                <label>
                  <input type="checkbox" {...register("2")} />
                  Frontend
                </label>
                <label>
                  <input type="checkbox" {...register("3")} />
                  DataBase
                </label>
                <label>
                  <input type="checkbox" {...register("4")} />
                  DevOps
                </label>

                <input type="submit" />
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
