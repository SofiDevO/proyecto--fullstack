import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { NavLinkEquipo } from "../../components/Navs/NavLinkEquipo";
import { RegistroForm } from "../../components/RegistroForm/RegistroForm";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import CustomizedSteppers from "../../components/Stepper/Stepper";
import Cookies from "js-cookie"; // Importa la librería js-cookie

export const Registro = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSuccessfulRegistration = (userData) => {
    // Almacena los datos del usuario en el estado
    setUserData(userData);

    // Guarda la cookie con el token después de un registro exitoso
    saveTokenInCookie(userData.token);

    // Muestra el formulario de inicio de sesión
    setShowLogin(true);
  };

  // Función para guardar la cookie con el token
  const saveTokenInCookie = (token) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);

    // Establece la cookie con el token y su fecha de expiración
    Cookies.set("token", token, { expires: expirationDate });
  };

  return (
    <>
      <Header navlink={<NavLinkEquipo />} />
      <main>
        <div className="login">
          <CustomizedSteppers showLogin={showLogin} />
          <div className="form-container-register">
            {!showLogin ? (
              <RegistroForm
                onSuccessfulRegistration={handleSuccessfulRegistration}
                setErrorMessage={setErrorMessage}
              />
            ) : (
              // Pasa los datos del usuario al formulario de inicio de sesión
              <LoginForm userData={userData} />
            )}
          </div>
        </div>
      </main>
    </>
  );
};
