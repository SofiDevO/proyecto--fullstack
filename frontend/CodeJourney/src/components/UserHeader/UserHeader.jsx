import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiAvatar, getRandomAvatarId, apiUrl } from "../services/apiConfig";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const UserHeader = () => {
  const [nombre, setNombre] = useState("");
  const [userImage, setUserImage] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const getUserByEmail = async (correo) => {
    try {
      const token = Cookies.get("token");

      const response = await axios.get(`${apiUrl}/api/v1/usuario/obtener/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const usuarios = response.data;
      const usuario = usuarios.find((user) => user.correo === correo);

      return usuario;
    } catch (error) {
      console.error("Error al obtener el usuario por correo:", error.message);
      return null;
    }
  };

  useEffect(() => {
    const obtenerNombreUsuario = async () => {
      try {
        const token = Cookies.get("token");

        if (!token) {
          navigate("/login");
          return;
        }

        const correoGuardado = localStorage.getItem("correo");

        if (correoGuardado) {
          const usuario = await getUserByEmail(correoGuardado);

          if (usuario) {
            setNombre(usuario.nombre);
          } else {
            setError(true);
          }
        }
      } catch (error) {
        console.error("Error al obtener el nombre del usuario:", error.message);

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

    fetchUserImage();
    obtenerNombreUsuario();
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

  const handleUserClick = () => {
    const popUp = document.querySelector(".card-opasity");
    popUp.classList.remove("hidden");
  };

  return (
    <div className="container__user" onClick={handleUserClick}>
      <div className="header__user">
        {error ? (
          <span>Error al cargar la imagen o usuario no encontrado</span>
        ) : (
          <>
            <img className="user__img" src={userImage} alt="User Icon" />
            <span>{nombre}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default UserHeader;
