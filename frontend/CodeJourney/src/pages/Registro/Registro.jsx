import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { NavLinkEquipo } from "../../components/Navs/NavLinkEquipo";
import { RegistroForm } from "../../components/RegistroForm/RegistroForm";
import { LoginForm } from "../../components/LoginForm/LoginForm";

export const Registro = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSuccessfulRegistration = () => {
    // Muestra el formulario de login
    setShowLogin(true);
  };

  return (
    <>
      <Header navlink={<NavLinkEquipo />} />
      <main>
        <div className="login">
          <div className="form-container-register">
            {!showLogin ? (
              <RegistroForm
                onSuccessfulRegistration={handleSuccessfulRegistration}
                setErrorMessage={setErrorMessage}
              />
            ) : (
              <LoginForm />
            )}
          </div>
        </div>
      </main>
    </>
  );
};
