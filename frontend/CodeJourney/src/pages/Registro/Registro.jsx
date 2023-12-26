import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { NavLinkEquipo } from "../../components/Navs/NavLinkEquipo";
import { RegistroForm } from "../../components/RegistroForm/RegistroForm";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import CustomizedSteppers from "../../components/Stepper/Stepper";

export const Registro = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [setErrorMessage] = useState("");

  const handleSuccessfulRegistration = (userData) => {
    // Almacena los datos del usuario en el estado
    setUserData(userData);

    // Muestra el formulario de inicio de sesión
    setShowLogin(true);
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
