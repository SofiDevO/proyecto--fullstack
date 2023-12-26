import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { NavLinkEquipo } from "../../components/Navs/NavLinkEquipo";
import CustomizedSteppers from "../../components/Stepper/Stepper";
import "./Bienvenida.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../components/services/apiConfig";

export const Bienvenida = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedElements, setSelectedElements] = useState([]);
  const [checkedCount, setCheckedCount] = useState(0);

  useEffect(() => {
    // Verifica si la cookie contiene el JWT
    const token = Cookies.get("token");
    if (!token) {
      // Si no está el token, redirige a Login
      navigate("/login");
    }
  }, [navigate]);

  // Obtén el nombre almacenado en localStorage
  const nombreRegistrado = localStorage.getItem("nombre");

  // Validación personalizada para al menos un checkbox seleccionado
  const validateCheckbox = () =>
    checkedCount > 0 || "Selecciona al menos una opción";

  const handleCheckboxChange = (isChecked, elementName) => {
    setCheckedCount((prevCount) => (isChecked ? prevCount + 1 : prevCount - 1));

    if (isChecked) {
      setSelectedElements((prevElements) => [...prevElements, elementName]);
    } else {
      setSelectedElements((prevElements) =>
        prevElements.filter((element) => element !== elementName)
      );
    }
  };

  const onSubmit = async (data) => {
    try {
      const token = Cookies.get("token");
      console.log("Token antes de la solicitud POST:", token);
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      navigate("/dashboard");
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
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
    }
  };

  return (
    <>
      <Header navlink={<NavLinkEquipo />} />
      <main>
        <section className="welcome">
          <CustomizedSteppers />
          <h3 className="welcome__title">
            Te damos la Bienvenida <span> {nombreRegistrado} </span>
          </h3>
          <div className="container__rutas">
            <div className="caja__preferencias">
              <p>
                Antes de empezar, marca el contenido que te gustaría que te
                mostraran
              </p>
              <span>Contenido disponible:</span>
              <form className="form__paths" onSubmit={handleSubmit(onSubmit)}>
                <div className="container__paths">
                  <label className="check__btn">
                    <input
                      className="checkbox"
                      type="checkbox"
                      {...register("1", { validate: validateCheckbox })}
                      onChange={(e) => {
                        handleCheckboxChange(e.target.checked, "Backend");
                      }}
                    />
                    Backend
                  </label>
                  <label className="check__btn">
                    <input
                      className="checkbox"
                      type="checkbox"
                      {...register("2", { validate: validateCheckbox })}
                      onChange={(e) => {
                        handleCheckboxChange(e.target.checked, "Frontend");
                      }}
                    />
                    Frontend
                  </label>
                  <label className="check__btn">
                    <input
                      className="checkbox"
                      type="checkbox"
                      {...register("3", { validate: validateCheckbox })}
                      onChange={(e) => {
                        handleCheckboxChange(e.target.checked, "DataBase");
                      }}
                    />
                    DataBase
                  </label>
                  <label className="check__btn">
                    <input
                      className="checkbox"
                      type="checkbox"
                      {...register("4", { validate: validateCheckbox })}
                      onChange={(e) => {
                        handleCheckboxChange(e.target.checked, "DevOps");
                      }}
                    />
                    DevOps
                  </label>
                </div>
                {errors && errors["1"] && (
                  <p className="helper__text helper__text--warning">
                    {errors["1"].message}
                  </p>
                )}
                <input className="enviar" type="submit" />
              </form>
            </div>
            <div className="containner__selection">
              <h4>Rutas seleccionadas:</h4>
              {selectedElements.length > 0 && (
                <div>
                  <ul>
                    {selectedElements.map((element, index) => (
                      <li key={index}>{element}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
