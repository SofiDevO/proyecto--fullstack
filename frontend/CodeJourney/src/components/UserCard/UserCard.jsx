import "./UserCard.css";
import { IoClose } from "react-icons/io5";
import { TbHomeMove } from "react-icons/tb";
import { BiSolidLockOpen } from "react-icons/bi";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrl, apiAvatar, getRandomAvatarId } from "../services/apiConfig";
import Cookies from "js-cookie";
import { NavLink as Link } from "react-router-dom";

export const UserCard = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [userImage, setUserImage] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const ClosePopUp = () => {
    const PopUpClose = document.querySelector(".card-opasity");
    if (PopUpClose) {
      PopUpClose.classList.toggle("hidden");
    }
  };

  const obtenerTodosLosUsuarios = async () => {
    try {
      const token = Cookies.get("token");

      if (!token) {
        navigate("/login");
        return;
      }

      const response = await axios.get(`${apiUrl}/api/v1/usuario/obtener/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error al obtener la lista de usuarios:", error.message);

      if (error.response && error.response.status === 403) {
        navigate("/login");
      }

      setError(true);
    }
  };

  const obtenerInformacionUsuario = async (correoUsuario) => {
    try {
      const todosLosUsuarios = await obtenerTodosLosUsuarios();

      const usuario = todosLosUsuarios.find((u) => u.correo === correoUsuario);

      if (usuario) {
        setNombre(usuario.nombre);
        setCorreo(usuario.correo);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Error al obtener información del usuario:", error.message);

      if (error.response && error.response.status === 403) {
        navigate("/login");
      }

      setError(true);
    }
  };

  const fetchUserImage = async () => {
    try {
      const avatarId = getRandomAvatarId();
      const imageUrl = await getUserImage(avatarId);
      if (imageUrl) {
        setUserImage(imageUrl);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Error al obtener la imagen del usuario:", error.message);
      setError(true);
    }
  };

  useEffect(() => {
    fetchUserImage();

    const token = Cookies.get("token");

    if (!token) {
      navigate("/login");
    } else {
      const storedCorreo = localStorage.getItem("correo");
      if (storedCorreo) {
        obtenerInformacionUsuario(storedCorreo);
      }
    }
  }, [navigate]);

  const getUserImage = async (avatarId) => {
    const avatarUrl = `${apiAvatar}${encodeURIComponent(
      avatarId
    )}.png?apikey=JZES5VswFcOWj1`;
    const response = await axios.get(avatarUrl, {
      responseType: "arraybuffer",
    });
    const blob = new Blob([response.data], { type: "image/png" });
    return URL.createObjectURL(blob);
  };

  const handleLogout = () => {
    console.log("Cerrando sesión...");
    Cookies.remove("token", { path: "/" });
    localStorage.removeItem("correo");
    navigate("/");
  };

  return (
    <div className={`card-opasity hidden ${error && ""}`}>
      <div className="User-card-border">
        <div className="User-card">
          <div className="User-up">
            <p className="text__content email">{correo}</p>
            <div onClick={ClosePopUp}>
              <IoClose
                style={{
                  color: "#fff",
                  fontSize: "35px",
                }}
              />
            </div>
          </div>
          <div className="User-card-container">
            <img src={userImage} alt="userImg" />
            <h2 className="User-card-saludo">
              ¡Hola, <span>{nombre}</span>!
            </h2>
            <div className="Buttons-secction">
              <div className="User-card-botton-menu">
                <Link to="/">
                  <button className="User-botton">
                    <TbHomeMove
                      style={{
                        fontSize: "20px",
                      }}
                    />{" "}
                    MENU DE INICIO
                  </button>
                </Link>
              </div>
              <div className="User-card-botton-close">
                <a href="#" onClick={handleLogout}>
                  <button className="User-botton">
                    <BiSolidLockOpen
                      style={{
                        fontSize: "20px",
                      }}
                    />{" "}
                    CERRAR SESIÓN
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
