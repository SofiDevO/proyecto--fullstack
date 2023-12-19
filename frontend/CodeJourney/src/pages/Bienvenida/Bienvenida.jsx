Copy code
import React from "react";
import { Header } from "../../components/Header/Header";
import { NavLinkEquipo } from "../../components/Navs/NavLinkEquipo";
import CustomizedSteppers from "../../components/Stepper/Stepper";
import "./Bienvenida.css";
import { useForm } from "react-hook-form";
import axios from "axios";

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
      // Obtiene el token almacenado en localStorage
      const token = localStorage.getItem("token");

      // Configura el encabezado de autorización
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      // Realiza la solicitud POST a la API con el encabezado de autorización
      const response = await axios.post(
        `${apiUrl}/api/v1/usuario_ruta/registrar`,
        data,
        { headers }
      );

      console.log("Respuesta del servidor:", response.data);
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
              <p>Antes de empezar, marque el contenido que le gustaría que le mostraran</p>
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
