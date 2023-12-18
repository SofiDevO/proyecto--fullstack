import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { NavLinkEquipo } from "../../components/Navs/NavLinkEquipo";
import "../../styles/global.css";
import "./Login.css";
import { useForm } from "react-hook-form";
import { NavLink as Link, useNavigate } from "react-router-dom";
import axios from "axios";

// Importa la URL de la API desde apiConfig.js
import apiUrl from "../../components/services/apiConfig";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errorMessage, setErrorMessage] = useState(""); // Nuevo estado para el mensaje de error
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Utiliza la URL de la API junto con la ruta específica
      const response = await axios.post(`${apiUrl}/login`, data);

      const token = response.data.token;
      console.log("Token JWT:", token);

      setTokenInCookie(token);

      navigate("/dashboard");
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
    expirationDate.setDate(expirationDate.getDate() + 7); // Caduca en 7 días

    const cookieValue = `token=${token}; expires=${expirationDate.toUTCString()}; path=/`;

    document.cookie = cookieValue;
  };

  return (
    <>
      <Header navlink={<NavLinkEquipo />} />{" "}
      <main>
        <div className="login">
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
            <Link className="secondary-button signup-button" to="/registro">
              Sign up
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
