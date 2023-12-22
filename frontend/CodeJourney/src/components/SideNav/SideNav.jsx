import { useEffect, useState } from "react";
import axios from "axios";
import "./SideNav.css";
import { Logo } from "../Logo/Logo";
import { apiAvatar, getRandomAvatarId } from "../services/apiConfig";

export const SideNav = () => {
  const nombreRegistrado = localStorage.getItem("nombre");
  const [userImage, setUserImage] = useState("");

  useEffect(() => {
    const fetchUserImage = async () => {
      const avatarId = getRandomAvatarId();
      const imageUrl = await getUserImage(avatarId);
      if (imageUrl) {
        setUserImage(imageUrl);
      }
    };

    fetchUserImage();
  }, []);

  const getUserImage = async (avatarId) => {
    try {
      const avatarUrl = `${apiAvatar}${encodeURIComponent(
        avatarId
      )}.png?apikey=JZES5VswFcOWj1`;
      const response = await axios.get(avatarUrl, {
        responseType: "arraybuffer",
      });
      const blob = new Blob([response.data], { type: "image/png" });
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error("Error al obtener la imagen del usuario:", error.message);
      return null;
    }
  };

  return (
    <>
      <header className="header__side">
        <Logo />
        <a href="#" className="container__user">
          <div className="header__user">
            <img className="user__img" src={userImage} alt="User Icon" />
            <span>{nombreRegistrado}</span>
          </div>
        </a>
        <div className="container__inner">
          <label className="box__toggle">
            <span>Frontend</span>
            <input class="checkbox" type="checkbox" name="frontend" id="" />
            <ul class="techs">
              <li>
                <a href="#">HTML</a>
              </li>
              <li>
                <a href="#">CSS</a>
              </li>
              <li>
                <a href="#">Javascript</a>
              </li>
              <li>
                <a href="#">React</a>
              </li>
            </ul>
          </label>
        </div>
      </header>
    </>
  );
};
