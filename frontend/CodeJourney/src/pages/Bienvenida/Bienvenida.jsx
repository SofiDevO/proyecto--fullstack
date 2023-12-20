import React, { useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { NavLinkEquipo } from "../../components/Navs/NavLinkEquipo";
import CustomizedSteppers from "../../components/Stepper/Stepper";
import "./Bienvenida.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

import apiUrl from "../../components/services/apiConfig";

export const Bienvenida = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    //Verificar si la cookie contiene el JWT
    const token = Cookies.get("token");
    if (!token) {
      // Si no esta el token, entonces redirige a Login
      navigate("/login");
    }
  }, [navigate]);

  const onSubmit = async (data) => {
    try {
      const token = Cookies.get("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      console.log("Datos del formulario:", data);

      const formattedData = {
        idRutas: Object.entries(data)
          .filter(([key, value]) => value)
          .map(([key]) => parseInt(key)),
      };

      console.log("Datos formateados:", formattedData);

      const response = await axios.post(
        `${apiUrl}/api/v1/usuario_ruta/registrar`,
        formattedData,
        { headers }
      );

      console.log("Respuesta del servidor:", response.data);

      Cookies.remove("token");
      Cookies.set("token", response.data.token, { expires: 7 });
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
