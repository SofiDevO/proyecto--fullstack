import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { NavLinkEquipo } from "../../components/Navs/NavLinkEquipo";
import "./Registro.css";
import { useForm } from "react-hook-form";
import { NavLink as Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie"; // Importa la biblioteca js-cookie

// Importa la URL de la API desde apiConfig.js
import apiUrl from "../../components/services/apiConfig";
import CustomizedSteppers from "../../components/Stepper/Stepper";

export const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    getValues,
  } = useForm();

  const [errorMessage, setErrorMessage] = useState(""); // Nuevo estado para el mensaje de error
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Verifica si las contraseñas coinciden
      if (data.clave !== data.confirmarClave) {
        setErrorMessage("Las contraseñas no coinciden.");
        return;
      }

      // Utiliza la URL de la API junto con la ruta específica
      console.log("Datos del formulario:", data);
      const response = await axios.post(
        `${apiUrl}/api/v1/usuario/registrar`,
        data
      );
      console.log("Respuesta del servidor:", response.data);
      if (response.status === 201) {
        // Guarda el token en una cookie
        Cookies.set("token", response.data.token);

        navigate("/welcome");
      } else {
        setErrorMessage("Error en el registro. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
      setErrorMessage("Error en la solicitud. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <>
      <Header navlink={<NavLinkEquipo />} />
      <main>
        <div className="login">
          <CustomizedSteppers />
          <div className="form-container-register">
            <h1 className="title">REGISTER</h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              action="/"
              className="form-register"
            >
              <label htmlFor="nombre" className="label">
                NAME
              </label>
              <input
                type="text"
                id="nombre"
                placeholder="Enter your name"
                className="input input-password"
                {...register("nombre", {
                  required: {
                    value: true,
                    message: "El nombre es requerido",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Nombre inválido",
                  },
                })}
              />
              {errors.nombre && (
                <span className="helper__text helper__text--warning">
                  {errors.nombre.message}
                </span>
              )}

              <label htmlFor="apellido" className="label">
                LAST NAME
              </label>
              <input
                type="text"
                id="apellido"
                placeholder="Enter your lastname"
                className="input input-password"
                {...register("apellido", {
                  required: {
                    value: true,
                    message: "El apellido es requerido",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Apellido inválido",
                  },
                })}
              />
              {errors.apellido && (
                <span className="helper__text helper__text--warning">
                  {errors.apellido.message}
                </span>
              )}

              <label htmlFor="correo" className="label">
                E-MAIL
              </label>
              <input
                type="email"
                id="correo"
                placeholder="@"
                className="input input-password"
                {...register("correo", {
                  required: {
                    value: true,
                    message: "El correo es requerido",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Correo inválido",
                  },
                })}
              />
              {errors.correo && (
                <span className="helper__text helper__text--warning">
                  {errors.correo.message}
                </span>
              )}

              <label htmlFor="clave" className="label">
                Password
              </label>
              <input
                type="password"
                id="clave "
                placeholder="*******"
                className="input input-password"
                {...register("clave", {
                  required: {
                    value: true,
                    message: "El password es requerido",
                  },
                  minLength: {
                    value: 8,
                    message: "Mínimo de 8 caracteres",
                  },
                  maxLength: {
                    value: 26,
                    message: "Máximo de 26 caracteres",
                  },
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/i,
                    message: "Password inválido",
                  },
                })}
              />
              {errors.clave && (
                <span className="helper__text helper__text--warning">
                  {errors.clave.message}
                </span>
              )}

              <label htmlFor="confirmarClave" className="label">
                Confirmar Password
              </label>
              <input
                type="password"
                id="confirmarClave"
                placeholder="*******"
                className="input input-password"
                {...register("confirmarClave", {
                  validate: (value) =>
                    value === getValues("clave") ||
                    "Las contraseñas no coinciden.",
                })}
              />
              {errors.confirmarClave && (
                <span className="helper__text helper__text--warning">
                  {errors.confirmarClave.message}
                </span>
              )}

              {errorMessage && <p className="error-message">{errorMessage}</p>}

              <input
                type="submit"
                value="Confirm"
                className="primary-button login-button"
                disabled={!isDirty} // Deshabilita el botón si el formulario no ha sido modificado
              />
            </form>
          </div>
        </div>
      </main>
    </>
  );
};
