import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { apiUrl } from "../services/apiConfig";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${apiUrl}/login`, data);
      const token = response.data.token;
      console.log("Token JWT:", token);

      setTokenInCookie(token);
      setCorreoInLocalStorage(data.email);

      navigate("/welcome");
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
      // Verifica si el error es debido a una contraseña incorrecta
      if (
        (error.response && error.response.status === 403) ||
        error.response.status === 401
      ) {
        setErrorMessage(
          "Contraseña incorrecta. Por favor, inténtalo de nuevo."
        );
      } else {
        setErrorMessage("");
      }
    }
  };

  const setTokenInCookie = (token) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);
    const cookieValue = `token=${token}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookieValue;
  };
  const setCorreoInLocalStorage = (email) => {
    localStorage.setItem("correo", email);
  };
  return (
    <>
      <div className="form-container-login">
        <h1 className="title">login</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-login"
          action="/api/save"
        >
          <label htmlFor="email" className="label">
            E-MAIL
          </label>
          <input
            id="email"
            type="email"
            placeholder="@"
            className="input input-user"
            {...register("email", {
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
          {errors.email && (
            <span className="helper__text helper__text--warning">
              {errors.email.message}
            </span>
          )}
          <label htmlFor="password" className="label">
            PASSWORD
          </label>
          <input
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "El password es requerido",
              },
              maxLength: {
                value: 26,
                message: "Máximo de 26 carácteres",
              },
              minLength: {
                value: 8,
                message: "Mínimo de 8 carácteres",
              },
            })}
            id="password"
            placeholder="***********"
            className="input input-password"
          />
          {errors.password && (
            <span className="helper__text helper__text--warning">
              {errors.password.message}
            </span>
          )}

          {errorMessage && (
            <span className="helper__text helper__text--warning">
              {errorMessage}
            </span>
          )}

          <input
            type="submit"
            value="Login"
            className="primary-button login-button"
          />
        </form>
      </div>
    </>
  );
};
