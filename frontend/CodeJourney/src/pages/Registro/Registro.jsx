import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { NavLinkEquipo } from "../../components/Navs/NavLinkEquipo";
import { RegistroForm } from "../../components/RegistroForm/RegistroForm";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import CustomizedSteppers from "../../components/Stepper/Stepper";

export const Registro = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [nombreRegistrado, setNombreRegistrado] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSuccessfulRegistration = (nombre) => {
    setNombreRegistrado(nombre);

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
              <LoginForm nombreRegistrado={nombreRegistrado} />
            )}
          </div>
        </div>
      </main>
    </>
  );
};
