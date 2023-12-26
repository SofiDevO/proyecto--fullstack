import React, { useState } from "react";
import "./Registro.css";
import { useForm } from "react-hook-form";
import axios from "axios";

import { apiUrl } from "../services/apiConfig";
export const RegistroForm = ({ onSuccessfulRegistration, setErrorMessage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    getValues,
  } = useForm();

  const [errorMessage, setLocalErrorMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      if (data.clave !== data.confirmarClave) {
        setLocalErrorMessage("Las contraseñas no coinciden.");
        return;
      }

      const response = await axios.post(
        `${apiUrl}/api/v1/usuario/registrar`,
        data
      );

      console.log("Respuesta del servidor:", response.data);
      if (response.status === 201) {
        onSuccessfulRegistration(response.data);
      } else {
        setLocalErrorMessage(
          "Error en el registro. Por favor, inténtalo de nuevo."
        );
      }
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
      setLocalErrorMessage(
        "Error en la solicitud. Por favor, inténtalo de nuevo."
      );
    }
  };

  return (
    <>
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
              value: /^[A-Za-záéíóúüÜñÑ\s]+$/i,
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
              value: /^[A-Za-záéíóúüÜñÑ\s]+$/i,
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
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.(com|net|mx)$/i,
              message:
                "Correo inválido. Asegúrate de que el correo contenga ' el formato correcto'",
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
              message:
                "El password debe tener al menos 8 cáracteres, 1 mayíscula, 1 signo",
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
              value === getValues("clave") || "Las contraseñas no coinciden.",
          })}
        />
        {errors.confirmarClave && (
          <span className="helper__text helper__text--alert">
            {errors.confirmarClave.message}
          </span>
        )}

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <input
          type="submit"
          value="Confirm"
          className="primary-button login-button"
          disabled={!isDirty} // Disable the button if the form has not been modified
        />
      </form>
    </>
  );
};
